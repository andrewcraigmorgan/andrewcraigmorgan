<template>
    <div class="portfolio-container">
        <header></header>
        <main>
            <div class="content">
                <h1>Andrew Morgan</h1>
                <p>Transforming ideas into practical digital solutions.</p>
                <div class="social-icons">
                    <a href="https://github.com/andrewcraigmorgan" target="_blank" aria-label="GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/andrew-craig-morgan/" target="_blank" aria-label="LinkedIn">
                        <i class="fab fa-linkedin"></i>
                    </a>
                </div>
            </div>
        </main>
        <footer></footer>
    </div>
</template>

<script>
export default {};
</script>

<style lang="less">
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css");

body {
    margin: 0;
    font-family: "Barlow", sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: teal;
    color: white;
    text-align: center;
}

.portfolio-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
}

.content {
    h1 {
        font-size: 3rem;
        margin: 0;
    }

    p {
        font-size: 1.5rem;
        margin: 0.5rem 0 1.5rem;
    }

    .social-icons {
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
