<template>
    <header>
        <div class="headerWrap">
            <div class="headerIntroWrap">
                <div class="headerIntro">
                    <div class="logo">
                        <a href="#">Andrew Morgan</a>
                    </div>

                    <div class="headerNav">
                        <SocialIcon />
                        <DarkModeToggle />
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="less">
.headerWrap {
    .headerIntroWrap {
        .headerIntro {
            .wrapper;
            display: flex;

            @media @tablet, @desktop {
                justify-content: space-between;
            }

            @media @mobile {
                flex-direction: column-reverse;
            }
        }
    }

    .headerNav {
        display: flex;
        gap: 20px;

        @media @mobile {
            width: 100%;
            margin: 10px 0;
            justify-content: space-between;
        }
    }

    .logo {
        font-weight: 200;
        font-size: 22px;
        padding: 40px 0;
        text-transform: uppercase;

        a {
            color: var(--text-color);
            text-decoration: none;
        }
    }
}
</style>
