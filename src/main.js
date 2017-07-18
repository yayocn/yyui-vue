import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '../lib/yyui/css/yyui-1.1.2.css'
import './assets/css/common.scss'
import './assets/css/docs.scss'
import './assets/css/sidebar-scrollspy.scss'
import './assets/css/yyui-site.scss'
import 'animate.css'

import 'jquery'
import 'jquery.easing'
import '../lib/yyui/js/yyui-1.1.2'
import './assets/js/scrollspy'
import './directives/highlight'

new Vue({
  el: '#yyui',
  router,
  store,
  render: h => h(App)
})
