import Vue from 'vue'
import VueRouter from 'vue-router'
import Introduction from '../components/introduction.vue'
import Start from '../components/start.vue'
import Global from '../components/global.vue'
import Components from '../components/components.vue'
import Plugins from '../components/plugins.vue'

import common from '../assets/js/common'

Vue.use(VueRouter)

const router = new VueRouter({
  // it's wrong after build
  // mode: 'history',
  // scrollBehavior: () => ({
  //   y: 0
  // }),
  routes: [
    {
      path: '/',
      component: Introduction
    },
    {
      path: '/introduction',
      component: Introduction
    },
    {
      path: '/start',
      component: Start
    },
    {
      path: '/global',
      component: Global
    },
    {
      path: '/components',
      component: Components
    },
    {
      path: '/plugins',
      component: Plugins
    }
  ]
})

router.afterEach((to, from, next) => {
  common.toAnchor('top')
})

export default router
