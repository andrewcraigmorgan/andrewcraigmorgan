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
    css: ["normalize.css", "@/assets/styles/style.css"],
    app: {
        baseURL: "/",
    },
    vite: {
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
            Inter: [200, 400],
        },
        display: "swap",
        prefetch: true,
        preconnect: true,
    },
});
