<template>
  <nav class="navbar navbar-yyui-site">
    <div class="container">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#nav_bar">
        <i class="fa fa-bars"></i>
      </button>

      <a href="#" class="navbar-brand">YY UI</a>

      <div id="nav_bar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li><a href="#">简介</a></li>
          <li><a href="#">开始</a></li>
          <li><a href="#">全局样式</a></li>
          <li><a href="#">组件</a></li>
          <li><a href="#">插件</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navbar'
  }
</script>