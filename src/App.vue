<template>
  <div id="app">
    <ShopHeder></ShopHeder>
    <router-view></router-view>
    <!--在Home、search显示的，在登录、注册隐藏-->
    <ShopFooter v-if="$route.meta.show"></ShopFooter>
  </div>
</template>

<script>
import ShopHeder from './components/Header/ShopHeader.vue'
import ShopFooter from './components/Footer/ShopFooter.vue'

export default {
  name: 'App',
  components: {
    ShopHeder,
    ShopFooter,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
