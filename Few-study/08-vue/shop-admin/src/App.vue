<template>
  <!-- 整个的 app 组件用作父组件来使用 -->
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  height: 100%;
}
</style>
