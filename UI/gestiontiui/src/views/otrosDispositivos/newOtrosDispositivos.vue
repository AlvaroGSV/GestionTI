<template>
<div class="newOtrosDispositivos">
    <b-container fluid="md">
        <b-row cols="1" id="renglon" align-h="center">
            <b-col cols="12">
                <Input 
                label="INGRESE EL ID DEL DISPOSITIVO" 
                id="idDispositivo"
                placeholder="INGRESE EL ID DEL DISPOSITIVO" 
                mensajeerror="EL ID DEL DISPOSITIVO ES OBLIGATORIO"
                maxlength="12"
                minlength="1"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col cols="12">
                <Input 
                label="INGRESE EL NOMBRE DEL DISPOSITIVO" 
                id="nombre"
                placeholder="INGRESE EL NOMBRE DEL DISPOSITIVO" 
                mensajeerror="EL NOMBRE DEL DISPOSITIVO ES OBLIGATORIO"
                maxlength="60"
                minlength="1"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col cols="3">
                <h6>¿CUENTA CON DOCUMENTACION?</h6>
                <FormSelect :vModel="documentacion" :options="opDocumentacion"/>
            </b-col>
            <b-col cols="3">
                <h6>¿ESTA REGISTRADA LA DOCUMENTACION?</h6>
                <FormSelect :vModel="documentacionRegistro" :options="opDocumentacionRegistro"/>
            </b-col>
            <b-col cols="3">
                <h6>BUSQUE LA DOCUMENTACION</h6>
                <FormSelect :vModel="idDocumentacion" :options="opidDocumentacion"/>
            </b-col>
            <b-col cols="3">
                <h6>AGREGE LA DOCUMENTACION</h6>
                <Button text="NUEVA DOCUMENTACION " icon="bookmark-plus-fill" variant="success" :disabled="documentacionRegistro"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="6">
                <h6>EN QUE EDIFICIO ESTA INSTALADA</h6>
                <FormSelect :vModel="edificio" :options="opEdificio"/>
            </b-col>
            <b-col col md="6">
                <h6>EN QUE AULA O CUBICULO ESTA INSTALADA</h6>
                <FormSelect :vModel="aula" :options="opAula"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col cols="6">
                <Input 
                label="INGRESE EL TIEMPO MINIMO PARA UN MANTENIMIENTO" 
                id="mantenimientoMinimo"
                type="date"
                mensajeerror="EL TIEMPO MINIMO PARA UN MANTENIMIENTO ES OBLIGATORIO"
                minlength="1"/>
            </b-col>
            <b-col cols="6">
                <Input 
                label="INGRESE EL TIEMPO MAXIMO PARA UN MANTENIMIENTO" 
                id="mantenimientoMaximo"
                type="date"
                mensajeerror="EL TIEMPO MAXIMO PARA UN MANTENIMIENTO ES OBLIGATORIO"
                minlength="1"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col cols="12">
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
            documentacion: 1,
            documentacionRegistro: true,
            idDocumentacion: 0,
            opDocumentacion:[
                {value:"0", text:"NO"},
                {value:"1", text:"SI"}
            ],
            opDocumentacionRegistro:[
                {value:false, text:"NO"},
                {value:true, text:"SI"}
            ],
            opidDocumentacion:[
                {value:"0", text:"FALTA BASE DE DATOS"}
            ],
            edificio: 0,
            aula: 0,
            opEdificio:[
                {value:"0", text:"FALTA CONEXION A BASE DE DATOS"}
            ],
            opAula:[
                {value:"0", text:"FALTA CONEXION A BASE DE DATOS"}
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