<template>
<div class="nuevaRed">
    <b-container fluid="md">
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col="6">
                <Input 
                label="INGRESE EL ID DE LA RED" 
                id="idNetwork"
                placeholder="INGRESE EL ID DE LA RED" 
                mensajeerror="EL ID DE LA RED ES OBLIGATORIO"
                minlength="1"/>
            </b-col>
            <b-col col="6">
                <Input 
                label="INGRESE NOMBRE DF LA RED" 
                id="networkName"
                placeholder="INGRESE EL NOMBRE DE LA RED" 
                mensajeerror="EL NOMBRE DE LA RED ES OBLIGATORIO"
                maxlength="18"
                minlength="1"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="6">
                <h6>¿Que tipo de red es?</h6>
                <FormSelect :vModel="tRed" :options="opTRed"/>
            </b-col>
            <b-col col="6">
                <Input 
                label="INGRESE LA VELOCIDAD DE LA RED" 
                id="netowrkSpeedMB"
                placeholder="INGRESE LA VELOCIDAD DE LA RED EN MB" 
                mensajeerror="LA VELOCIDAD DE LA RED EN MB ES OBLIGATORIA"
                type="numeric"
                maxlength="7"
                minlength="1"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col="12">
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
            tRed: 1,
            opTRed: [
                {value:0, text:"Alambrico"},
                {value:1, text:"Inalambrico"}
            ]
        }
    }
}
</script>

<style>

</style>