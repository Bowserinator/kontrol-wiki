<template>
    <InfoTable :listArray="listArray" />
</template>

<script>
/**
 * Data for electrical props
 * - durability: [String] HTML for durability
 * - renewable: [String] HTML for renewable
 * - stackable: [Integer] how much 1 stack is
 * - misc: [Array] extra html to prepend
 */
const defaultData = {
    durability: '0',
    renewable: 'No',
    stackable: 0,
    misc: []
};

export default {
    computed: {
        listArray() {
            let data = this.data || defaultData;
            let formattedList = [
                '<a href="https://minecraft.fandom.com/wiki/Item_durability">Durability</a>',
                    data.durability,
                '<a href="https://minecraft.fandom.com/wiki/Renewable_resource">Renewable</a>',
                    data.renewable,
                'Stackable', data.stackable ? `Yes (${data.stackable})` : 'No'
            ];
            return (data.misc || []).concat(formattedList);
        }
    },

    props: {
        data: {
            type: Object,
            default: defaultData
        }
    }
};
</script>
