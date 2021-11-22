import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tecnicos:[],
    edificios:[],
    aulas:[]
  },
  mutations: {
    GetEdificios(state, edificios){
      state.edificios=edificios
    }
  },
  actions: {
    altaEdificios({commit},{params,onComplete}){
      axios.post('http://localhost:3006/EDIFICIO/', params).then(onComplete).catch(error => {console.logerror})
    },
    obtenerEdificios({commit}){
      axios.get('http://localhost:3006/EDIFICIO/').then(response => {console.log(response); commit('GetEdificios', response.data)})
    },
    altaAula({commit},{params,onComplete}){
      axios.post('http://localhost:3006/AULA/', params).then(onComplete).catch(error => {console.logerror})
    },
    altaUsuario({commit},{params,onComplete}){
      axios.post('http://localhost:3006/USUARIOS/', params).then(onComplete).catch(error => {console.logerror})
    },
    altaCategoria({commit},{params,onComplete}){
      axios.post('http://localhost:3006/CATINVENTARIO/', params).then(onComplete).catch(error => {console.logerror})
    }
  },
  getters: {
    todosLosEdificios: state => {return state.edificios}
  }
})
