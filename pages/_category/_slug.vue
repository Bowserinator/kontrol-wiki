<template>
    <div>
        <v-runtime-template class="wiki" :template="text"/>
        <Pages />
    </div>
</template>


<script>
    import fs from "fs";
    import VRuntimeTemplate from "v-runtime-template";
    import { Remarkable } from 'remarkable';
    import rkatex from 'remarkable-katex';

    const UNIQUE_SEPERATOR = '-=-|CONFIG_ABOVE|-=-';

    const md = new Remarkable({
        html:       true,
        xhtmlOut:   true,
        breaks:     false,
        langPrefix: 'language-',
        typographer: false
    });

    md.use(rkatex);

    // Fix for non-legal HTML tags like <a-table> in markdown
    md.core.ruler.push('html-components',  state => {
        for (const token of state.tokens) {
            if (!token.children) continue;

            token.children.forEach(child => {
                if (child.type !== 'text')
                    return
                const exp = /(<[A-Za-z0-9-_]+>)/g;
                if (exp.test(child.content))
                    child.type = 'htmltag'
            });
        }
    })

    // Apply wiki_table class to all tables
    md.renderer.rules['table_open'] = () => '<table class="wiki_table">';

    export default {
        async asyncData({ params }) {
            const slug = params.slug;
            const path = `./assets/pages/${params.category}/${params.slug}.md`;

            if (!fs.existsSync(path)) 
                return this.$router.push('/404');

            let text = fs.readFileSync(path).toString();
            text = text.split(UNIQUE_SEPERATOR);

            let data = JSON.parse(text[0]) || {};
            text = md.render(text[1]);
            text = `<span><client-only>${text}</client-only></span>`;

            let returned = { slug, text };
            
            for (let key of Object.keys(data)) {
                if (returned[key])
                    console.error(`Duplicate key '${key}' found!`);
                returned[key] = data[key];
            }

            return returned;
        },

        components: {
            VRuntimeTemplate
        }
    }
</script>
