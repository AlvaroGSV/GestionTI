<template>
<div class="newUser">
    <b-container fluid="md">
        <b-form @submit.prevent="guardarUsuario">
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col="4">
                <Input 
                label="INGRESE EL NUMERO DE USUARIO" 
                id="nUsuario"
                v-model="user.nUsuario"
                placeholder="INGRESE EL NUMERO DE USUARIO" 
                mensajeerror="EL NUMERO DE USUARIO ES OBLIGATORIO"
                maxlength="10"
                minlength="1"/>
            </b-col>
            <b-col col="4">
                <Input 
                label="INGRESE LA CONTRASEÑA"
                v-model="user.passkey" 
                id="passkey"
                placeholder="INGRESE LA CONTRASEÑA" 
                mensajeerror="LA CONTRASEÑA ES OBLIGATORIA"
                maxlength="10"
                minlength="1"/>
            </b-col>
            <b-col col md="4">
                <h6>¿QUE TIPO DE USUARIO ES?</h6>
                <b-form-select v-model="user.tipoUsuario" :options="opTipoUsuario"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col="6">
                <Input 
                label="INGRESE SU PRIMER NOMBRE" 
                id="primerNombre"
                v-model="user.primerNombre"
                placeholder="INGRESE SU PRIMER NOMBRE" 
                mensajeerror="SU PRIMER NOMBRE ES OBLIGATORIO"
                maxlength="15"
                minlength="1"/>
            </b-col>
            <b-col col="6">
                <Input 
                label="INGRESE SU SEGUNDO NOMBRE" 
                id="segundoNombre"
                v-model="user.segundoNombre"
                placeholder="INGRESE SU SEGUNDO NOMBRE" 
                maxlength="15"
                minlength="1"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col="6">
                <Input 
                label="INGRESE SU PRIMER APELLIDO" 
                id="primerApellido"
                v-model="user.primerApellido"
                placeholder="INGRESE SU PRIMER APELLIDO" 
                mensajeerror="EL PRIMER APELLIDO ES OBLIGATORIO"
                maxlength="15"
                minlength="1"/>
            </b-col>
            <b-col col="6">
                <Input 
                label="INGRESE SU SEGUNDO APELLIDO" 
                id="segundoApellido"
                v-model="user.segundoApellido"
                placeholder="INGRESE SU SEGUNDO APELLIDO" 
                maxlength="15"
                minlength="1"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col="12">
                <b-button variant="success" pill type="submit" >GUARDAR <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
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
            opTipoUsuario: [
                {value:'0', text:"TECNICO"},
                {value:'1', text:"NO TECNICO"},
                {value:'2', text:"ADMINISTRADOR DE TECNICOS"},
                {value:'3', text:"ADMINISTRADOR DE INVENTARIO"}
            ],
            user:{
                nUsuario:'',
                primerNombre:'',
                segundoNombre:'',
                primerApellido:'',
                segundoApellido:'',
                passkey:'',
                tipoUsuario: '1'
            },
        }
    },
    methods:{
        ...mapActions(['altaUsuario']),
        guardarUsuario(){
            console.log(this.user)
            this.altaUsuario({
            params: this.user,
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