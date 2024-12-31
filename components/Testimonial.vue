<template>
    <div class="testimonialCard">
        <div class="testimonialContent">
            <p class="testimonialText">"{{ testimonial.text }}"</p>
            <div class="testimonialAuthor">
                <img v-if="testimonial.photo" :src="testimonial.photo" :alt="testimonial.name" class="authorPhoto" />
                <div class="authorDetails">
                    <span class="authorName">{{ testimonial.name }}</span>
                    <span class="authorPosition">{{ testimonial.position }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const testimonial = {
    text: "From my start day at this company, I've seen this person being called on for guidance, assistance, help.  People call for technical help and he answers.  I've seen people and teams breathe easier when things have gotten tight and he comes to help out.",
    name: "mtc. Star Awards",
    position: "",
    photo: "",
};
</script>

<style lang="less">
.testimonialCard {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 100px 50px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    background: #f5f5f5;

    .testimonialContent {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
        max-width: 700px;
    }

    .testimonialText {
        font-size: 27px;
        color: #333;
        font-style: italic;
        margin: 0;

        @media @mobile {
            font-size: 20px;
        }
    }

    .testimonialAuthor {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .authorPhoto {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid #ddd;
    }

    .authorDetails {
        text-align: left;
    }

    .authorName {
        font-weight: bold;
        color: #333;
    }

    .authorPosition {
        font-size: 0.9rem;
        color: #777;
    }
}
</style>
