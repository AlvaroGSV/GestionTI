<template>
<div class="AltaSoftware">
    <b-container fluid="md">
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="12">
                <h3>ALTA DE SOFTWARE</h3>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="12">
                <Input
                label="INGRESE EL ID DEL SOFTWARE"
                id="idSoftware"
                placeholder= "INGRESE EL ID DEL SOFTWARE"
                mensajeError="EL ID DEL SOFTWARE ES OBLIGATORIO"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="12">
                <Input
                label="INGRESE EL NOMBRE DEL SOFTWARE"
                id="Nombre"
                placeholder= "INGRESE EL NOMBRE DEL SOFTWARE"
                mensajeError="EL NOMBRE DEL SOFTWARE ES OBLIGATORIO"
                maxlength="60"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="12">
                <Input
                label="INGRESE EL NOMBRE DE DESARROLLADOR"
                id="Desarrollador"
                placeholder= "INGRESE EL DESARROLLADOR"
                mensajeError="EL NOMBRE DE DESARROLLADOR ES OBLIGATORIO"
                maxlength="60"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="12">
                <Input
                label="INGRESE LA VERSION DEL SOFTWARE"
                id="Version"
                placeholder= "INGRESE LA VERSION DEL SOFTWARE"
                mensajeError="LA VERSION DEL SOFTWARE ES OBLIGATORIO"
                maxlength="8"
                type="number"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="5">
                <h6>SELECCION EL SISTEMA OPERATIVO</h6>
                <FormSelect :vModel="sistemaOperativo" :options="sistemaOp"/>
            </b-col>
            <b-col col md="7">
                <Input
                label="INGRESE EL PESO DEL SOFTWARE EN MB"
                id="pesoMb"
                placeholder= "INGRESE EL PESO DEL SOFTWARE"
                mensajeError="EL PESO DEL SOFTWARE EN MB ES OBLIGATORIO"
                maxlength="7"
                type="number"/>
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
import FormSelect from '../../components/FormSelect.vue'
export default {
    components: {
        Input,
        FormSelect
    },
    data(){
        return{
            sistemaOperativo:1,
            sistemaOp:[
                {value:1, text:"Windows"},
                {value:2, text:"MacOs"},
                {value:3, text:"Linux"}
            ]
        }
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