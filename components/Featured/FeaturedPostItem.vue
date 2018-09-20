<template>
    <div class="featured-post-item">
        <img :src="imgSrc" :alt="imgDescription">
        <h3>{{ title }}</h3>
        <p>{{ description }}</p>
        <nuxt-link :to="linkHref">{{linkDescription}}</nuxt-link>
    </div>
</template>

<script>
export default {
    name: 'FeaturedPostItem',
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        imgSrc: {
            type: String,
            required: false
        },
        imgDescription: {
            type: String,
            required: false
        },
        linkHref: {
            type: String,
            required: true
        },
        linkDescription: {
            type: String,
            required: true
        }
    }
}
</script>


