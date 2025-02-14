<template>
    <div class="portfolioHighlightsWrap">
        <div class="portfolioHighlightsInner">
            <div class="portfolioHighlights__title">
                <h2>Recent Projects</h2>
            </div>
            <div class="portfolioHighlights__content portfolioHighlights">
                <div class="portfolioHighlightsItem" v-for="item in portfolioItems" :key="item.id">
                    <img :src="item.image" :alt="item.title" class="portfolioHighlightsItem__image" />
                    <h3 v-html="item.title"></h3>
                    <div class="portfolioHighlightsItem__technologies" v-html="item.technologies"></div>
                    <div class="portfolioHighlightsItem__description" v-html="item.description"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive } from "vue";

const portfolioItems = reactive([
    {
        image: "/portfolio-highlights/imv.png",
        title: "IMV Imaging",
        technologies: "WordPress, WooCommerce, Vue",
        description: "A multi language, multi region website built with WordPress for a veterinary imaging company.",
    },
    {
        image: "/portfolio-highlights/autonomy.png",
        title: "Autonomy",
        technologies: "Laravel, Nuxt, Typescript",
        description: "A SaaS product for the automotive industry.",
    },
    {
        image: "/portfolio-highlights/fitness-chef.png",
        title: "Fitness Chef",
        technologies: "WordPress, WooCommerce, Vue",
        description: "A WordPress site for a fitness and nutrition subscription based service.",
    },
]);
</script>

<style scoped lang="less">
.portfolioHighlightsWrap {
    .portfolioHighlightsInner {
        .wrapper;

        .portfolioHighlights__title {
            margin-bottom: 20px;
        }
    }

    .portfolioHighlights {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 30px;
        margin-bottom: 30px;

        @media @tablet {
            grid-template-columns: repeat(2, 1fr);
        }

        @media @mobile {
            display: block;
        }

        .portfolioHighlightsItem {
            margin: 0 0 20px;

            &__technologies {
                opacity: 0.7;
                margin-bottom: 10px;
            }

            &__image {
                width: 100%;
                aspect-ratio: 3 / 2;
                border: 1px solid #f1f1f1;
            }
        }
    }
}
</style>
