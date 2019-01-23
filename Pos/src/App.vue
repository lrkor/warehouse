<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  import leftNav from '@/components/common/leftnav'
  export default {
    name: 'App',
    components: {
      leftNav
    }
  }
</script>

<style>
  #app {
    font-family: 'Microsoft YaHei', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html,body,#app{
    height: 100%;
  }
</style>
