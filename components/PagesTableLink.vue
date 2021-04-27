<template>
    <a :href="href">
        <img class="link-img" :src="require('~/assets/texture/' + img)" v-if="img">
        {{name}}
    </a>
</template>

<style scoped>
.link-img {
    height: 1rem;
    display: inline-block;
    position: relative;
    top: -0.08em;
    margin-right: 0.2em;
}
</style>

<script>
export default {
    name: 'PagesTableLink',
    props: {
        img: {
            type: String,
            default: null
        },
        href: {
            type: String
        },
        name: {
            type: String
        }
    }
}
</script>