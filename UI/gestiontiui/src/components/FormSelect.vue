<template>
<div>
    <b-form-select v-model="vModel" :options="options" :disabled="disabled"></b-form-select>
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
        vModel:{
            type: String,
            default:''
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