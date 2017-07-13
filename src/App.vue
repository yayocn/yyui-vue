<template>
  <div id="top">
    <header>
      <navbar-component></navbar-component>
    </header>
    <main-component></main-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import navbar from './components/navbar.vue'
  import main from './components/main.vue'
  import footer from './components/footer.vue'
  import MainComponent from './components/main'

  import router from './route/index'
  import store from './store/index'
  import './directives/highlight'

  export default {
    name: 'app',
    components: {
      MainComponent,
      'navbar-component': navbar,
      'main-component': main,
      'footer-component': footer
    },
    router,
    store
  }
</script>
