<template>
<div class="MainPage">
    <b-container>
        <b-row>
            <h5>Infraestructura</h5>
            <b-col>
                <b-button variant="success" pill to="/infraestructura/AltaEdificio">Alta edificio <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
            <b-col>
                <b-button variant="success" pill to="/infraestructura/AltaAula">Alta Aula <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
        </b-row>
        <b-row>
            <h5>Características de software y hardware</h5>
            <b-col>
                <b-button variant="success" pill to="/Documentacion/NewDocumentacion">Documentacion <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
        </b-row>
        <b-row>
            <h5>Partes del software empleado</h5>
            <b-col>
                <b-button variant="success" pill to="/software/AltaSoftware">software <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
            <b-col>
                <b-button variant="success" pill to="/software/AltaLicencia">Licencia <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
            <b-col>
                <b-button variant="success" pill disabled>Configuracion de software base<b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
        </b-row>
        <b-row>
            <h5>Inventario</h5>
            <b-col>
                <b-button variant="success" pill to="/inventario/NewCategoriaInventario">Categoria de inventario <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
            <b-col>
                <b-button variant="success" pill to="/inventario/NewProductInventario">Inventario <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
        </b-row>
        <b-row>
            <h5>Hardware de computadora</h5>
            <b-col>
                <b-button variant="success" pill to="/hardware/newComputerHard">Hardware de computadora <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
        </b-row>
        <b-row>
            <h5>Software de computadora</h5>
            <b-col>
                <b-button variant="success" pill to="/software/compu/AltaCompuSoft">Software de computadora <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
            <b-col>
                <b-button variant="success" pill to="/compu/AltaComputadora">Computadora <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
        </b-row>
        <b-row>
            <h5>Redes</h5>
            <b-col>
                <b-button variant="success" pill disabled>Red <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
            <b-col>
                <b-button variant="success" pill disabled>Dispositivo de red <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
        </b-row>
        <b-row>
            <h5>Tecnicos</h5>
            <b-col>
                <b-button variant="success" pill to="/tecnicos/newTecnico">Tecnicos <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
        </b-row>
        <b-row>
            <h5>Otros dispositivos</h5>
            <b-col>
                <b-button variant="success" pill to="/otrosDispositivos/newOtrosDispositivos">Otros dispositivos <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
        </b-row>
    </b-container>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>