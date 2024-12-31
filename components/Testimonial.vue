<template>
    <div class="testimonialCard">
        <div class="testimonialContent">
            <p class="testimonialText">"{{ testimonial.text }}"</p>
            <div class="testimonialAuthor">
                <img :src="testimonial.photo" :alt="testimonial.name" class="authorPhoto" />
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
    text: "This is the best service I have ever used. Highly recommended!",
    name: "John Doe",
    position: "CEO, Example Corp",
    photo: "https://via.placeholder.com/80x80",
};
</script>

<style lang="less">
.testimonialCard {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
}

.testimonialContent {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
}

.testimonialText {
    font-size: 1.2rem;
    color: #333;
    font-style: italic;
    margin: 0;
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
</style>
