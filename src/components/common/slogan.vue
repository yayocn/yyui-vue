<template>
  <div class="yyui-docs-slogan text-center">
    <div :class="sloganBg"></div>
    <p class="text-capitalize">{{ sloganText }}</p>
  </div>
</template>

<script>
  export default {
    name: 'foot',
    props: ['sloganBg', 'sloganText']
  }
</script>