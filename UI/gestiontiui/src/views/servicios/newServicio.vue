<template>
<div class="newServicio">
    <b-container fluid="md">
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col="4">
                <Input 
                label="INGRESE EL NUMERO DE SERVICIO" 
                id="nServicio"
                placeholder="INGRESE EL NUMERO DE SERVICIO" 
                mensajeerror="EL NUMERO DE SERVICIO ES OBLIGATORIO"
                minlength="1"/>
            </b-col>
            <b-col col="8">
                <Input 
                label="INGRESE EL NOMBRE DEL SERVICIO" 
                id="nomServicio"
                placeholder="INGRESE EL NOMBRE DEL SERVICIO" 
                mensajeerror="EL NOMBRE DEL SERVICIO ES OBLIGATORIO"
                minlength="1"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col="9">
                <h6>DESCRIPCION DEL SERVICIO</h6>
                <b-form-textarea 
                id="descServicio" 
                v-model="descServicio"
                rows="4" 
                placeholder="Describa en 480 caracteres en que consiste este servicio"
                no-resize
                />
            </b-col>
            <b-col col="3">
                <h6>TIEMPO ESTIMADO</h6>
                <b-form-timepicker v-model="tiempoEstimado"></b-form-timepicker>
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
            descServicio:''
        }
    }
}
</script>

<style>

</style>