import Vue from 'vue'
import Router from 'vue-router'
import Cart from './components/Cart.vue'
import About from './components/About.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
Vue.use(Router)
export default new Router({
  routes: [{
      path: '/',
      name: 'cart',
      component: Cart
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
