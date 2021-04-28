<template>
    <div class="img-wrapper" v-bind:class="floatClass">
        <img :src="require('~/assets' + src)" :alt="caption">
        <span v-html="captionHTML"></span>
    </div>
</template>

<style scoped>
.img-wrapper {
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 5px;
    width: 400px;
    box-sizing: content-box;
}

.img-wrapper img {
    max-width: 400px;
}
</style>

<script>
export default {
    computed: {
        floatClass() {
            return this.$props.float ? 'float-right' : '';
        },
        captionHTML() {
            return this.$props.caption.length ? `<div style="padding: 0.5em 0">${this.$props.caption}</div>` : '';
        }
    },

    name: 'InfoTable',
    props: {
        src: {
            type: String
        },
        caption: {
            type: String,
            default: ''
        },
        float: {
            type: Boolean,
            default: true
        }
    }
}
</script>