<template>
<div>
    <b-form-select v-model="vModel" :options="options"/>
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
        }
    }

}
</script>

<style>

</style>