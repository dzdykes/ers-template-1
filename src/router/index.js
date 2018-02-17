import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/main/home.vue'
import Credits from '@/pages/credits.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      alias: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/credits',
      name: 'Credits',
      component: Credits
    }
  ]
})
