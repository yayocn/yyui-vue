<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
  import masthead from './common/masthead.vue'

  export default {
    name: 'main',
    components: {
      'masthead-component': masthead
    }
  }
</script>