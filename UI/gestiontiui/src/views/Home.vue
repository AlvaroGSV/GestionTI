<template>
  <div class="home">
    <b-container fluid="md">
      <b-row>
        <b-col>
          <Input
                label="numero de control"
                id="nControl"
                placeholder="INGRESE SU NUMERO DE CONTROL"
                mensajeError="EL NUMERO DE CONTROL ES OBLIGATORIO"
                maxlength="10"
              />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <Input
                label="contrseña"
                id="passkey"
                placeholder="INGRESE SU CONTRASEÑA"
                mensajeError="LA CONTRASEÑA ES OBLIGATORIA"
                maxlength="10"
              />
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <b-button block pill variant="primary">INICIAR SESIÓN</b-button>
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
</style>
