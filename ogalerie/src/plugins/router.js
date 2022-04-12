import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ArtWorkList from '../views/ArtWorkList.vue';
import ArtWork from '../views/ArtWork.vue';
import Inscription from '../views/Inscription.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';
import Page404 from '../views/Page404.vue';
import Apropos from '../views/Apropos';
import MentionsLegales from '../views/MentionsLegales'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  //{
  //  path: '/artworklist',
  //  name: 'ArtWorkList',
  //  component: ArtWorkList
  //},

  {
    path: '/oeuvre/:id',
    name: 'ArtWork',
    component: ArtWork
  },

  {
    path: '/salon/:id/oeuvres',
    name: 'ArtWorkList',
    component: ArtWorkList
  },

  {
    path: '/inscription',
    component: Inscription,
    name: 'inscription',
  },

  {
    path: '/login',
    component: Login,
    name: 'login',
  },
  {
    path: '/logout',
    component: Logout,
    name: 'logout',
  },

  {
    //   le pathMatch permet de dynamimser la page 404, ajout d'un retour dans la view page404
    path: '/:pathMatch(.*)*',
    component: Page404,
    name: 'page404',
  },
  
  {
    path: '/Apropos',
    component: Apropos,
    name: 'apropos',
  },
  {
    path: '/MentionsLegales',
    component: MentionsLegales,
    name: 'MentionsLegales',
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
