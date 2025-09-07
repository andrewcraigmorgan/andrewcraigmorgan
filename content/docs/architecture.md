# Architecture Overview

This document describes the current architecture of the Nuxt 3 application as reflected by the project's package.json and typical Nuxt 3 conventions. It focuses on routing, rendering modes, data flow, runtime configuration, and the content/asset pipeline.

## High-level summary
- Nuxt 3 (nuxt ^3.14) is the framework and Nitro is the underlying server engine.
- The project supports hybrid deployment modes: static site generation (SSG) and server-rendered (SSR) operation. The scripts include `nuxt generate` and `nuxt build` / `nuxt preview`.
- Third-party integrations (OpenAI and Resend) are present as dependencies and should be used from server-side code to keep credentials secret.
- The toolchain uses Vite (via Nuxt), with additional build tooling: `vite-svg-loader` for SVG imports and `less` for styles preprocessing. The @nuxtjs/google-fonts module and normalize.css are included for global typography and baseline CSS.

---

## Routing
- Routing is file-based and provided by Nuxt 3 (Vue Router under the hood). Place pages under `pages/` (or use the app directory conventions) and Nuxt generates corresponding routes automatically.
- Dynamic routes: use bracketed filenames (e.g., `pages/posts/[id].vue`) to create param-driven routes.
- Nested routes and route metadata follow the file structure. Use the standard composables `useRouter()` and `useRoute()` to access navigation and route params.
- The project includes an explicit `vue-router` dependency, which is compatible with Nuxt’s router. This is typically not required for standard usage but allows direct use of Vue Router APIs when needed.
- Server endpoints (API routes) live under `server/api/` (or as Nitro event handlers). Those are routed independently of the frontend pages and are the recommended place to perform server-only operations (e.g., calls to OpenAI / Resend).

---

## Rendering modes
This codebase supports a hybrid strategy:

- Static Generation (SSG)
  - `npm run generate` creates pre-rendered HTML for routes available at build time. The project’s `deploy` script also runs `nuxt generate`, indicating static generation is commonly used for deployment.
  - Use SSG for pages whose content can be resolved at build time (e.g., markdown, CMS snapshot, pre-fetched API results) to maximize performance and reduce server load.

- Server-Side Rendering (SSR) / Server Preview
  - `npm run build` + `npm run preview` supports building and previewing an SSR deployment (or server-hosted Nitro deployment).
  - SSR is appropriate for pages that require realtime data or must keep secrets server-side.

- Hydration
  - Regardless of SSG or SSR, Nuxt provides client hydration of server-rendered markup. Use server-side data fetching utilities (see Data Flow) when you want results rendered on the server and hydrated on the client.

Choose SSG vs SSR per-page or per-route depending on data freshness, private data, and performance needs. Nuxt supports mixing both modes within a single app.

---

## Data flow
- Client ↔ Server
  - Client-side components can use composables like `useFetch`, `useAsyncData`, or Vue reactivity to request data. These calls may hit server API endpoints (`server/api/*`) or external services directly (but calling external services directly from the browser is discouraged when secrets are required).
- Server-side
  - Server endpoints (Nitro handlers / server API routes) should act as a proxy and orchestrator for third-party APIs (e.g., OpenAI, Resend). This avoids exposing API keys to the client.
  - Use server-only composables (e.g., `server/api/*`, `useServerFetch` patterns) and the server runtime (Nitro) for confidential operations.
- Build-time (SSG)
  - During `nuxt generate`, data-fetching hooks executed on the server can fetch external content and embed the results into the generated HTML/payloads. This is useful for static content or expensive API calls that can be performed once at build time.
- Third-party integrations
  - openai and resend are included as dependencies; these libraries are intended to be used only server-side (in `server/api/*`) or in server middleware to keep credentials secure.
- Typical request flow examples:
  - Client -> /api/generate -> server-side handler -> OpenAI -> process -> return JSON -> client
  - Build-time: `nuxt generate` -> server data fetching -> fetch external content -> render static pages

---

## Runtime configuration & secrets
- Use Nuxt’s runtime config (`nuxt.config` runtimeConfig + `useRuntimeConfig()`) to manage environment-specific settings:
  - `runtimeConfig.public` for values safe to expose to the client.
  - server-only runtime config fields (top-level runtime config) for secrets (OpenAI and Resend keys). These values are available only on the server and are not serialized to the client.
- Best practice:
  - Put API keys and sensitive credentials in server runtime config or environment variables and access them via `useRuntimeConfig()` inside server code (API routes or server-side data fetchers).
  - Never import or instantiate server-only SDKs directly inside client code. Wrap them in server endpoints or server utilities.
- Nitro deployment
  - When deploying to serverless platforms, configure environment variables according to the platform and ensure Nitro has access to them (they will be available in runtimeConfig).

---

## Content and asset pipeline
- Assets and styles:
  - `less` is present for preprocessing; `.less` files will be processed by the Vite/Nuxt build pipeline.
  - `normalize.css` is included as a baseline stylesheet.
  - `@nuxtjs/google-fonts` module will inject or preload fonts according to module config, typically at build/runtime.
- SVGs:
  - `vite-svg-loader` enables importing SVG files as Vue components (inline SVG compilation). SVGs imported under `assets/` or directly from components become performant, tree-shaken Vue components.
- Static content:
  - The project does not list `@nuxt/content` in package.json; if markdown/content pages are required, they may be handled manually (e.g., storing markdown and parsing at build-time) or the Content module may be added later.
- Build & bundling:
  - Vite (via Nuxt) handles the module bundling, CSS extraction, and asset optimization. The SVG loader and Less preprocessor run as part of the Vite pipeline.
- Pre- and post-install:
  - `postinstall: nuxt prepare` ensures Nuxt prepares any necessary artifacts after dependency install (useful for local dev and certain module setups).

---

## Serverless and Nitro considerations
- Nitro runs server code in various deployment targets (Node, serverless functions). Implement API endpoints under `server/api/` or create Nitro event handlers for low-level control.
- Keep server-only libraries (openai, resend) inside server folders to ensure they are not bundled for client runtime.
- Use Nitro’s prerendering options for hybrid routes that need to be statically generated while still supporting server runtime.

---

## Recommendations / Best practices
- Use server API endpoints (server/api/*) to interact with OpenAI / Resend to avoid leaking secrets.
- Choose SSG (`nuxt generate`) for content that is stable and can be generated at build time; use SSR when real-time data or secure server-side processing is required.
- Use `useAsyncData`/`useFetch` on the server side for SSR/SSG to embed data in rendered HTML and reduce client fetches.
- Store secrets in environment variables and expose them only via server runtimeConfig.
- Keep UI routing declarative via file-based pages. Use programmatic routing sparingly and rely on Nuxt/Vue Router composables where needed.
- If you need a content authoring workflow or markdown-driven pages, consider adding @nuxt/content (or pulling content in build-time scripts) since it is not currently included.

---

If you want, I can produce a diagram or a short checklist for migrating specific logic (OpenAI/Resend calls, authentication flows) into server endpoints or show example server endpoint snippets that use `useRuntimeConfig()` safely.