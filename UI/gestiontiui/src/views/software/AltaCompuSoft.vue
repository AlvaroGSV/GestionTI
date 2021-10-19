<template>
<div class="AltaCompuSoft">
    <b-container fluid="md">
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="6">
                <Input 
                label="INGRESE EL ID DEL SOFTWARE DE LA COMPUTADORA" 
                id="idSoft" 
                type="number" 
                placeholder="INGRESE EL ID DEL SOFTWARE DE LA COMPUTADORA" 
                mensajeerror="EL ID DE SOFTWARE DE LA COMPUTADORA ES OBLIGATORIO"/>
            </b-col>
            <b-col col md="6">
                <h6>SELECCIONE EL SISTEMA OPERATIVO</h6>
                <b-form-select v-model="SO" :options="opSO"/>
            </b-col>
        </b-row>  
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="6">
                <Input 
                label="INGRESE EL NOMBRE DE LA BIOS" 
                id="BIOSname" 
                placeholder="-INGRESE EL NOMBRE DE LA BIOS-" 
                mensajeerror="EL NOMBRE DE LA BIOS ES OBLIGATORIO"/>
            </b-col>
            <b-col col md="6">
                <Input 
                label="INGRESE LA VERSION DE LA BIOS" 
                id="BIOSverson" 
                type="number"
                placeholder="INGRESE LA VERSION DE LA BIOS" 
                mensajeerror="LA VERSION DE LA BIOS ES OBLIGATORIO"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="6">
                <h6>SELECCIONE EL NAVEGADOR</h6>
                <b-form-select v-model="navegador" :options="opNavegador"/>
            </b-col>
            <b-col col md="6">
                <h6>¿TIENE EL DEEPFREZE?</h6>
                <b-form-select v-model="freze" :options="opFreze"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="12">
                <Input
                label="INGRESE EL ID DE CONFIGURACION"
                id="idConfig"
                placeholder="-INGRESE EL ID DE CONFIGURACION-"
                mensajeerror="EL ID DE CONFIGURACION ES OBLIGATORIO"/>
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
            freze: 0,
            navegador:1,
            SO: 1,
            opFreze:[
                {value:"0", text:"NO"},
                {value:"1", text:"SI"}
            ],
            opNavegador:[
                {value:"1", text:"Chrome"},
                {value:"2", text:"Firefox"},
                {value:"3", text:"Edge"},
                {value:"4", text:"Opera"},
                {value:"5", text:"Brave"},
                {value:"6", text:"Chromium"}
            ],
            opSO: [
                {value:"1", text:"WINDOWS"},
                {value:"2", text:"MACOS"},
                {value:"3", text:"LINUX"}
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