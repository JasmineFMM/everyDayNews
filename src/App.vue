<template>
  <div id="app">
    <!-- 这里是需要keepalive的 -->
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>

    <!-- 这里不会被keepalive -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size:0.2rem;
  width:100%;
  height:100%;
}

</style>
