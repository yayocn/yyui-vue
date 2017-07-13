<template>
  <main>
    <transition :duration="600" name="custom-transition" :leave-active-class="outClass">
      <router-view></router-view>
    </transition>
  </main>
</template>

<script>
  import masthead from './common/masthead.vue'

  const animatesOut = ['bounceOutDown', 'fadeOut', 'lightSpeedOut', 'zoomOut', 'rollOut']

  export default {
    name: 'main',
    data () {
      return {
        outClass: 'animated bounceOutDown'
      }
    },
    watch: {
      '$route' () {
        let classIndex = Math.floor((Math.random() * animatesOut.length));
        this.outClass = `animated ${animatesOut[classIndex]}`;
      }
    }
  }
</script>