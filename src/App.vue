<template>
  <div id="app">
    <header>
      <navbar-component></navbar-component>
    </header>
    <main-component></main-component>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import Navbar from './components/navbar.vue'
  import Footer from './components/footer.vue'
  import Main from './components/main.vue'

  export default {
    name: 'app',
    components: {
      'navbar-component': Navbar,
      'footer-component': Footer,
      'main-component': Main,
    }
  }
</script>
