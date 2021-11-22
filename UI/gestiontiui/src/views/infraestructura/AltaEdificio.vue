<template> 
<div class="AltaEdificio" >
  <b-container fluid="md" >
    <b-form @submit.prevent="guardarEdificio">
      <b-row cols="1" id="renglon" align-h="center">
        <b-col>
        <Input
        label="INGRESE EL ID DEL EDIFICIO"
        id="value"
        v-model="edificios.value"
        placeholder="INGRESE EL ID DEL EDIFICIO"
        mensajeerror="EL ID DEL EDIFICIO ES OBLIGATORIO"
        minlength="1"
        maxlength="6"/>
      </b-col>
      <b-col>
        <Input
        label="INGRESE EL NOMBRE DEL EDIFICIO"
        id="text"
        v-model="edificios.text"
        placeholder="INGRESE EL NOMBRE DEL EDIFICIO"
        mensajeerror="EL NOMBRE DEL EDIFICIO ES OBLIGATORIO"
        minlength="1"
        maxlength="12"/>
      </b-col>
    </b-row>
    <b-row cols="1" id="renglon" align-h="center">
      <b-col>
        <b-button variant="success" pill type="submit">GUARDAR <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
        <b-button id="drecha" variant="danger" pill to="/infraestructuraMain">CANCELAR <b-icon icon="bookmark-x-fill"/></b-button>
      </b-col>
    </b-row>
    </b-form>
  </b-container>
</div>
</template>

<script>
import Input from '../../components/Input.vue'
import Button from '../../components/Button.vue'
import FormSelect from '../../components/FormSelect.vue'

import { mapActions } from 'vuex'

export default {
  components: {
        Input,
        Button,
        FormSelect
    },
    data(){
      return{
        edificios:{
          value:'',
          text:''
        }
        
      }
    },
    methods:{
      ...mapActions(['altaEdificios']),
      guardarEdificio(){
        console.log(this.edificios)
        this.altaEdificios({
          params: this.edificios,
          onComplete: (response) => {
            console.log(response)
            this.$router.push({name:'infraestructuraMain'})
          }
        })
      }
    }
}
</script>

<style>
</style>