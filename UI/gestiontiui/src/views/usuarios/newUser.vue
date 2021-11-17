<template>
<div class="newUser">
    <b-container fluid="md">
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col="4">
                <Input 
                label="INGRESE EL NUMERO DE USUARIO" 
                id="nUsuario"
                placeholder="INGRESE EL NUMERO DE USUARIO" 
                mensajeerror="EL NUMERO DE USUARIO ES OBLIGATORIO"
                maxlength="10"
                minlength="1"/>
            </b-col>
            <b-col col="4">
                <Input 
                label="INGRESE LA CONTRASEÑA" 
                id="passkey"
                placeholder="INGRESE LA CONTRASEÑA" 
                mensajeerror="LA CONTRASEÑA ES OBLIGATORIA"
                maxlength="10"
                minlength="1"/>
            </b-col>
            <b-col col md="4">
                <h6>¿A que red se conectara?</h6>
                <FormSelect :vModel="tipoUsuario" :options="opTipoUsuario"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col="6">
                <Input 
                label="INGRESE SU PRIMER NOMBRE" 
                id="primerNombre"
                placeholder="INGRESE SU PRIMER NOMBRE" 
                mensajeerror="SU PRIMER NOMBRE ES OBLIGATORIO"
                maxlength="15"
                minlength="1"/>
            </b-col>
            <b-col col="6">
                <Input 
                label="INGRESE SU SEGUNDO NOMBRE" 
                id="segundoNombre"
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
                placeholder="INGRESE SU PRIMER APELLIDO" 
                mensajeerror="EL PRIMER APELLIDO ES OBLIGATORIO"
                maxlength="15"
                minlength="1"/>
            </b-col>
            <b-col col="6">
                <Input 
                label="INGRESE SU SEGUNDO APELLIDO" 
                id="segundoApellido"
                placeholder="INGRESE SU SEGUNDO APELLIDO" 
                maxlength="15"
                minlength="1"/>
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
            tipoUsuario: 1,
            opTipoUsuario: [
                {value:0, text:"TECNICO"},
                {value:1, text:"NO TECNICO"},
                {value:2, text:"ADMINISTRADOR DE TECNICOS"},
                {value:3, text:"ADMINISTRADOR DE INVENTARIO"}
            ]
        }
    }
}
</script>

<style>

</style>