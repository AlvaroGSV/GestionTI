<template>
<div class="AltaEdificio">
  <b-container fluid="md">
    <b-row cols="1" id="renglon" align-h="center">
      <b-col col="4">
        <Input
        label="INGRESE EL ID DEL EDIFICIO"
        id="idEdificio"
        placeholder="INGRESE EL ID DEL EDIFICIO"
        mensajeerror="EL ID DEL EDIFICIO ES OBLIGATORIO"
        minlength="1"
        maxlength="6"/>
      </b-col>
      <b-col col="4">
        <Input
        label="INGRESE EL NOMBRE DEL EDIFICIO"
        id="nomEdificio"
        placeholder="INGRESE EL NOMBRE DEL EDIFICIO"
        mensajeerror="EL NOMBRE DEL EDIFICIO ES OBLIGATORIO"
        minlength="1"
        maxlength="12"/>
      </b-col>
    </b-row>
    <b-row cols="1" id="renglon" align-h="center">
      <b-col col="12">
        <b-button variant="success" pill>GUARDAR <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
        <b-button id="drecha" variant="danger" pill to="/MainPage">CANCELAR <b-icon icon="bookmark-x-fill"/></b-button>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
import Input from '../../components/Input.vue'
import Button from '../../components/Button.vue'
import FormSelect from '../../components/FormSelect.vue'
export default {
  components: {
        Input,
        Button,
        FormSelect
    }
}
</script>

<style>
</style>