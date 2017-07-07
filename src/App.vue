<template>
  <div>
    <header>
      <navbar></navbar>
    </header>

    <foot></foot>
  </div>
</template>

<script>
  import navbar from './components/navbar.vue'
  import foot from './components/footer.vue'

  export default {
    name: 'app',
    components: {
      navbar,
      foot
    }
  }
</script>