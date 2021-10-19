<template>
<div>
    <b-button 
        :variant="variant" pill :disabled="disabled" >
      {{text}}
      <b-icon :icon="icon"/>
    </b-button>
</div>
</template>

<script>
export default {
    name: 'Button',
    props:{
        variant:{
            type: String,
            default: ''
        },
        icon:{
            type: String,
            default: ''
        },
        text:{
            type: String,
            default: ''
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