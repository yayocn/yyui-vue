<template>
  <div>
    <masthead-component>
      <h1>开始</h1>
      <h4>简要的介绍 YY UI 的下载、使用。</h4>
    </masthead-component>

    <div class="yyui-docs-feature">
      <div class="container">
        <h2 class="yyui-docs-title m-b-6">下载</h2>
        <h5 class="m-b-6">YY UI 提供两种方式供您使用。</h5>
        <div class="row">
          <div class="col-sm-4">
            <h4>开发环境</h4>
            <p>编译并且压缩后的css、javascript文件，不含文档和源代码。</p>
            <a class="btn btn-theme-outline m-b-2" href="files/yyui-1.1.2.zip">下载 YY UI</a>
          </div>
          <div class="col-sm-4">
            <h4>源码</h4>
            <p>yayo 的所有开发源码，包括sass、JavaScript 和 assets 等。</p>
            <a class="btn btn-theme-outline m-b-2 text-capitalize" target="_blank"
               href="https://github.com/yayocn/yyui">on github</a>
          </div>
        </div>

        <div class="divider-lg"></div>

        <h2 class="yyui-docs-title m-b-6">使用</h2>
        <h5 class="m-b-6">使用 YY UI 需要引入框架的 css、js 文件。</h5>

        <h4>引用css文件</h4>
        <div class="yyui-docs-example">
          <div class="yyui-docs-code">
          <pre v-hljs><code class="html">
    &lt;link href="yyui.css" rel="stylesheet"/>
          </code></pre>
          </div>
        </div>

        <h4>引用js文件</h4>
        <p class="text-danger">yyui.js 依赖 jquery，推荐 <a target="_blank" href="https://code.jquery.com/">jquery1.12.4</a>。
        </p>
        <div class="yyui-docs-example">
          <div class="yyui-docs-code">
          <pre v-hljs><code class="html">
    &lt;script src="jquery.min.js"&lt;/script>
    &lt;script src="yyui.min.js"&lt;/script>
            </code></pre>
          </div>
        </div>

        <div class="divider-lg"></div>

        <h2 class="yyui-docs-title m-b-6">兼容性</h2>
        <p>YY UI 使用了大量的 H5，CSS3 的特性，建议运用于使用现代浏览器的场景。</p>
      </div>
    </div>

    <slogan-component slogan-bg="slogan-start" slogan-text="yang `we belong eachother.` leng"></slogan-component>
  </div>
</template>

<script>
  import masthead from './common/masthead.vue'
  import slogan from './common/slogan.vue'

  import common from '../assets/js/common'

  export default {
    name: 'start',
    components: {
      'masthead-component': masthead,
      'slogan-component': slogan
    }
  }
</script>