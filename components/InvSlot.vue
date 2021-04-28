<template>
    <div class="inv-slot">
        <img :src="require(`~/assets/texture/${img}`)">
    </div>
</template>

<style scoped>
.inv-slot {
    display: inline-block;
    background-color: #8B8B8B;
    border: 2.4px solid;
    border-color: #373737 #FFF #FFF #373737;

    width: 40px;
    height: 40px;
    line-height: 1;
    vertical-align: middle;
}

.inv-slot img {
    height: 100%;
    image-rendering: crisp-edges;
}
</style>

<script>
export default {
    name: 'InvSlot',
    props: {
        img: {
            type: String
        }
    }
}
</script>