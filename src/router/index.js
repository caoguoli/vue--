import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Start from '@/components/start/Start'
import Public from '@/components/public/Public'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/start',
      name: 'Start',
      component: Start
    },
    {
      path: '/public',
      name: 'Public',
      component: Public
    }
  ]
})
