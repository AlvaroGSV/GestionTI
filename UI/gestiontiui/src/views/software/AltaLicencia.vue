<template>
<div class="AltaLicencia">
    <b-container fluid="md">
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="6">
                <Input 
                label="INGRESE EL ID DE LA LICENCIA" 
                id="idLicencia" 
                placeholder="INGRESE EL ID DE LA LICENCIA" 
                mensajeerror="EL ID DEL SOFTWARE ES OBLIGATORIO"/>
            </b-col>
            <b-col col md="6">
                <h6>¿LA LICENCIA YA ESTA EN USO?</h6>
                <b-form-select v-model="ocuped" :options="ocupedOp">
            </b-form-select></b-col>
        </b-row>  
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="12">
                <Input 
                label="INGRESE EL NUMERO SERIAL" 
                id="serialNum" 
                type="number" 
                placeholder="INGRESE EL NUMERO SERIAL" 
                mensajeerror="EL NUMERO SERIAL DE LA LICENCIA ES OBLIGATORIO"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="6">
                <Input 
                label="INGRESE EL ID DEL SOFTWARE LICENCIADO" 
                id="idSoftware" 
                placeholder="INGRESE EL ID DEL SOFTWARE LICENCIADO" 
                mensajeerror="EL ID ES OBLIGATORIO"/>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="12">
                <Input 
                label="INGRESE EL ESTADO DE LA LICENCIA" 
                id="ocuped" 
                type="number" 
                placeholder="INGRESE 0-NO, 1-SI PARA EL ESTADO" 
                mensajeerror=" EL ESTADO DE LA LICENCIA ES OBLIGATORIO"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col cols="12">
                <b-button variant="success" pill="">GUARDAR <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
            </b-col>
        </b-row>      
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
            ocuped:0,
            ocupedOp:[
                {value:0, text:"NO"},
                {value:1, text:"SI"}
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