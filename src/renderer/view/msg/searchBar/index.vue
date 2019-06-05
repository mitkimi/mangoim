<template>
  <div class="component">
    <div class="search-bar-container">
      <div class="str"><Icon type="ios-search" /> 查找会话、消息、文档...</div>
      <div class="command">(<span v-if="platform === 'win32'">ctrl</span><span class="iconfont" v-if="platform === 'darwin'">&#xe762;</span> + K)</div>
    </div>
  </div>
</template>
<script src="./searchBar.js"></script>
<style src="./searchBar.scss" lang="scss" scoped></style>
