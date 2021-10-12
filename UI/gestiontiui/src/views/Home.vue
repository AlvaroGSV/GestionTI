<template>
  <div class="home">
    <b-container fluid="md">
      <b-row align-h="center">
        <b-col cols="7">
          <Input
                label="NUMERO DE CONTROL"
                id="nControl"
                placeholder= "INGRESE SU NUMERO DE CONTROL"
                mensajeError="EL NUMERO DE CONTROL ES OBLIGATORIO"
                maxlength="10"
              />
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="7">
          <Input
                label="CONTRASEÑA"
                id="passkey"
                placeholder="INGRESE SU CONTRASEÑA"
                mensajeError="LA CONTRASEÑA ES OBLIGATORIA"
                maxlength="10"
              />
        </b-col>
      </b-row>
      <b-row align-h="center">
        <b-col cols="7">
          <b-button id="btnLogIn" pill>INICIAR SESIÓN  <b-icon icon="person-bounding-box"></b-icon></b-button>
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
</style>
