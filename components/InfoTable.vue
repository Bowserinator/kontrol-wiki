<template>
    <a-list size="small" :grid={column:2} :data-source="array">
        <a-list-item slot="renderItem" slot-scope="item" v-html="item" class="list-item"></a-list-item>
    </a-list>
</template>

<style scoped>
.list-item {
    padding: 3pt;
}
.list-item:nth-child(4n),
.list-item:nth-child(4n - 1)  {
    background-color: rgba(0, 0, 0, 0.2);
}
</style>

<script>
export default {
    computed: {
        array() {
            return this.$props.listArray.map((x, i) => i % 2 == 0 ? `<b>${x}</b>` : `<div style="margin-left: 30px">${x}</div>`);
        }
    },

    name: 'InfoTable',
    props: {
        listArray: {
            type: Array
        }
    }
}
</script>