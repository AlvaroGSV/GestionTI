<template>
<div class="AltaAula">
  <b-container fluid="md">
    <b-row cols="1" id="renglon" align-h="center">
            <b-col col="6">
                <Input 
                label="INGRESE EL NUMERO" 
                id="aulaNum"
                placeholder="INGRESE EL NUMERO"
                mensajeerror="EL NUMERO DEL AULA ES OBLIGATORIO"
                minlength="1"/>
            </b-col>
            <b-col col="6">
              <h6>EN QUE EDIFICIO SE ENCUENTRA</h6>
                <FormSelect :vModel="idEdificio" :options="opEdificio"/>
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
    },
    data(){
      return{
        idEdificio: 0,
        opEdificio: [
          {value:0, text:'FALATA CONECTAR BD'}
        ]
      }
    }
}
</script>

<style>

</style>