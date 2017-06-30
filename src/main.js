import Vue from 'Vue'
import navbar from './components/navbar.vue'
Vue.config.debug = true;//开启错误提示
window.onload = function () {
  new Vue({
    el: '#yyui',
    components: {
      'navbar': navbar
    }
  });
}