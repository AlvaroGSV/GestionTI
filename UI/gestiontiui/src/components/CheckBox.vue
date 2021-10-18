<template>
<div>
    <b-form-group
      label="label"
      v-slot="{ ariaDescribedby }"
    >
      <b-form-checkbox-group
        v-model="selected"
        :options="options"
        :aria-describedby="ariaDescribedby"
        switches
        stacked
      ></b-form-checkbox-group>
    </b-form-group>
</div>
</template>

<script>
export default {
    name: CheckBox,
    props:{
    },
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: 'Red', value: 'red' },
          { text: 'Green', value: 'green' },
          { text: 'Yellow (disabled)', value: 'yellow', disabled: true },
          { text: 'Blue', value: 'blue' }
        ]
      }
    }

}
</script>

<style>

</style>