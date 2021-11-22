<template>
<div class="nuevaRed">
    <b-container fluid="md">
        <b-form @submit.prevent="guardarRed">
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col="6">
                <Input 
                label="INGRESE EL ID DE LA RED" 
                id="idNetwork"
                type="number"
                v-model="red.idNetwork"
                placeholder="INGRESE EL ID DE LA RED" 
                mensajeerror="EL ID DE LA RED ES OBLIGATORIO"
                minlength="1"/>
            </b-col>
            <b-col col="6">
                <Input 
                label="INGRESE NOMBRE DF LA RED" 
                id="networkName"
                v-model="red.networkName"
                placeholder="INGRESE EL NOMBRE DE LA RED" 
                mensajeerror="EL NOMBRE DE LA RED ES OBLIGATORIO"
                maxlength="18"
                minlength="1"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="6">
                <h6>¿Que tipo de red es?</h6>
                <b-form-select v-model="red.networkType" :options="opTRed"/>
            </b-col>
            <b-col col="6">
                <Input 
                label="INGRESE LA VELOCIDAD DE LA RED" 
                id="netowrkSpeedMB"
                v-model="red.netowrkSpeedMB"
                placeholder="INGRESE LA VELOCIDAD DE LA RED EN MB" 
                mensajeerror="LA VELOCIDAD DE LA RED EN MB ES OBLIGATORIA"
                type="numeric"
                maxlength="7"
                minlength="1"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col="12">
                <b-button variant="success" pill type="submit">GUARDAR <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
                <b-button id="drecha" variant="danger" pill to="/adminUser">CANCELAR <b-icon icon="bookmark-x-fill"/></b-button>
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
            opTRed: [
                {value:'0', text:"Alambrico"},
                {value:'1', text:"Inalambrico"}
            ],
            red:{
                idNetwork:'',
                networkName:'',
                networkType:'1',
                netowrkSpeedMB:''
            }
        }
    },
    methods:{
      ...mapActions(['altaRed']),
      guardarRed(){
        console.log(this.red)
        this.altaRed({
          params: this.red,
          onComplete: (response) => {
            console.log(response)
            this.$router.push({name:'adminUser'})
          }
        })
      }
    }
}
</script>

<style>

</style>