<template>
<div class="newIncident">
    <b-container fluid="md">
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col="4">
                <Input 
                label="INGRESE EL NUMERO DE INCIDENTE" 
                id="nIncidnete"
                placeholder="INGRESE EL NUMERO DE INCIDENTE" 
                mensajeerror="EL NUMERO DE INCIDENTE ES OBLIGATORIO"
                minlength="1"/>
            </b-col>
            <b-col col="4">
                <FormSelect :vModel="idEdificio" :options="opEdificio"/>
            </b-col>
            <b-col col="4">
                <FormSelect :vModel="aulaNum" :options="opAula"/>
            </b-col>
        </b-row>

        <b-row cols="1" id="renglon" align-h="center">
            <b-col col="4">
                <b-form-group label="¿ES UNA COMPUTADORA?" v-slot="{ ariaDescribedby }">
                    <b-form-radio v-model="esCompu" :aria-describedby="ariaDescribedby" name="esCompu" value="true">NO</b-form-radio>
                    <b-form-radio v-model="esCompu" :aria-describedby="ariaDescribedby" name="esCompu" value="false">SI</b-form-radio>
                </b-form-group>
            </b-col>
            <b-col col="4">
                <b-form-group label="¿ES UN DISPOSITIVO DE RED?" v-slot="{ ariaDescribedby }">
                    <b-form-radio v-model="esDispositivoRed" :aria-describedby="ariaDescribedby" name="esDispositivoRed" value="true">NO</b-form-radio>
                    <b-form-radio v-model="esDispositivoRed" :aria-describedby="ariaDescribedby" name="esDispositivoRed" value="false">SI</b-form-radio>
                </b-form-group>
            </b-col>
            <b-col col="4">
                <b-form-group label="¿ES OTRO DISPOSITIVO?" v-slot="{ ariaDescribedby }">
                    <b-form-radio v-model="esOtroDispositivo" :aria-describedby="ariaDescribedby" name="esOtroDispositivo" value="true">NO</b-form-radio>
                    <b-form-radio v-model="esOtroDispositivo" :aria-describedby="ariaDescribedby" name="esOtroDispositivo" value="false">SI</b-form-radio>
                </b-form-group>
            </b-col>
        </b-row>

        <b-row cols="1" id="renglon" align-h="center">
            <b-col col="4">
                <FormSelect :vModel="idCompu" :options="opCompu" :disabled="esCompu"/>
            </b-col>
            <b-col col="4">
                <FormSelect :vModel="deviceID" :options="opDispInternet" :disabled="esCompu"/>
            </b-col>
            <b-col col="4">
                <FormSelect :vModel="idDispositivo" :options="opOtroDispositivo" :disabled="esCompu"/>
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
            idEdificio: 0,
            aulaNum:0,
            idCompu: 0,
            deviceID: 0,
            idDispositivo: 0,
            opEdificio:[
                {value:0, text:"FALTA CONECTAR LA DB"}
            ],
            opAula:[
                {value:0, text:"FALTA CONECTAR LA DB"}
            ],
            opCompu:[
                {value:0, text:"FALTA CONECTAR LA DB"}
            ],
            opDispInternet:[
                {value:0, text:"FALTA CONECTAR LA DB"}
            ],
            opOtroDispositivo:[
                {value:0, text:"FALTA CONECTAR LA DB"}
            ]
        }
    }
}
</script>

<style>

</style>