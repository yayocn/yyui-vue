<template id="footer">
  <div class="yyui-docs-footer">
    <div class="container text-letter">
      <p class="text-center">Designed by kelp and built by yayo.</p>
      <p class="text-center">wellcome to feedback at github, and we will make it better.</p>
      <ul class="list-inline text-center m-b-0">
        <li><a href="javascript:;" class="text-muted text-web">当前版本 <span>{{ yyuiVersion }}</span></a></li>
        <li><a href="https://github.com/yayocn/yyui" target="_blank">github</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    name: 'foot',
    computed: mapState([
      'yyuiVersion'
    ])
  }
</script>