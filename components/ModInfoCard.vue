<template>
    <a-card class="info-card-style float-right" headStyle="
            background-color: #173742;
            font-size: 12pt;
            font-weight: bold"
            bodyStyle="
            padding: 8px
            ">
        <a-card-meta v-html="title" slot="title"></a-card-meta>

        <div v-if="img">
            <img class="large-img" :src="imgMain">
            <div style="text-align: center; margin-top: 15px">
                <InvSlot :img="im" v-for="im, index in imgSub" v-bind:key="index" />
            </div>
            <br>
        </div>

        <InfoTableBlock v-if="blockData" :data="blockData" />
    
        <InfoTableItem v-if="itemData" :data="itemData" />

        <a-divider v-if="electricalData" style="height: 2px; margin: 12px 0" /> <!-- Weird firefox bug, won't render w/ 1px -->
        <InfoTableElectrical v-if="electricalData" :data="electricalData" />
    </a-card>
</template>

<style scoped>
.large-img {
    width: 50%;
    margin-left: 25%;
    image-rendering: crisp-edges;
}

.info-card-style {
    width: 300px;
    z-index: 999;
}
</style>

<script>
export default {
    computed: {
        // img can be:
        // string for main image
        // { img: "main image" }
        // { img: "main image", "small_images": [...] }
        imgMain() {
            let img = this.$props.img;
            if (img.img)
                img = img.img;
            return require(`~/assets/texture/${img}`);
        },
        imgSub() {
            let img = this.$props.img;
            return img.small_images || (img.img ? [img.img] : [img]);
        }
    },
    props: {
        img: {
            type: String,
            default: null
        },
        title: {
            type: String
        },
        blockData: {
            type: Object
        },
        itemData: {
            type: Object
        },
        electricalData: {
            type: Object
        }
    }
};
</script>
