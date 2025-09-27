<script setup>
import { useHead } from "#imports"

// Immediate dark mode fix (prevents flash of wrong color)
useHead({
    app: {
        head: {
            link: [] // prevents Nuxt from injecting /manifest.json automatically
        }
    },
    script: [
        {
            children: `
                (function() {
                    const savedMode = localStorage.getItem("darkMode");
                    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
                    if (savedMode === "enabled" || (!savedMode && prefersDark)) {
                        document.documentElement.classList.add("dark");
                    } else {
                        document.documentElement.classList.remove("dark");
                    }
                })();
            `
        }
    ],
    link: [
        {
            rel: "manifest",
            href: "/manifest.json"
        }
    ],
    meta: [
        { name: "theme-color", content: "#ffffff" }
    ]
})
</script>
