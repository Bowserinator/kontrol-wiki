<template>
    <div>
        <span>
            <img v-if="icon" class="icon" :src="require('~/assets/texture/' + icon)" />
            <span v-html="title"></span>
        </span>
        <ul class="list">
            <li class="item" v-for="d, index in data" v-bind:key="index">
                <img v-if="d.icon" class="icon" :src="require('~/assets/texture/' + d.icon)" />
                <b>{{d.title}}</b>
                <span v-html="d.text"></span>
            </li>
        </ul>
    </div>
</template>

<style scoped>
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
    top: 0.5em;
    list-style: none;
    padding-left: 0.5em;
}

/* The dash for the tree */
.item::before {
    content: "";
    border-bottom: 1px solid white;
    width: 10px;
    display: inline-block;
    position: relative;
    top: -0.25em;
    left: -0.5em; /* Equal -1 * item left padding */
}
</style>

<script>
export default {
    name: 'WikiTree',
    props: {
        data: {
            type: Array
        },
        title: {
            type: String
        },
        icon: {
            type: String
        }
    }
}
</script>