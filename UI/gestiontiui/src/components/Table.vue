<template>
<div>
    <b-table
      :striped="striped"
      :bordered="bordered"
      :borderless="borderless"
      :outlined="outlined"
      :small="small"
      :hover="hover"
      :dark="dark"
      :fixed="fixed"
      :foot-clone="footClone"
      :no-border-collapse="noCollapse"
      :items="items"
      :fields="fields"
      :head-variant="headVariant"
      :table-variant="tableVariant"
    ></b-table>
</div>
</template>

<script>
export default {
    name: 'Table',
    props:{
        striped: {
            type: Boolean,
            default: false
        },
        bordered: {
            type: Boolean,
            default: false
        },
        borderless: {
            type: Boolean,
            default: false
        },
        outlined: {
            type: Boolean,
            default: false
        },
        small: {
            type: Boolean,
            default: false
        },
        hover: {
            type: Boolean,
            default: false
        },
        dark: {
            type: Boolean,
            default: false
        },
        fixed: {
            type: Boolean,
            default: false
        },
        footClone: {
            type: Boolean,
            default: false
        },
        headVariant: {
            type: String,
            default: ''
        },
        tableVariant: {
            type: String,
            default: ''
        },
        noCollapse: {
            type: Boolean,
            default: false
        },
        items: {
            type: Array,
            default:[]
        },
        fields: {
            type: Array,
            default:[]
        }
    }

}
</script>

<style>

</style>