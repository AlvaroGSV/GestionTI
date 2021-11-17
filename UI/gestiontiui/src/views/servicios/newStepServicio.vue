<template>
<div class="newStepServicio">
    <b-container fluid="md">
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col="6">
                <Input 
                label="NUMERO DE SERVICIO" 
                id="nServicio"
                placeholder="INGRESE EL NUMERO DE SERVICIO" 
                mensajeerror="EL NUMERO DE SERVICIO ES OBLIGATORIO"
                minlength="1"
                disabled/>
            </b-col>
            <b-col col="6">
                <Input 
                label="NUMERO DE PASO" 
                id="nPaso"
                placeholder="INGRESE EL NOMBRE DEL SERVICIO" 
                mensajeerror="EL NOMBRE DEL SERVICIO ES OBLIGATORIO"
                minlength="1"
                disabled/>
            </b-col>
        </b-row>
        <b-row col="1" id="renglon" align-h="center">
            <b-col col="12">
                <h6>DESCRIPCION DEL SERVICIO</h6>
                <b-form-textarea 
                id="descPaso" 
                rows="4" 
                placeholder="Describa qeu hay que hacer en este paso"
                no-resize
                />
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