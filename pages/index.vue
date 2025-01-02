<template>
    <div v-cloak>
        <main>
            <HeaderAbout />
            <PortfolioHighlights />
            <BrandGrid />
            <Testimonial />
        </main>
    </div>
</template>

<script setup>
import SocialIcon from "@/components/SocialIcon.vue";

useHead({
    title: "Andrew Morgan - PHP and JavaScript Developer based in Dundee, Scotland",
    meta: [
        {
            name: "description",
            content:
                "Andrew Morgan's portfolio showcasing his experience with PHP and JavaScript based web development.",
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
