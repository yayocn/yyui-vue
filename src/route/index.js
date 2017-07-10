import Vue from 'vue'
import VueRouter from 'vue-router'
import introduction from '../components/introduction.vue'
import start from '../components/start.vue'
import global from '../components/global.vue'
import components from '../components/components.vue'
import plugins from '../components/plugins.vue'

Vue.use(VueRouter)

const routes = [
  {path: '/', component: introduction},
  {path: '/introduction', component: introduction},
  {path: '/start', component: start},
  {path: '/global', component: global},
  {path: '/components', component: components},
  {path: '/plugins', component: plugins}
]

const router = new VueRouter({ routes })

export default router
