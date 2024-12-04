<template>
    <div v-cloak>
        <main>
            <div class="portfolio">
                <h1 class="portfolio__title">Andrew Morgan</h1>
                <p class="portfolio__subtitle">Transforming ideas into practical digital solutions.</p>
                <SocialIcon />
            </div>
        </main>
    </div>
</template>

<script setup>
import SocialIcon from "@/components/SocialIcon.vue";

useHead({
    title: "Andrew Morgan - Transforming ideas into practical digital solutions",
    meta: [
        {
            name: "description",
            content: "Andrew Morgan's portfolio showcasing his experience in PHP and JavaScript based web development.",
        },
    ],
});
</script>

<style lang="less">
.portfolio {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    color: var(--lightTextColour);
    padding: 20px;

    &__title {
        font-size: 35px;
        margin: 0 0 10px;
        padding: 0;

        @media @mobile {
            font-size: 25px;
        }
    }

    &__subtitle {
        font-size: 20px;
    }

    &__social-icons {
        display: flex;
        gap: 1.5rem;
        margin-top: 1rem;
        justify-content: center;

        a {
            color: white;
            font-size: 1.5rem;
            text-decoration: none;
            transition: color 0.3s;

            &:hover {
                color: #d1d1d1;
            }
        }
    }
}
</style>
