<template>
<div class="newTecnico">
    <b-container fluid="md">
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="6">
                <Input 
                label="INGRESE EL NUMERO DE CONTROL DEL TECNICO" 
                id="nControl"
                placeholder="INGRESE EL NUMERO DE CONTROL DEL TECNICO" 
                mensajeerror="EL ID DE LA COMPUTADORA ES OBLIGATORIO"
                maxlength="10"/>
            </b-col>
            <b-col col md="6">
                <Input 
                label="INGRESE LA CONTRASEÑA DEL TECNICO" 
                id="passkey"
                placeholder="INGRESE LA CONTRASEÑA DEL TECNICO" 
                mensajeerror="LA CONTRASEÑA ES OBLIGATORIA. MINIMO 6 CARACTERES, MAXIMO 10."
                maxlength="10"
                minlength="6"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="6">
                <Input 
                label="INGRESE EL PRIMER NOMBRE DEL TECNICO" 
                id="primerNombre"
                placeholder="INGRESE EL NUMERO DE CONTROL DEL TECNICO" 
                mensajeerror="EL PRIMER NOMBRE DEL TECNICO ES OBLIGATORIO"
                maxlength="15"/>
            </b-col>
            <b-col col md="6">
                <Input 
                label="INGRESE EL SEGUNDO NOMBRE DEL TECNICO" 
                id="segundoNombre"
                placeholder="INGRESE EL NUMERO DE CONTROL DEL TECNICO"
                maxlength="15"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="6">
                <Input 
                label="INGRESE EL PRIMER APELLIDO DEL TECNICO" 
                id="primerApellido"
                placeholder="INGRESE EL PRIMER APELLIDO DEL TECNICO" 
                mensajeerror="EL PRIMER APELLIDO DEL TECNICO ES OBLIGATORIO"
                maxlength="15"/>
            </b-col>
            <b-col col md="6">
                <Input 
                label="INGRESE EL SEGUNDO APELLIDO DEL TECNICO" 
                id="segundoApellido "
                placeholder="INGRESE EL SEGUNDO APELLIDO DEL TECNICO"
                maxlength="15"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col cols="12">
                <b-button variant="success" pill="">GUARDAR <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
                <b-button id="drecha" variant="danger" pill to="/MainPage">CANCELAR <b-icon icon="bookmark-x-fill"/></b-button>
            </b-col>
        </b-row> 
    </b-container>
</div>
</template>

<script>
import Input from '../../components/Input.vue'
export default {
    components: {
        Input
    }
}
</script>

<style>
#renglon{
    margin-top: 1%;
    margin-bottom: 1%;
}
#drecha{
    float: right;
}
</style>