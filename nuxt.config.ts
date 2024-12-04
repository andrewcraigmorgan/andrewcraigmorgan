// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    head: {
        meta: [
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
        ],
    },
    ssr: true,
    target: "static",
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    css: ["@/assets/css/fonts.css"],
    app: {
        baseURL: "/",
    },
});
