<template>
<div class="NewDocumentacion">
    <b-container fluid="md">
        <b-row id="renglon" align-h="center">
            <b-col col="12">
                <Input
                label="FOLIO DE LA DOCUMENTACION"
                id="nControl"
                placeholder= "NUMERO DE IDENTIFIACION DE LA DOCUMENTACION"
                mensajeError="EL FOLIO DE DOCUMENTACION ES OBLIGATORIO"
                disabled="disabled" />
            </b-col>
        </b-row>
        <b-row id="renglon" align-h="center">
            <b-col col="12">
                <h5>¿Cuenta con el manual?</h5>
                <b-form-radio-group v-model="manualBool" :options="opManual"></b-form-radio-group>
            </b-col>
        </b-row>
        <b-row id="renglon" align-h="center">
            <b-col col="12">
                <Input
                label="ARCHIVO DEL MANUAL"
                id="archivoManual"
                placeholder= "INGRESE DONDE ARCHIVO EL MANUAL"
                mensajeError="EL ARCHIVO DONDE ALMACENO EL MANUAL ES OBLIGATORIO" />
            </b-col>
        </b-row>
        <b-row id="renglon" align-h="center">
            <b-col col="12">
                <h5>¿Cuenta con la garantia?</h5>
                <b-form-radio-group v-model="garantiaBool" :options="opGarantia"></b-form-radio-group>
            </b-col>
        </b-row>
        <b-row id="renglon" align-h="center">
            <b-col col="12">
                <Input
                label="ARCHIVO DE LA GARANTIA"
                id="archivoGarantia"
                placeholder= "INGRESE DONDE ARCHIVO LA GARANTIA"
                mensajeError="EL ARCHIVO DONDE ALMACENO LA GARANTIA ES OBLIGATORIO" />
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
    },
    data(){
        return{
            manualBool: null,
            garantiaBool: null,
            opManual: [
                {value: 0, text :"NO"},
                {value: 1, text :"SI"}
            ],
            opGarantia: [
                {value: 0, text :"NO"},
                {value: 1, text :"SI"}
            ]
        }
    }

}
</script>

<style>
#renglon{
    margin-bottom: 1%;
}
#drecha{
    float: right;
}
</style>