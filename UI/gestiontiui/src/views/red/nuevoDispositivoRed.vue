<template>
<div class="nuevoDispositivoRed">
    <b-container fluid="md">
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col="6">
                <Input 
                label="INGRESE EL ID DEL DISPOSITIVO DE RED" 
                id="deviceID"
                placeholder="INGRESE EL ID DEL DISPOSITIVO DE RED" 
                mensajeerror="EL ID DEL DISPOSITIVO DE RED ES OBLIGATORIO"
                type="number"
                minlength="1"/>
            </b-col>
            <b-col col md="6">
                <h6>¿A que red se conectara?</h6>
                <FormSelect :vModel="red" :options="opRed"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="6">
                <h6>¿Froma de compartir la red?</h6>
                <FormSelect :vModel="tRed" :options="opTRed"/>
            </b-col>
            <b-col col md="6">
                <h6>¿Se ubicara en el interior o el exterior?</h6>
                <FormSelect :vModel="exterior" :options="opExterior"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="6">
                <h6>¿En que edificio se instalara?</h6>
                <FormSelect :vModel="edificio" :options="opEdificio"/>
            </b-col>
            <b-col col md="6">
                <h6>¿estara en alguna aula?</h6>
                <FormSelect :vModel="aula" :options="opAula"/>
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
            red: 0,
            tRed: 1,
            exterior: 0,
            edificio:0,
            aula:0,
            opRed: [
                {value:0, text:"FALTA CONECTAR A BASE DE DATOS"}
            ],
            opTRed:[
                {value:0, text:'Alambrico'},
                {value:1, text:'Inalambrico'}
            ],
            opExterior:[
                {value:0, text:'Exterior'},
                {value:1, text:'Interior'}
            ],
            opEdificio:[
                {value:0, text:"FALTA CONECTAR A BASE DE DATOS"}
            ],
            opAula:[
                {value:0, text:"FALTA CONECTAR A BASE DE DATOS"}
            ]
        }
    }
}
</script>

<style>

</style>