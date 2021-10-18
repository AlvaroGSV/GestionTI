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
import MainPage from '../views/MainPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
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
