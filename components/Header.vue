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
            align-items: center;
            justify-content: space-between;
        }
    }

    .headerNav {
        display: flex;
        gap: 20px;
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
