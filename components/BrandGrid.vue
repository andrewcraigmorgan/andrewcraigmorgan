<template>
    <div class="brandsGridWrapper">
        <div class="brandsGrid">
            <div class="brandItem" v-for="(brand, index) in brands" :key="index">
                <img :src="brand.logo" :alt="brand.name" />
            </div>
        </div>
    </div>
</template>

<script setup>
const brands = [
    { logo: "/brand-images/php.svg", name: "PHP" },
    { logo: "/brand-images/javascript.svg", name: "JavaScript" },
    { logo: "/brand-images/vue.svg", name: "Vue" },
    { logo: "/brand-images/nuxt.svg", name: "Nuxt" },
    { logo: "/brand-images/react.svg", name: "React" },
    { logo: "/brand-images/wordpress.svg", name: "WordPress" },
    { logo: "/brand-images/laravel.svg", name: "Laravel" },
    { logo: "/brand-images/next.svg", name: "Next.js" },
];
</script>

<style lang="less">
.brandsGridWrapper {
    background: #f9f9f9;
    padding: 100px 0;

    .brandsGrid {
        .wrapper;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(40px, 1fr));
        gap: 40px;

        .brandItem {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                max-width: 100px;
                max-height: 100%;
            }
        }
    }

    @media @mobile {
        .brandsGrid {
            grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
            gap: 20px;

            .brandItem {
                img {
                    max-width: 60px;
                    max-height: 60px;
                }
            }
        }
    }
}
</style>
