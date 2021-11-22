<template>
<div class="tecnicUser">
    <b-container fluid="md">
        <b-row col="1" id="renglon" align-h="center">
            <b-col col="12">
                <h3>BIENVENIDOS</h3>
            </b-col>
        </b-row>
        <b-row col="2" id="renglon" align-h="center">
            <b-col col="6">
                <b-button block variant="primary" to="/incidentes/updateIncident">REVISAR INCIDENTES <b-icon icon="journal-plus"></b-icon></b-button>             
            </b-col>
        </b-row>
        <b-row col="2" id="renglon" align-h="center">
            <b-col col="6">
                <b-button block variant="primary" disabled to="">CONFIGURACIONES DISPONIBLES <b-icon icon="journal-plus"></b-icon></b-button>             
            </b-col>
            <b-col col="6">
                <b-button block variant="primary" disabled to="">SOFTWARE DISPONIBLE <b-icon icon="search"></b-icon></b-button>
            </b-col>
        </b-row>
        <b-row col="2" id="renglon" align-h="center">
            <b-col col="6">
                <b-button block variant="primary" disabled to="/incidents/newIncident">INVENTARIO DISPONIBLE <b-icon icon="journal-plus"></b-icon></b-button>             
            </b-col>
            <b-col col="6">
                <b-button block variant="primary" disabled to="/incidents/newIncident">REDES DISPONIBLES <b-icon icon="journal-plus"></b-icon></b-button>             
            </b-col>
        </b-row>
        <b-row col="1" id="renglon" align-h="center">
            <b-col col="12">
                <b-button block variant="danger"  to="/">CERRAR SESION <b-icon icon="door-closed"></b-icon></b-button>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
import Input from '../components/Input.vue'
import Button from '../components/Button.vue'
import FormSelect from '../components/FormSelect.vue'
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