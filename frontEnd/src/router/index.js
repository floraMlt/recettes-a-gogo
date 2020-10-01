import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Auth from '../views/Auth.vue'
import About from '../views/About.vue'
import PageRecette from '../views/PageRecette.vue'
import ListeRecette from '../views/ListeRecette.vue'

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
    component: About
  },
  /*{
    path: '/boiteOutils',
    name: 'BoiteOutils',
    component: BoiteOutils
  },*/
  {
    path: '/auth',
    name: 'Auth',
    component: Auth
  },
  {
    path: '/recette/:title',
    name: 'PageRecette',
    component: PageRecette
  },
  {
    path: '/listeRecette',
    name: 'ListeRecette',
    component: ListeRecette
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

// generate this organisation with vue-cli with the command : vue add router.
