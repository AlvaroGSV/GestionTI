<template>
  <div class="home">
    <b-container fluid="xl">
      <b-row cols="1" align-v="center" align-h="center">
        <b-col col md="2">
          <img class="icono" src="../img/iconoGTI.png" alt="icono">
        </b-col>
        <b-col cols="10">
          <b-container fluid="md" v-on:submit.prevent="logIn">
            <b-row id="renglon" cols="1" align-v="center" align-h="center">
              <b-col col md="7">
                <Input
                    v-model="tecnico.nControl"
                      label="NUMERO DE CONTROL"
                      id="nControl"
                      placeholder= "INGRESE SU NUMERO DE CONTROL"
                      mensajeError="EL NUMERO DE CONTROL ES OBLIGATORIO"
                      maxlength="10"
                    />
              </b-col>
            </b-row>
            <b-row id="renglon" align-h="center">
              <b-col col md="7">
                <Input
                      v-model="tecnico.passkey"
                      label="CONTRASEÑA"
                      id="passkey"
                      type="password"
                      placeholder="INGRESE SU CONTRASEÑA"
                      mensajeError="LA CONTRASEÑA ES OBLIGATORIA"
                      maxlength="10"
                    />
              </b-col>
            </b-row>
            <b-row id="renglon" align-h="center">
              <b-col col md="7">
                <b-button id="btnLogIn" type="submit" pill to="/MainPage">INICIAR SESIÓN  <b-icon icon="person-bounding-box"></b-icon></b-button>
              </b-col>
            </b-row>
          </b-container>


        </b-col>
      </b-row>
    </b-container>
    
  </div>
</template>

<script>
import Input from '../components/Input.vue'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    Input
  },
  data(){
    return{
      tecnico:{
        nControl: '',
        passkey: ''
      }
    }
  },
  methods:{
    logIn(){}
  }
}
</script>

<style>
b-button{
  margin-bottom: 40%;
  padding-top: 40%;
}
#btnLogIn{
  background-color: #00325f;
  color:#ffffff;
  margin-top: 2%;
}
#btnLogIn:hover{
  background-color: #ffffff;;
  color: #00325f;
  border-color: #00325f;
}
#renglon{
    margin-bottom: 1%;
}
.icono{
  width: 180px;
  height: 180px;
}
</style>
