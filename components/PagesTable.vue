<template>
    <v-runtime-template :template="tableHTML"/>
</template>

<script>
import VRuntimeTemplate from "v-runtime-template";

/**
 * Generate a page table from a data array
 * @param {Array|String} data Data to convert to html
 * @param {Boolean} topLevel is top level? Used for inserting <table> during recursion
 * @return HTML
 */
function generateHTML(data, topLevel) {
    if (typeof data === 'string')
        return `<v-runtime-template template="${data}"/>`;
    else if (typeof data === 'object' && data.type === 'links')
        return `<span>${data.links.join('&nbsp; • &nbsp;')}</span>`;

    let html = '';
    for (let item of data)
        html += `
<tr>
    <td class="category-td">
        <div class="category">
            ${item.category}
        </div>
    </td>
    <td>
        ${generateHTML(item.data, false)}
    </td>
</tr>`;
    if (topLevel)
        html = `<table class="page-table top-level">
        <th colspan="2">Kontrol</th>
            ${html}
        </table>`;
    else
        html = `<table class="page-table">${html}</table>`;
    return html;
}

export default {
    name: 'PagesTable',
    computed: {
        tableHTML() {
            console.log(generateHTML(this.$props.data, true))
            return generateHTML(this.$props.data, true);
        }
    },
    props: {
        data: {
            type: Array
        }
    },

    components: {
        VRuntimeTemplate
    }
}
</script>