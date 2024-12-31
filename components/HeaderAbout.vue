<template>
    <section>
        <div class="headerAbout">
            <div class="headerAboutInner">PHP and JavaScript developer based in Dundee, Scotland.</div>
        </div>
    </section>
</template>

<style lang="less">
.headerAbout {
    .wrapper;

    .headerAboutInner {
        border-radius: 5px;
        font-size: 47px;
        max-width: 700px;
        line-height: 1.2;
        padding: 100px 0 140px;

        @media @mobile {
            width: 100%;
        }
    }
}
</style>
