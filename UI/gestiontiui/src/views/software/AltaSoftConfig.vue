<template>
<div class="AltaSoftConfig">
    <b-container fluid="md">
        <b-row cols="1" id="renglon" align-h="center">
            <b-col cols="6">
                <Input 
                label="INGRESE EL ID DE LA CONFIGURACION DE SOFTWARE" 
                id="idConfig" 
                type="number"
                placeholder="INGRESE EL ID DE LA CONFIGURACION DE SOFTWARE" 
                mensajeerror="EL ID DE LA CONFIGURACION DE SOFTWARE ES OBLIGATORIO"
                minlength="1"/>
            </b-col>
            <b-col cols="6">
                <Input 
                label="INGRESE EL NOMBRE DE LA CONFIGURACION DE SOFTWARE" 
                id="nameConfig"
                placeholder="INGRESE EL NOMBRE DE LA CONFIGURACION DE SOFTWARE" 
                mensajeerror="EL NOMBRE DE LA CONFIGURACION DE SOFTWARE ES OBLIGATORIO"
                minlength="1"
                maxlength="24"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col cols="12">
                <h6>
                    Aqui se genera una configuracion base de software que usaran las computadoras,
                    con esto buscamos ajuilizar el proceso de gestion de software que usaran las computadoras
                    segun su uso y tipo de usuario. 
                </h6>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col cols="12">
                <h6>
                    Escoja los software que confromaran esta configuracion.
                </h6>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col cols="12">
                <Table :fields="op" :items="opSoft"/>
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
import Table from '../../components/Table.vue'
export default {
    components: {
        Input,
        Table
    },
    data(){
        return{
            op:[
                {key:'SELECCIONE', sortable: false, variant:"success"},
                {key:'NOMBRE', sortable: true, variant:"info"},
                {key:'SO', sortable: true, variant:"info"}
            ],
            opSoft:[
                {SELECCIONE:0, NOMBRE:'Office', SO:'Windows'},
                {SELECCIONE:1, NOMBRE:'Office', SO:'MacOS'},
                {SELECCIONE:1, NOMBRE:'Office', SO:'Windows'},
                {SELECCIONE:1, NOMBRE:'Office', SO:'Linux'}
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