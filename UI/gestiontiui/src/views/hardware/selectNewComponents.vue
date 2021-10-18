<template>
<div class="selectNewComponents">
    <b-container fluid="md">
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="8">
                <b-form-group
                label="ESCOjA LOS COMPONENTES DE LA COMPUTADORA"
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
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col cols="12">
                <b-button variant="success" pill>GUARDAR <b-icon icon="bookmark-check-fill"/></b-button>
                <b-button id="drecha" variant="danger" pill>CANCELAR <b-icon icon="bookmark-x-fill"/></b-button>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
export default {
    data() {
      return {
        selected: [], // Must be an array reference!
        options: [
          { text: 'Red', value: 'red' },
          { text: 'Green', value: 'green' },
          { text: 'Yellow', value: 'yellow'},
          { text: 'Blue', value: 'blue' }
        ]
      }
    }
}
</script>

<style>

</style>