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
            <img class="large-img" v-if="img" :src="require(`~/assets/texture/${img}`)">
            <br><br>
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
}

.info-card-style {
    width: 300px;
}
</style>

<script>
export default {
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
