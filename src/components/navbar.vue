<template>
  <nav class="navbar navbar-yyui-site">
    <div class="container">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#nav_bar">
        &#8645;
      </button>

      <router-link to="/" class="navbar-brand">YY UI</router-link>

      <div id="nav_bar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <router-link to="introduction" tag="li"><a>简介</a></router-link>
          <router-link to="start" tag="li"><a>开始</a></router-link>
          <router-link to="global" tag="li"><a>全局样式</a></router-link>
          <router-link to="components" tag="li"><a>组件</a></router-link>
          <router-link to="plugins" tag="li"><a>插件</a></router-link>
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