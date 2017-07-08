import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Logs from '@/components/Logs'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/logs',
      name: 'Logs',
      component: Logs
    }
  ]
})

router.afterEach(route => {
  router.pathTo = route.fullPath === '/' ? '/logs' : '/'
})

export default router
