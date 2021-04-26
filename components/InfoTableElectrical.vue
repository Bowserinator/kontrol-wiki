<template>
    <InfoTable :listArray="listArray" />
</template>

<script>
/**
 * Data for electrical props
 * - maxOperatingVoltage [string w/ unit]
 * - thermalR [string w/o unit] in K/W
 * - thermalC [string w/o unit] in J/W
 * - misc [array to prepend]
 */
const defaultData = {
    maxOperatingVoltage: '0 V',
    thermalR: '0.0',
    thermalC: '0.0',
    misc: []
};

export default {
    computed: {
        listArray() {
            let data = this.data || defaultData;

            let formattedList = [
                'Max op. voltage', data.maxOperatingVoltage,
                '<a href="https://en.wikipedia.org/wiki/Thermal_resistance">Thermal R</a>',
                    data.thermalR + ' K/W',
                '<a href="https://en.wikipedia.org/wiki/Thermal_mass">Thermal C</a>',
                    data.thermalC + ' J/W'
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
