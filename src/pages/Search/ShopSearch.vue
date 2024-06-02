<template>
  <div>
    <h2>我是搜索页</h2>
    <h3>params参数为: {{ $route.params.keyword }}</h3>
    <h3>query参数为: {{ $route.query.k }}</h3>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
</style>