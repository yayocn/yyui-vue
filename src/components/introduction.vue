<template>
  <div>
    <masthead-component class="text-center">
      <span class="yyui-docs-log">Y</span>
      <h4>YY UI，是 YaYo 出于兴趣和以学习的目的而形成的一个前端响应式框架。</h4>
      <a class="btn btn-lg btn-theme m-b-2" href="../files/yyui-1.1.2.zip">下载 YY UI</a>
      <p class="font-sm text-light">当前版本: {{ yyuiVersion }}</p>
    </masthead-component>

    <div class="yyui-docs-feature text-center">
      <div class="container">
        <h2 class="yyui-docs-title">麻雀虽小，五脏俱全</h2>
        <h4 class="m-b-10 text-muted">YY UI 满足前端开发的基本需求，大到响应式，小到一个文本的大小设置，应有尽有。</h4>
        <div class="row">
          <div class="col-sm-4 m-t-10">
            <a href="http://www.w3cplus.com/sassguide/" target="_blank"><img class="img-responsive" src="../assets/image/sass.png" alt=""/></a>
            <h3>预处理器</h3>
            <p class="text-indent">YY UI 采用CSS预处理器 <a href="https://www.sass.hk/">SASS</a> 开发。
              SASS是一种CSS的开发工具，提供了许多便利的写法，大大节省了设计者的时间，使得CSS的开发，变得简单和可维护。</p>
          </div>

          <div class="col-sm-4 m-t-10">
            <img class="img-responsive" src="../assets/image/responsive.png" alt=""/>
            <h3>响应式布局</h3>
            <p class="text-indent">响应式布局可以为不同终端的用户提供更加舒适的界面和更好的用户体验，而且随着目前大屏幕移动设备的普及，用“大势所趋”来形容也不为过。
            随着越来越多的设计师采用这个技术，我们不仅看到很多的创新，还看到了一些成形的模式。YY UI 在PC端表现良好，手机端可用。</p>
          </div>

          <div class="col-sm-4 m-t-10">
            <img class="img-responsive" src="../assets/image/document.png" alt=""/>
            <h3>五脏俱全</h3>
            <p class="text-indent">YY UI 能满足前端大部分的需求，而且附带了详细的开发文档，以及 yayo 在创作过程中的一些体会。</p>
          </div>
        </div>
      </div>
    </div>

    <slogan-component slogan-bg="slogan-introduction" slogan-text="you are not what you are."></slogan-component>
  </div>
</template>

<script>
  import masthead from './common/masthead.vue'
  import slogan from './common/slogan.vue'
  import { mapState } from 'vuex'

  import common from '../assets/js/common'

  export default {
    name: 'introduction',
    components: {
      'masthead-component': masthead,
      'slogan-component': slogan
    },
    computed: mapState([
      'yyuiVersion'
    ]),
    mounted () {
      common.toTop();
    }
  }
</script>