import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import NewDocumentacion from '../views/documentacion/NewDocumentacion.vue'
import NewCategoriaInventario from '../views/inventario/NewCategoriaInventario.vue'
import NewProductInventario from  '../views/inventario/NewProductInventario.vue'

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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
