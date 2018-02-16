import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/main.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'Home',
      component: Home
    }
  ]
})
