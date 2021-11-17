import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewDocumentacion from '../views/documentacion/NewDocumentacion.vue'
import NewCategoriaInventario from '../views/inventario/NewCategoriaInventario.vue'
import NewProductInventario from  '../views/inventario/NewProductInventario.vue'
import AltaSoftware from '../views/software/AltaSoftware.vue'
import AltaLicencia from '../views/software/AltaLicencia.vue'
import AltaEdificio from '../views/infraestructura/AltaEdificio.vue'
import AltaAula from '../views/infraestructura/AltaAula.vue'
import newComputerHard from '../views/hardware/newComputerHard.vue'
import selectNewComponents from '../views/hardware/selectNewComponents.vue'
import AltaCompuSoft from '../views/software/AltaCompuSoft.vue'
import AltaComputadora from '../views/compu/AltaComputadora.vue'
import newTecnico from '../views/tecnicos/newTecnico.vue'
import newOtrosDispositivos from '../views/otrosDispositivos/newOtrosDispositivos.vue'
import AltaSoftConfig from '../views/software/AltaSoftConfig.vue'
import nuevaRed from '../views/red/nuevaRed.vue'
import nuevoDispositivoRed from '../views/red/nuevoDispositivoRed.vue'
import newUser from '../views/usuarios/newUser.vue'
import newIncident from '../views/incidentes/newIncident.vue'
import updateIncident from '../views/incidentes/updateIncident.vue'
import newServicio from '../views/servicios/newServicio.vue'
import newStepServicio from '../views/servicios/newStepServicio.vue'
import MainPage from '../views/MainPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Documentacion/NewDocumentacion',
    name: 'NewDocumentacion',
    component: NewDocumentacion
  },
  {
    path: '/inventario/NewCategoriaInventario',
    name: 'NewCategoriaInventario',
    component: NewCategoriaInventario
  },
  {
    path: '/inventario/NewProductInventario',
    name: 'NewProductInventario',
    component: NewProductInventario
  },
  {
    path: '/software/AltaSoftware',
    name: 'AltaSoftware',
    component: AltaSoftware
  },
  {
    path: '/software/AltaLicencia',
    name: 'AltaLicencia',
    component: AltaLicencia
  },
  {
    path: '/infraestructura/AltaEdificio',
    name: 'AltaEdificio',
    component: AltaEdificio
  },
  {
    path: '/infraestructura/AltaAula',
    name: 'AltaAula',
    component: AltaAula
  },
  {
    path: '/hardware/newComputerHard',
    name: 'newComputerHard',
    component: newComputerHard
  },
  {
    path: '/hardware/selectNewComponents',
    name: 'selectNewComponents',
    component: selectNewComponents
  },
  {
    path: '/software/compu/AltaCompuSoft',
    name: 'AltaCompuSoft',
    component: AltaCompuSoft
  },
  {
    path: '/compu/AltaComputadora',
    name: 'AltaComputadora',
    component: AltaComputadora
  },
  {
    path: '/tecnicos/newTecnico',
    name: 'newTecnico',
    component: newTecnico
  },
  {
    path: '/otrosDispositivos/newOtrosDispositivos',
    name: 'newOtrosDispositivos',
    component: newOtrosDispositivos
  },
  {
    path: '/software/config/AltaSoftConfig',
    name: 'AltaSoftConfig',
    component: AltaSoftConfig
  },
  {
    path: '/red/nuevaRed',
    name: 'nuevaRed',
    component: nuevaRed
  },
  {
    path: '/red/nuevoDispositivoRed',
    name: 'nuevoDispositivoRed',
    component: nuevoDispositivoRed
  },
  {
    path: '/users/newUser',
    name: 'newUser',
    component: newUser
  },
  {
    path:'/incidents/newIncident',
    name: 'newIncident',
    component: newIncident
  },
  {
    path: '/incidentes/updateIncident',
    name: 'updateIncident',
    component: updateIncident
  },
  {
    path: '/servicios/newStepServicio',
    name: 'newStepServicio',
    component: newStepServicio
  },
  {
    path: '/servicios/newServicio',
    name: 'newServicio',
    component: newServicio
  },
  {
    path: '/MainPage',
    name: 'MainPage',
    component: MainPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
