<template>
<div class="AltaAula">
    <form action="" class="formulario">

        <h1 class="formulario__titulo">Registro de aulas</h1>

        <input type="number" min="1" max="10" class="formulario__input">
        <label for="" class="formulario__label">Numero de aula</label>
    
        <input type="number" min="1" max="10" class="formulario__input">
        <label for="" class="formulario__label">Numero de edificio</label>
        
        <input type="text" class="formulario__input">
        <label for="" class="formulario__label">Nombre de area</label>
        
        <input type="submit" class="formulario__submit">
    </form> 
</div>
</template>

<script>
export default {

}
var inputs = document.getElementsByClassName('formulario__input');
for (var i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener('keyup', function(){
    if(this.value.length>=1) {
      this.nextElementSibling.classList.add('fijar');
    } else {
      this.nextElementSibling.classList.remove('fijar');
    }
  });
}
</script>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  font-family: sans-serif;
}
.formulario {
  width: 500px;
  max-width: 100%;
  margin: auto;
  margin-top: 30px;
  padding: 20px;
  box-shadow: 0 0 20px 1px rgba(0,0,0,0.3);
  position: relative;
}
.formulario__titulo {
  text-align: center;
  margin-top: 0;
  color: rgba(0,0,0,0.7);
}
.formulario__input, .formulario__label, .formulario__submit {
  display: block;
  width: 100%;
  font-size: 1.3em;
}
.formulario__input {
  padding: 20px;
  background: rgba(0,0,0,0.1);
  border: 1px solid rgba(0,0,0,0.3);
  margin-bottom: 40px;
}
.formulario__input:focus {
  outline: 1px solid rgba(0,0,0,0.7);
}
.formulario__input:focus + .formulario__label{
  margin-top: -135px;
}
.formulario__label {
  padding-left: 15px;
  position: absolute;
  margin-top: -85px;
  z-index: -20;
  color: rgba(0,0,0,0.5);
  transition: all 0.2s;
}
.formulario__submit {
  background: rgba(0,0,0,0.7);
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border: none;
}
.fijar {
  margin-top: -135px;
} 
</style>