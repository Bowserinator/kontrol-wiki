<script>
export default {
    props: {
        templateHtml: {
            templateHtml: true,
            type: String
        }
    },
    created () {
        this.$options.template = this.templateHtml
    }
}
</script>
