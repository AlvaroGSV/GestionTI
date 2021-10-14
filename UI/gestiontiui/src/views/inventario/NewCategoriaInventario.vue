<template>
<div class="NewCategoriaInventario">
    <b-container fluid="md">
        <b-row id="renglon" align-h="center">
            <b-col cols="8">
                <Input
                label="ID DE CATEGORIA"
                id="idCategoria"
                placeholder= "INGRESE EL ID DE LA CATEGORIA"
                mensajeError="EL ID DE LA CATEGORIA ES OBLIGATORIO"/>
            </b-col>
        </b-row>
        <b-row id="renglon" align-h="center">
            <b-col cols="8">
                <Input
                label="NOMBRE DE LA CATEGORIA"
                id="nameCategoria"
                placeholder= "NOMBRE DE LA CATEGORIA"
                mensajeError="EL NOMBRE DE LA CATEGORIA ES OBLIGATORIO"/>
            </b-col>
        </b-row>
        <b-row id="renglon" align-h="center">
            <b-col cols="7">
                <b-button pill variant="success">GUARDAR  <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
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
    margin-bottom: 1%;
}
</style>