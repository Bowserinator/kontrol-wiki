<template>
    <InfoTable :listArray="listArray" />
</template>

<script>
/**
 * Data for the block:
 * - renewable [boolean]
 * - stackable [integer, set to 1 if not stackable]
 * - tools [array[string]] array of tool names
 * - blastResistance [integer]
 * - hardness [integer]
 * - luminant [integer]
 * - luminantToggle [boolean] does it emit light only when "ON"
 * - transparent [boolean]
 * - flammable [boolean]
 * - catchesFireFromLava [boolean]
 */
const defaultData = {
    renewable: false,
    stackable: 64,
    tools: [],
    blastResistance: 0,
    hardness: 0,
    luminant: 0,
    luminantToggle: false,
    transparent: false,
    flammable: false,
    catchesFireFromLava: false
};

export default {
    computed: {
        listArray() {
            let data = this.data || defaultData;

            let luminantString = `Yes (${data.luminant} when lit)`;
            if (data.luminant === 0)
                luminantString = 'No';
            else if (!data.luminantToggle)
                luminantString = `Yes (${data.luminant})`;

            let formattedList = [
                '<a href="https://minecraft.fandom.com/wiki/Renewable_resource">Renewable</a>',
                    data.renewable ? 'Yes' : 'No',
                'Stackable', data.stackable > 1 ? `Yes (${data.stackable})` : 'No',
                'Tools', data.tools.length ? data.tools.join(', ') : 'N/A',
                '<a href="https://minecraft.fandom.com/wiki/Explosion#Blast_resistance">Blast Resistance</a>',
                    data.blastResistance,
                '<a href="https://minecraft.fandom.com/wiki/Breaking#Blocks_by_hardness">Hardness</a>',
                    data.hardness,
                '<a href="https://minecraft.fandom.com/wiki/Light">Luminant</a>',
                    luminantString,
                '<a href="https://minecraft.fandom.com/wiki/Opacity">Transparent</a>',
                    data.transparent ? 'Yes' : 'No',
                '<a href="https://minecraft.fandom.com/wiki/Flammable">Flammable</a>',
                    data.flammable ? 'Yes' : 'No',
                'Catches fire from <a href="https://minecraft.fandom.com/wiki/Lava">lava</a>',
                    data.catchesFireFromLava ? 'Yes' : 'No'
            ];
            return formattedList;
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
