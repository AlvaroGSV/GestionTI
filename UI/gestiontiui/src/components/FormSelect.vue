<template>
<div>
    <b-form-select  :options="options" :disabled="disabled"></b-form-select>
</div>
</template>

<script>
export default {
    name: 'FormSelect',
    props:{
        options: {
            type: Array,
            default:[]
        },
        disabled:{
            type: Boolean,
            default: false
        }
    }

}
</script>

<style>

</style>