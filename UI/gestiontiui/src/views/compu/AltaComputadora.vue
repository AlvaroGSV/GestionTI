<template>
<div class="AltaComputadora">
    <b-container fluid="md">
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="6">
                <Input 
                label="INGRESE EL ID DE LA COMPUTADORA" 
                id="idCompu"
                placeholder="INGRESE EL ID DE LA COMPUTADORA" 
                mensajeerror="EL ID DE LA COMPUTADORA ES OBLIGATORIO"/>
            </b-col>
            <b-col col md="6">
                <Input 
                label="INGRESE LA DIRECCION MAC DE LA COMPUTADORA" 
                id="addressMAC"
                placeholder="INGRESE LA DIRECCION MAC DE LA COMPUTADORA" 
                mensajeerror="LA DIRECCION MAC DE LA COMPUTADORA ES OBLIGATORIA"/>
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
            <b-col col md="12">
                <Input 
                label="INGRESE LA RAZON DE USO DE LA COMPUTADORA" 
                id="razonUso"  
                placeholder="INGRESE LA RAZON DE USO EL ID DE LA COMPUTADORA" 
                mensajeerror="LA RAZON DE USO DE LA COMPUTADORA ES OBLIGATORIA"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="12">
                <h6>¿OCUPA SOFTWARE ESPECIALIZADO?</h6>
                <FormSelect :vModel="softEsp" :options="opSoftEsp"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="12">
                <h6 style="text-align: center">SECCCION DE CONSTRUCCCION DE SELECCION DE SOFTWARE EN CONSTRUCCCION</h6>
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
            edificio: null,
            aula: null,
            softEsp: null,
            opEdificio:[
                {value:null, text:'FALTA CONEXION A BASE DE DATOS'}
            ],
            opAula:[
                {value:null, text:'FALTA CONEXION A BASE DE DATOS'}
            ],
            opSoftEsp:[
                {value:null, text:'ESCOJA LA OPCION NECESARIA'},
                {value:0, text:'NO'},
                {value:1, text:'SI'}
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