<template>
<div class="NewCategoriaInventario">
    <b-container fluid="md">
        <b-form @submit.prevent="guardarCategoria">
        <b-row id="renglon" align-h="center">
            <b-col col md="8">
                <Input
                label="ID DE CATEGORIA"
                id="value"
                minlength="1"
                v-model="cat.value"
                placeholder= "INGRESE EL ID DE LA CATEGORIA"
                mensajeError="EL ID DE LA CATEGORIA ES OBLIGATORIO"/>
            </b-col>
        </b-row>
        <b-row id="renglon" align-h="center">
            <b-col col md="8">
                <Input
                label="NOMBRE DE LA CATEGORIA"
                id="text"
                maxlength="35"
                minlength="1"
                v-model="cat.text"
                placeholder= "NOMBRE DE LA CATEGORIA"
                mensajeError="EL NOMBRE DE LA CATEGORIA ES OBLIGATORIO"/>
            </b-col>
        </b-row>
        <b-row cols="1" id="renglon" align-h="center">
            <b-col col md="8">
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

import { mapActions } from 'vuex'

export default {
    components: {
        Input
    },
    data(){
        return{
            cat:{
                value:'',
                text:''
            }
        }
    },
    methods:{
        ...mapActions(['altaCategoria']),
        guardarCategoria(){
            console.log(this.cat)
            this.altaCategoria({
            params: this.cat,
            onComplete: (response) => {
                console.log(response)
                this.$router.push({name:'adminUser'})
            }
            })
        }
    }
}
</script>

<style>
#renglon{
    margin-bottom: 1%;
}
#drecha{
    float: right;
}
</style>