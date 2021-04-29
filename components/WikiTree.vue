<template>
    <span v-bind:class="(child ? 'child ' : '') + (bg ? 'bg' : '')">
        <img v-if="icon" class="icon" :src="require('~/assets/texture/' + icon)" />
        <span v-html="title"></span>

        <ul class="list">
            <li class="item" v-for="d, index in computedData" v-bind:key="index" v-bind:class="d.bg ? 'bg' : ''">
                <img v-if="d.icon && !d.node" class="icon" :src="require('~/assets/texture/' + d.icon)" />
                <b v-if="d.title && !d.node">{{d.title}}</b>
                <span v-if="d.text && !d.node" v-html="d.text"></span>
                <span v-if="d.node">
                    <WikiTree child :title="d.title" :icon="d.icon" :data="d.data" />
                </span>
            </li>
        </ul>
    </span>
</template>

<style scoped>
.child {
    display: inline-block;
    margin-bottom: 1em;
}

.bg {
    background-color: rgba(163, 240, 247, 0.1);
}

.list {
    padding: 0;
    border-left: 1px solid white;
    margin-left: 0.5em;
}

.icon {
    display: inline-block;
    height: 1.1em;
    margin-right: 0.4em;
    border: 1px solid #555;
}

/* Shift item downwards to align dashes with the vertical line */
.item {
    padding: 0;
    position: relative;
    list-style: none;
    padding-left: 1em;
}

/* The dash for the tree */
.item::before {
    content: "";
    border-bottom: 1px solid white;
    width: 10px;
    display: inline-block;
    position: absolute;
    top: 0.75em;
    left: 0em; /* Equal -1 * item left padding */
}
</style>

<script>
const defaultData = {
    electricalBlockEntity: [
        {
            text: '<i>Inherited from ElectricalBlockEntity:</i>',
            bg: true
        },
        {
            icon: 'nbt/string.png',
            title: 'CircuitUUID:',
            text: 'UUID of the circuit it belongs to',
            bg: true
        },
        {
            node: true,
            bg: true,
            title: '<b>Thermal: </b>',
            icon: 'nbt/compound.png',
            data: [
                {
                    icon: 'nbt/double.png',
                    title: 'Temperature:',
                    text: 'Temperature (in C) of the component'
                },
                {
                    icon: 'nbt/double.png',
                    title: 'TAmbient:',
                    text: 'Ambient temperature (in C) for the component'
                },
                {
                    icon: 'nbt/double.png',
                    title: 'EnvThermalR:',
                    text: 'Thermal resistance between component and its environment'
                },
                {
                    icon: 'nbt/double.png',
                    title: 'HeatDissipationRate:',
                    text: 'Current derivative of temperature'
                },
                {
                    icon: 'nbt/double.png',
                    title: 'ThermalR',
                    text: 'Thermal resistance of component'
                },
                {
                    icon: 'nbt/double.png',
                    title: 'ThermalC:',
                    text: 'Thermal mass of component'
                }
            ]
        }
    ]
};

export default {
    name: 'WikiTree',
    computed: {
        computedData() {
            let data = this.$props.data;
            for (let inherit of this.$props.inherit || [])
                data = defaultData[inherit].concat(data);
            return data;
        }
    },
    props: {
        data: {
            type: Array
        },
        title: {
            type: String
        },
        icon: {
            type: String
        },
        inherit: {
            type: Array
        },
        child: {
            type: Boolean,
            default: false
        },
        bg: {
            type: Boolean,
            default: false
        }
    }
}
</script>