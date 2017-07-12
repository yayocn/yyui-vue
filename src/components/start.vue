<template>
  <div>
    <masthead-component>
      <h1>开始</h1>
      <p class="lead">简要的介绍 YY UI，以及下载、使用。</p>
    </masthead-component>

    <div class="yyui-docs-feature">
      <div class="container">
        <h2 class="yyui-docs-title m-b-6">下载</h2>
        <h5 class="m-b-6">YY UI 提供两种方式供您使用。</h5>
        <div class="row">
          <div class="col-sm-4">
            <h4>开发环境</h4>
            <p>编译并且压缩后的css、javascript文件，不含文档和源代码。</p>
            <a class="btn btn-theme-outline m-b-2" href="./files/yyui-1.1.2.zip">下载 YY UI</a>
          </div>
          <div class="col-sm-4">
            <h4>源码</h4>
            <p>yayo的所有开发源码，包括sass、JavaScript 和 字体文件、文档、工具等。</p>
            <a class="btn btn-theme-outline m-b-2 text-capitalize" target="_blank" href="https://github.com/yayocn/yyui">on github</a>
          </div>
        </div>

        <div class="divider-lg"></div>

        <h2 class="yyui-docs-title m-b-6">使用</h2>
        <h5 class="m-b-6">使用 YY UI 需要引入css、js文件以及字体文件。</h5>

        <h4>引用css文件</h4>
        <div class="yyui-docs-example">
          <div class="yyui-docs-code">
          <pre>
            &lt;link href="路径/yyui.css" rel="stylesheet"/>
          </pre>
          </div>
        </div>

        <h4>引用js文件</h4>
        <p class="text-danger">yyui.js 依赖 jquery，推荐 <a target="_blank" href="https://code.jquery.com/">jquery1.12.4</a>。</p>
        <div class="yyui-docs-example">
          <div class="yyui-docs-code">
          <pre>
            &lt;script src="路径/jquery.min.js"&lt;/script><br/>
            &lt;script src="路径/yyui.min.js"&lt;/script>
          </pre>
          </div>
        </div>

        <div class="divider-lg"></div>

        <h2 class="yyui-docs-title m-b-6">兼容性</h2>
        <p>YY UI 使用了大量的h5，css3的特性，建议运用于使用现代浏览器的场景，具体的兼容性yayo还未做测试。</p>
      </div>
    </div>
  </div>
</template>

<script>
  import masthead from './common/masthead'

  export default {
    name: 'start',
    components: {
      'masthead-component': masthead
    }
  }
</script>