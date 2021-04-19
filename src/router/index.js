import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
  },
  {
    path: '/datail/:id',   // 记得此处拼接id
    name: 'detail',
    component: () => import('../components/detail.vue'),
  },
  {
    path: '/addNav',
    name: 'addNav',
    meta: {keepAlive: true},
    component: () => import('../components/addNav.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
