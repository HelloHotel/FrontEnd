import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home_App',
    name: 'Home_App',
    component: () => import('../components/Home_App')
  },
  // Client routes
  {
    path: '/client',
    name: 'client',
    component: () => import('../components/client/client-main')
  },
  {
    path: '/client-search',
    name: 'client-search',
    component: () => import('../components/client/client-search')
  },
  {
    path: '/client-offer',
    name: 'client-offer',
    component: () => import('../components/client/client-offer')
  },
  {
    path: '/client-account',
    name: 'client-account',
    component: () => import('../components/client/client-account')
  },
  {
    path: '/client-login',
    name: 'client-login',
    component: () => import('../components/client/client-login')
  },
  // Administrator routes
  {
    path: '/administrator',
    name: 'administrator',
    component: () => import('../components/administrator/admin-main')
  },
  {
    path: '/admin-login',
    name: 'admin-login',
    component: () => import('../components/administrator/admin-login')
  },
  {
    path: '/admin-rooms',
    name: 'admin-rooms',
    component: () => import('../components/administrator/admin-rooms')
  },
  {
    path: '/admin-register',
    name: 'admin-register',
    component: () => import('../components/administrator/admin-register')
  },
  {
    path: '/admin-inventory',
    name: 'admin-inventory',
    component: () => import('../components/administrator/admin-inventory')
  },
  {
    path: '/admin-costs',
    name: 'admin-costs',
    component: () => import('../components/administrator/admin-costs')
  },
  {
    path: '/admin-cost_rooms/:id',
    name: 'admin-cost_rooms',
    component: () => import('../components/administrator/admin-cost_rooms'),
    props: true
  },
  {
    path: '/admin-feedback',
    name: 'admin-feedback',
    component: () => import('../components/administrator/admin-feedback')
  },
  {
    path: '/admin-publicity',
    name: 'admin-publicity',
    component: () => import('../components/administrator/admin-publicity')
  },
  {
    path: '/admin-schedule',
    name: 'admin-schedule',
    component: () => import('../components/administrator/admin-schedule')
  },
  {
    path: '/admin-schedule/:id',
    name: 'schedule-by-person',
    component: () => import('../components/administrator/admin-schedule')
  },
  {
    path: '/admin-staff',
    name: 'admin-staff',
    component: () => import('../components/administrator/admin-staff')
  },
  {
    path: '/admin-client',
    name: 'admin-client',
    component: () => import('../components/administrator/admin-client')
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
