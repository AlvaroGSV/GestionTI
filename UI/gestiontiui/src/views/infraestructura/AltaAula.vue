<template>
<div class="AltaAula">
  <b-container fluid="md">
    <b-form @submit.prevent="guardarAula">
      <b-row cols="1" id="renglon" align-h="center">
            <b-col>
                <Input 
                label="INGRESE EL NUMERO" 
                id="aulaNum"
                v-model="aula.aulaNum"
                placeholder="INGRESE EL NUMERO"
                mensajeerror="EL NUMERO DEL AULA ES OBLIGATORIO"
                minlength="1"/>
            </b-col>
            <b-col>
              <h6>EN QUE EDIFICIO SE ENCUENTRA</h6>
                <b-form-select v-model="aula.idEdificio" :options=todosLosEdificios> </b-form-select>
                <strong>{{ idEdificio }}</strong>
            </b-col>
        </b-row>
        <b-row id="renglon" align-h="center">
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
import { mapGetters ,mapActions } from 'vuex'
export default {
  components: {
        Input,
        Button,
        FormSelect
    },
    data(){
      return{
        aula:{
          aulaNum:'',
          idEdificio: 'A'
        }
      }
    },
    methods:{
      ...mapActions(['altaAula']),
      ...mapActions(['obtenerEdificios']),
      guardarAula(){
        console.log(this.aula)
        this.altaAula({
          params: this.aula,
          onComplete: (response) => {
            console.log(response)
            this.$router.push({name:'infraestructuraMain'})
          }
        })
      }
    },
    computed: {
      ...mapGetters(['todosLosEdificios'])
    },
    created(){
      this.obtenerEdificios();
    }
}
</script>

<style>

</style>