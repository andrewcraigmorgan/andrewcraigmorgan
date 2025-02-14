<template>
    <div class="brandsGridWrapper">
        <div class="brandsGrid">
            <div class="brandItem" v-for="(brand, index) in brands" :key="index">
                <component :is="brand.logo" class="brandIcon" :alt="brand.name" />
            </div>
        </div>
    </div>
</template>

<script setup>
import PhpIcon from '@/assets/brand-images/php.svg';
import JavascriptIcon from '@/assets/brand-images/js.svg';
import VueIcon from '@/assets/brand-images/vue.svg';
import NuxtIcon from '@/assets/brand-images/nuxt.svg';
import ReactIcon from '@/assets/brand-images/react.svg';
import WordpressIcon from '@/assets/brand-images/wordpress.svg';
import LaravelIcon from '@/assets/brand-images/laravel.svg';
import NextIcon from '@/assets/brand-images/nextjs.svg';

const brands = [
    { logo: PhpIcon, name: "PHP" },
    { logo: JavascriptIcon, name: "JavaScript" },
    { logo: VueIcon, name: "Vue" },
    { logo: NuxtIcon, name: "Nuxt" },
    { logo: ReactIcon, name: "React" },
    { logo: WordpressIcon, name: "WordPress" },
    { logo: LaravelIcon, name: "Laravel" },
    { logo: NextIcon, name: "Next.js" },
];
</script>

<style lang="less">
.brandsGridWrapper {
    padding: 40px 0;

    .brandsGrid {
        .wrapper;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
        gap: 40px;

        .brandItem {
            display: flex;
            justify-content: center;
            align-items: center;

            .brandIcon {
                width: 100px;
                height: auto;
                fill: #333;
            }
        }
    }

    @media @mobile {
        .brandsGrid {
            grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
            gap: 20px;

            .brandItem {
                .brandIcon {
                    width: 60px;
                    height: auto;
                }
            }
        }
    }

    @media (prefers-color-scheme: dark) {
        .brandIcon {
            fill: #fff;
        }
    }
}
</style>
