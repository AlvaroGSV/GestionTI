<template>
<div class="updateIncident">
    <b-container fluid="md">
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col="6">
                <Input label="ID de incidente" disabled="true"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col="8">
                <h6>Diagnostico</h6>
                <b-form-textarea 
                id="diagnosticoInicial" 
                rows="4" 
                no-resize
                placeholder="Describa en 480 caracteres que es lo que encontro al llegar a resolver la incidencia, y que es lo que va hacer"/>
            </b-col>
            <b-col col="4">
                <h6>Servicios ofrecidos</h6>
                <FormSelect :vModel="servicioXRealizar" :options="opServicio"/>
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
import FormSelect from '../../components/FormSelect.vue'
export default {
    components: {
        Input,
        FormSelect
    },
    data(){
        return{
            servicioXRealizar:0,
            opServicio:[
                {value:0, text:"FALTA CONECTAR LA DB"}
            ]
        }
    }
}
</script>

<style>

</style>