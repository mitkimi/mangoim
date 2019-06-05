<template>
  <div class="window-btn">
    <div class="btn minsize-bt" @click="handleMinsizeWindow">
      <span class="iconfont bt-icon">&#xe61d;</span>
    </div>
    <div class="btn maxsize-bt"  @click="handleMaxsizeWindow">
      <span class="iconfont bt-icon">&#xe534;</span>
    </div>
    <div class="btn close-bt"  @click="handleCloseWindow">
      <span class="iconfont bt-icon">&#xe60f;</span>
    </div>
  </div>
</template>

<script src="./windowBtn.js"></script>

<style lang="scss" src="./windowBtn.scss" scoped></style>