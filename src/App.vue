<template>
  <div>
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
  import router from './route/index'
  import MainComponent from './components/main'

  export default {
    name: 'app',
    components: {
      MainComponent,
      'navbar-component': navbar,
      'main-component': main,
      'footer-component': footer
    },
    router
  }
</script>