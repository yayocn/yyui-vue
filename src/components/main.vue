<template>
  <main>
    <transition :name="transitionName">
      <router-view keep-alive></router-view>
    </transition>
  </main>
</template>

<script>
  import masthead from './common/masthead.vue'
  import 'animate.css'

  const animatesIn = ['bounceIn', 'bounceInDown', 'fadeIn', 'fadeInDown', 'flipInX', 'zoomIn', 'rollIn']
  const animatesOut = ['bounceOut', 'bounceInDown', 'fadeOut', 'fadeInDown', 'flipOutX', 'zoomOut', 'rollOut']

  export default {
    name: 'main',
    data () {
      return {
        transitionName: 'fade'
      }
    },
    watch: {
      $route () {
//        let classIndex = Math.floor((Math.random() * animatesIn.length));
//        this.inClass = animatesIn[classIndex];
//        this.outClass = animatesOut[classIndex];
        this.transitionName = 'bounce';
      }
    }
  }
</script>