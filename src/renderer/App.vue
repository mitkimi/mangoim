<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'mango',
  methods: {
  }
}
</script>

<style>
  /* CSS */
  * {
    border: 0;
    padding: 0;
    margin: 0;
  }
  @font-face {
    font-family: 'iconfont';
    src: url('./assets/font/iconfont.eot');
    src: url('./assets/font/iconfont.eot?#iefix') format('embedded-opentype'),
        url('./assets/font/iconfont.woff2') format('woff2'),
        url('./assets/font/iconfont.woff') format('woff'),
        url('./assets/font/iconfont.ttf') format('truetype'),
        url('./assets/font/iconfont.svg#iconfont') format('svg');
  }
  .iconfont {
    font-family: "iconfont" !important;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
