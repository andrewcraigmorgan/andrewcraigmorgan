// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    target: "static",
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    css: ["@/assets/css/fonts.css"],
    app: {
        baseURL: "/andrewcraigmorgan/",
    },
});
