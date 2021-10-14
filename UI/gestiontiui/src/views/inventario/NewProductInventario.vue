<template>
<div class="NewCategoriaInventario">
    <b-container fluid="md">
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="6">
                <Input
                label="INGRESE EL ID DEL PRODUCTO"
                id="idProduto"
                placeholder= "INGRESE EL ID DE LA CATEGORIA"
                mensajeError="EL ID DEL PRODUCTO ES OBLIGATORIO"/>
            </b-col>
            <b-col col md="6">
                <h6>FAVOR DE SELECCIONAR LA CATEGORIA</h6>
                <b-form-select v-model="idCategoria" :options="categorias"/>
            </b-col>
        </b-row>  
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="4">
                <Input
                label="INGRESE EL ANCHO"
                id="ancho"
                type="number"
                placeholder= "INGRESE EL ANCHO"
                mensajeError="EL ANCHO ES OBLIGATORIO"/>
            </b-col>
            <b-col col md="4">
                <Input
                label="INGRESE EL LARGO"
                id="largo"
                type="number"
                placeholder= "INGRESE EL LARGO"
                mensajeError="EL LARGO ES OBLIGATORIO"/>
            </b-col>
            <b-col col md="4">
                <Input
                label="INGRESE LA ALTURA"
                id="altura"
                type="number"
                placeholder= "INGRESE LA ALTURA"
                mensajeError="LA ALTURA ES OBLIGATORIA"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="12">
                <Input
                label="INGRESE LA CAPACIDAD DE PROCESAMIENTO EN MB'S"
                id="capacidadMB"
                type="number"
                placeholder= "INGRESE LA CAPACIDAD DE PROCESAMIENTO"
                mensajeError="LA CAPACIDAD DE PROCESAMIENTO ES OBLIGATORIA"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="6">
                <Input
                label="INGRESE LA MARCA O EL FABRICANTE"
                id="marca"
                placeholder= "INGRESE LA MARCA O EL FABRICANTE"
                mensajeError="LA MARCA ES OBLIGATORIA"/>
            </b-col>
            <b-col col md="6">
                <Input
                label="INGRESE EL TIPO DE PUERTO DE CONEXION"
                id="tipoPuerto"
                placeholder= "INGRESE EL TIPO DE PUERTO DE CONEXION"
                mensajeError="EL TIPO DE PUERTO DE CONEXION ES OBLIGATORIO"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col cols="12">
                <b-button variant="success" pill>GUARDAR <b-icon icon="bookmark-plus-fill"/></b-button>
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
            categorias: [
                {value: 0, text :"CAT 1"},
                {value: 1, text :"CAT 2"}
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
</style>