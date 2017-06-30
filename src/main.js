import Vue from 'Vue'
import navbar from './components/navbar.vue'

import '../lib/yyui/css/yyui-1.1.0.min.css'
import './assets/css/common.scss'
import './assets/css/docs.scss'
import './assets/css/sidebar-scrollspy.scss'
import './assets/css/yyui-site.scss'

Vue.config.debug = true;//开启错误提示

window.onload = function () {
  new Vue({
    el: '#yyui',
    components: {
      'navbar': navbar
    }
  });
}