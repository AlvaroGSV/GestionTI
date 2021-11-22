<template>
<div class="infraestructuraMain">
    <b-container fluid="md">
        <b-row col="1" id="renglon" align-h="center">
            <b-col col="12">
                <h3>BIENVENIDOS</h3>
            </b-col>
        </b-row>
        <b-row col="3" id="renglon" align-h="center">
            <b-col>
                <b-button variant="success" to="/infraestructura/AltaEdificio">Alta edificio <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
            <b-col>
                <b-button variant="success" to="/infraestructura/AltaAula">Alta Aula <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
            <b-col>
                <b-button block variant="danger" to="/adminUser">REGRESAR <b-icon icon="door-closed"></b-icon></b-button>
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
