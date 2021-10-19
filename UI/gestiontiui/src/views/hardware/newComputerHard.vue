<template>
<div class="newComputerHard">
    <b-container fluid="md">
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="12">
                <Input 
                label="INGRESE EL ID DE LA CONFIGURACION DE HARDWARE" 
                id="idHard" 
                placeholder="INGRESE EL ID DE LA CONFIGURACION DE HARDWARE" 
                mensajeerror="EL ID DE LA CONFIGURACION DE HARDWARE ES OBLIGATORIA"/>
            </b-col>
        </b-row> 
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="6">
                <h6>Escoga la salida de video</h6>
                <b-form-select v-model="salidaVideo" :options="opVideo"/>
            </b-col>
            <b-col col md="6">
                <h6>Escoga la salida de audio</h6>
                <b-form-select v-model="salidaAudio" :options="opAudio"/>
            </b-col>
        </b-row>  
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="4">
                <h6>Escoga el procesador</h6>
                <b-form-select v-model="procesador" :options="opProcesador"/>
            </b-col>
            <b-col col md="8">
                <Input 
                label="INGRESE LA FAMILIA DEL PROCESADOR" 
                id="familiaProcesador" 
                placeholder="INGRESE LA FAMILIA DEL PROCESADOR" 
                mensajeerror="LA FAMILIA DEL PROCESADOR ES OBLIGATORIA"
                maxlength="15"/>
                <h6>Por familia nos referimos a si es i3, i5, i7 o algo asi</h6>
            </b-col>
        </b-row> 
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="8">
                <Input 
                label="INGRESE EL MODELO DE LA TARJETA MADRE" 
                id="tarjetaMadre" 
                placeholder="INGRESE EL MODELO DE LA TARJETA MADRE" 
                mensajeerror="EL MODELO DE LA TARJETA MADRE ES OBLIGATORIA"
                maxlength="60"/>
            </b-col>
            <b-col col md="4">
                <h6>¿Cuenta con ventilador?</h6>
                <b-form-select v-model="ventilador" :options="opVentilador"/>
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
            salidaVideo: 1,
            salidaAudio: 0,
            procesador: 0,
            ventilador: 1,
            opVideo:[
                {value:"0", text:"VGA"},
                {value:"1", text:"HDMI"},
                {value:"2", text:"Thunderbolt"},
                {value:"3", text:"USBC"}
            ],
            opAudio:[
                {value:"0", text:"Jack 3,5"},
                {value:"1", text:"Bocinas integradas"}
            ],
            opProcesador:[
                {value:"0", text:"Intel"},
                {value:"1", text:"AMD"},
                {value:"2", text:"Snapdragon ARM"},
                {value:"3", text:"Microsoft ARM"}
            ],
            opVentilador:[
                {value:"0", text:"NO"},
                {value:"1", text:"SI"}
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