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
                <b-form-select v-model="edificio" :options="opEdificio"/>
            </b-col>
            <b-col col md="6">
                <h6>EN QUE AULA O CUBICULO ESTA INSTALADA</h6>
                <b-form-select v-model="aula" :options="opAula"/>
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
                <b-form-select v-model="softEsp" :options="opSoftEsp"/>
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
export default {
    components: {
        Input
    },
    data(){
        return{
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