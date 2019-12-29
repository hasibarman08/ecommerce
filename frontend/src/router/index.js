import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: require('../views/home').default
  },
    {
    path: '/offers',
    name: 'offers',
    component: require('../views/offer').default
  },
    {
    path: '/recipes',
    name: 'recipes',
    component: require('../views/recipes').default
  },
    {
    path: '/discounts',
    name: 'discounts',
    component: require('../views/discount-products').default
  },
    {
    path: '/product',
    name: 'product',
    component: require('../views/product/index').default
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
