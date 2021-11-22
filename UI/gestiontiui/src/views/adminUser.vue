<template>
<div class="adminUser">
    <b-container fluid="md">
        <b-row id="renglon" align-h="center">
            <b-col>
                <h3>BIENVENIDOS</h3>
            </b-col>
        </b-row>
        <b-row id="renglon" align-h="center">
            <b-col>
                <h5>INFRAESTRUCUTRA</h5>
                <b-button block variant="primary" to="/infraestructuraMain">EDIFICIOS, AULAS Y CUBICULOS <b-icon icon="journal-plus"></b-icon></b-button>             
            </b-col>
            <b-col>
                <h5>SOFTWARE</h5>
                <b-button block variant="primary" to="/Documentacion/NewDocumentacion">Documentacion <b-icon icon="bookmark-plus-fill"></b-icon></b-button>             
                <b-button block variant="primary" to="/software/AltaSoftware">software <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
                <b-button block variant="primary" to="/software/AltaLicencia">Licencia <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
                <b-button block variant="primary" to="/software/config/AltaSoftConfig">Configuracion de software base<b-icon icon="bookmark-plus-fill"></b-icon></b-button>
                <b-button block variant="primary" to="/software/compu/AltaCompuSoft">Software de computadora <b-icon icon="bookmark-plus-fill"></b-icon></b-button>             
            </b-col>
            <b-col>
                <h5>HARDWARE</h5>
                <b-button block variant="primary" to="/hardware/newComputerHard">Hardware de computadora <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
                <b-button block variant="primary" to="/compu/AltaComputadora">Computadora <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
        </b-row>
        <b-row id="renglon" align-h="center">
            <b-col>
                <h5>REDES</h5>
                <b-button block variant="primary" to="/red/nuevaRed">Red <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
                <b-button block variant="primary" to="/red/nuevoDispositivoRed">Dispositivo de red <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
            <b-col>
                <h5>OTROS DISPOSITIVOS </h5>
                <b-button block variant="primary" to="/otrosDispositivos/newOtrosDispositivos">Otros dispositivos <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
            <b-col>
                <h5>SERVICIOS OFRECIDOS</h5>
                <b-button block variant="primary" to="/servicios/newServicio">SERVICIOS OFRECIDOS <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
                <b-button block variant="primary" to="/servicios/newStepServicio">PASOS DE SERVICIOS OFRECIDOS <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
        </b-row>
        <b-row id="renglon" align-h="center">
            <b-col>
                <h5>INVENTARIO</h5>
                <b-button block variant="primary" to="/inventario/NewCategoriaInventario">Categoria de inventario <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
                <b-button block variant="primary" to="/inventario/NewProductInventario">Inventario <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
            <b-col>
                <h5>USUARIOS </h5>
                <b-button block variant="primary" to="/users/newUser">USUARIOS <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
            <b-col>
                <h5>TECNICOS</h5>
                <h6>tabla de asignacion pendiente</h6>
            </b-col>
        </b-row>
        <b-row id="renglon" align-h="center">
            <b-col>
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
b-button{
    margin-bottom: 2%;
    margin-top: 2%;
}
</style>