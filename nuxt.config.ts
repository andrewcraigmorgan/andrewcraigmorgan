// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    head: {
        meta: [
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            {
                name: "theme-color",
                content: "#000000", // Matches your manifest's theme color
            },
        ],
        link: [
            {
                rel: "icon",
                type: "image/x-icon",
                href: "/favicon.ico",
            },
            {
                rel: "icon",
                type: "image/png",
                href: "/favicon.png",
                sizes: "192x192",
            },
            {
                rel: "apple-touch-icon",
                href: "/apple-touch-icon.png",
                sizes: "180x180",
            },
            {
                rel: "manifest",
                href: "/manifest.json",
            },
        ],
    },
    ssr: true,
    target: "static",
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    css: ["normalize.css", "@/assets/styles/style.css"],
    app: {
        baseURL: "/",
    },
    vite: {
        plugins: [require("vite-svg-loader")()],
        css: {
            preprocessorOptions: {
                less: {
                    additionalData: `
                        @import "@/assets/styles/variables.less";
                        @import "@/assets/styles/mixins.less";
                    `,
                },
            },
        },
    },
    modules: ["@nuxtjs/google-fonts"],
    googleFonts: {
        families: {
            "Open+Sans": [200, 400],
            Oxygen: [400],
        },
        display: "swap",
        prefetch: true,
        preconnect: true,
    },
});
