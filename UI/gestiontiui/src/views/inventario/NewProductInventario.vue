<template>
<div class="NewCategoriaInventario">
    <b-container fluid="md">
        <b-form @submit.prevent="altaProducto">
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="6">
                <Input
                label="INGRESE EL ID DEL PRODUCTO"
                id="idProduto"
                type="number"
                v-model="prod.idProduto"
                placeholder= "INGRESE EL ID DEL PRODUCTO"
                mensajeError="EL ID DEL PRODUCTO ES OBLIGATORIO"/>
            </b-col>
            <b-col col md="6">
                <h6>FAVOR DE SELECCIONAR LA CATEGORIA</h6>
                <b-form-select v-model="prod.idCategoria" :options=todasLasCategorias> </b-form-select>
            </b-col>
        </b-row>  
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="4">
                <Input
                label="INGRESE EL ANCHO"
                id="ancho"
                v-model="prod.ancho"
                type="number"
                placeholder= "INGRESE EL ANCHO"
                mensajeError="EL ANCHO ES OBLIGATORIO"/>
            </b-col>
            <b-col col md="4">
                <Input
                label="INGRESE EL LARGO"
                id="largo"
                v-model="prod.largo"
                type="number"
                placeholder= "INGRESE EL LARGO"
                mensajeError="EL LARGO ES OBLIGATORIO"/>
            </b-col>
            <b-col col md="4">
                <Input
                label="INGRESE LA ALTURA"
                id="altura"
                v-model="prod.altura"
                type="number"
                placeholder= "INGRESE LA ALTURA"
                mensajeError="LA ALTURA ES OBLIGATORIA"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="12">
                <Input
                label="INGRESE LA CAPACIDAD DE PROCESAMIENTO EN MB'S"
                id="capacidadMB"
                v-model="prod.capacidadMB"
                type="number"
                placeholder= "INGRESE LA CAPACIDAD DE PROCESAMIENTO"
                mensajeError="LA CAPACIDAD DE PROCESAMIENTO ES OBLIGATORIA"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="6">
                <Input
                label="INGRESE LA MARCA O EL FABRICANTE"
                id="marca"
                v-model="prod.marca"
                placeholder= "INGRESE LA MARCA O EL FABRICANTE"
                mensajeError="LA MARCA ES OBLIGATORIA"/>
            </b-col>
            <b-col col md="6">
                <Input
                label="INGRESE EL TIPO DE PUERTO DE CONEXION"
                id="tipoPuerto"
                v-model="prod.tipoPuerto"
                placeholder= "INGRESE EL TIPO DE PUERTO DE CONEXION"
                mensajeError="EL TIPO DE PUERTO DE CONEXION ES OBLIGATORIO"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col cols="12">
                <b-button variant="success" pill type="submit">GUARDAR <b-icon icon="bookmark-plus-fill"></b-icon></b-button>
                <b-button id="drecha" variant="danger" pill to="/adminUser">CANCELAR <b-icon icon="bookmark-x-fill"/></b-button>
            </b-col>
        </b-row>    
        </b-form>   
    </b-container>
</div>
</template>

<script>
import Input from '../../components/Input.vue'
import FormSelect from '../../components/FormSelect.vue'

import { mapGetters ,mapActions } from 'vuex'

export default {
    components: {
        Input,
        FormSelect
    },
    data(){
        return{
            manualBool: null,
            garantiaBool: null,
            categorias: [
                {value: null, text:'Escoja una categoria'},
                {value: 0, text :'CAT 1'},
                {value: 1, text :'CAT 2'}
            ],
            prod:{
                idProduto: '',
                idCategoria:  '',
                altura: '',
                ancho:'',
                largo: '',
                marca: '',
                capacidadMB: '', 
                tipoPuerto: ''
            }
        }
    },
    methods:{
        ...mapActions(['altaProductoInventario']),
        ...mapActions(['obtenerCategorias']),
        altaProducto(){
            console.log(this.prod)
            this.altaProductoInventario({
            params: this.prod,
            onComplete: (response) => {
            console.log(response)
            this.$router.push({name:'adminUser'})
          }
        })
        }
    },
    computed: {
      ...mapGetters(['todasLasCategorias'])
    },
    created(){
      this.obtenerCategorias();
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