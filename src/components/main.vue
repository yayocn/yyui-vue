<template>
  <main>
    <masthead-component></masthead-component>

    <div class="yyui-docs-feature">
      <div class="container">
        <h2 class="yyui-docs-title m-b-6">下载</h2>
        <h5 class="m-b-6">YY UI 提供两种方式供您使用。</h5>
        <div class="row">
          <div class="col-sm-4">
            <h3>开发环境</h3>
            <p>编译并且压缩后的css、javascript文件，不含文档和源代码。</p>
            <a class="btn btn-lg btn-theme-outline m-b-2" href="../files/yyui-1.0.0.zip">下载 YY UI</a>
          </div>
          <div class="col-sm-4">
            <h3>源码</h3>
            <p>yayo的所有开发源码，包括sass、JavaScript 和 字体文件、文档、工具等。</p>
            <a class="btn btn-lg btn-theme-outline m-b-2" href="../files/yyui-1.0.0-master.zip">下载源码</a>
          </div>
        </div>

        <div class="divider-lg"></div>

        <h2 class="yyui-docs-title m-b-6">使用</h2>
        <h5 class="m-b-6">使用 YY UI 需要引入css、js文件以及字体文件。</h5>

        <h3>引用css文件</h3>
        <div class="yyui-docs-example">
          <div class="yyui-docs-code">
          <pre>
            <code class="html">
              &lt;link href="..path/yyui.css" rel="stylesheet"/>
            </code>
          </pre>
          </div>
        </div>

        <h3>引用js文件</h3>
        <p class="text-danger p-hz-5">yyui.js 依赖 jquery。</p>
        <div class="yyui-docs-example">
          <div class="yyui-docs-code">
          <pre>
            <code>
              &lt;script src="..path/jquery.js">&lt;/script>
              &lt;script src="..path/yyui.js">&lt;/script>
            </code>
          </pre>
          </div>
        </div>

        <div class="divider-lg"></div>

        <h2 class="yyui-docs-title m-b-6">兼容性</h2>
        <p>YY UI 使用了大量的h5，css3的特性，建议运用于使用现代浏览器的场景，具体的兼容性yayo还未做测试。</p>
      </div>
    </div>
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