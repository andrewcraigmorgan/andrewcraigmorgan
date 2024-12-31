<template>
    <div class="mainMenuWrap">
        <div class="mainMenu">
            <ul>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Work</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
            </ul>
        </div>
        <!-- .mainMenu -->
    </div>
    <!-- .mainMenuWrap -->
</template>

<style lang="less">
.mainMenuWrap {
    background: #4d4d4d;

    .mainMenu {
        .wrapper;

        ul {
            list-style-type: none;
            display: flex;
            align-items: center;
            gap: 20px;
            justify-content: center;

            li {
                a {
                    color: #fff;
                    text-decoration: none;
                    display: block;
                    padding: 23px 15px;
                }
            }
        }
    }
}
</style>
