<template>
    <div class="portfolioImagesWrapper">
        <div class="smallerImages">
            <div class="portfolioItem" v-for="(item, index) in leftPortfolio" :key="index">
                <div class="portfolioImage">
                    <picture>
                        <source :srcset="item.imageLarge" media="(min-width: 1200px)" />
                        <source :srcset="item.imageMedium" media="(min-width: 768px)" />
                        <img :src="item.imageSmall" :alt="`${item.title} image`" />
                    </picture>
                    <div class="portfolioOverlay">
                        <div class="portfolioTitle">{{ item.title }}</div>
                        <div class="portfolioDescription">{{ item.description }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="largeImage">
            <div class="portfolioImage">
                <picture>
                    <source :srcset="rightPortfolio.imageLarge" media="(min-width: 1200px)" />
                    <source :srcset="rightPortfolio.imageMedium" media="(min-width: 768px)" />
                    <img :src="rightPortfolio.imageSmall" :alt="`${rightPortfolio.title} image`" />
                </picture>
                <div class="portfolioOverlay">
                    <div class="portfolioTitle">{{ rightPortfolio.title }}</div>
                    <div class="portfolioDescription">{{ rightPortfolio.description }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const leftPortfolio = [
    {
        imageSmall: "https://picsum.photos/480/480",
        imageMedium: "https://picsum.photos/680/700",
        imageLarge: "https://picsum.photos/1200/1200",
        title: "Project One",
        description: "A brief description of project one.",
    },
    {
        imageSmall: "https://picsum.photos/480/480",
        imageMedium: "https://picsum.photos/680/680",
        imageLarge: "https://picsum.photos/1200/1200",
        title: "Project Two",
        description: "A brief description of project two.",
    },
];

const rightPortfolio = {
    imageSmall: "https://picsum.photos/480/400",
    imageMedium: "https://picsum.photos/680/680",
    imageLarge: "https://picsum.photos/1200/1200",
    title: "Project Three",
    description: "A brief description of project three.",
};
</script>

<style lang="less">
.portfolioImagesWrapper {
    display: flex;
    max-height: 100vh;
    max-width: 100%;

    .smallerImages {
        flex: 1 1 33%;
        display: flex;
        flex-direction: column;

        .portfolioItem {
            flex: 1;
            position: relative;
            display: flex;
            max-height: 50%;

            .portfolioImage {
                width: 100%;
                height: 100%;
                position: relative;

                picture,
                picture img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }

            &:hover {
                .portfolioOverlay {
                    display: block;
                }
            }

            .portfolioOverlay {
                width: 100%;
                padding: 20px;
                background: rgba(0, 0, 0, 0.3);
                color: #fff;
                text-align: center;
                position: absolute;
                top: 0;
                bottom: 0;
                display: none;

                .portfolioTitle {
                    font-size: 20px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                .portfolioDescription {
                    font-size: 14px;
                }
            }
        }
    }

    .largeImage {
        flex: 2 1 66%;
        position: relative;

        .portfolioImage {
            width: 100%;
            height: 100%;
            position: relative;

            picture,
            picture img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        &:hover {
            .portfolioOverlay {
                display: block;
            }
        }

        .portfolioOverlay {
            width: 100%;
            padding: 20px;
            background: rgba(0, 0, 0, 0.3);
            color: #fff;
            text-align: center;
            position: absolute;
            top: 0;
            bottom: 0;
            display: none;

            .portfolioTitle {
                font-size: 20px;
                font-weight: bold;
                margin-bottom: 10px;
            }

            .portfolioDescription {
                font-size: 14px;
            }
        }
    }
}
</style>
