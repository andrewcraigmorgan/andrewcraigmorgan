<template>
    <div class="brandsGrid">
        <div class="brandItem" v-for="(brand, index) in brands" :key="index">
            <img :src="brand.logo" :alt="brand.name" />
        </div>
    </div>
</template>

<script setup>
const brands = [
    { logo: "/images/brand_images/vue.svg", name: "Vue" },
    { logo: "/images/brand_images/wordpress.svg", name: "WordPress" },
    { logo: "/images/brand_images/php.svg", name: "PHP" },
    { logo: "/images/brand_images/javascript.svg", name: "JavaScript" },
    { logo: "/images/brand_images/laravel.svg", name: "Laravel" },
    { logo: "/images/brand_images/nuxt.svg", name: "Nuxt" },
];
</script>

<style lang="less">
.brandsGrid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 20px;
    padding: 20px;
}

.brandItem {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 100%;
        max-height: 100%;
    }
}
</style>
