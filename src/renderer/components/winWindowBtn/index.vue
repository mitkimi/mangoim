<template>
  <div class="window-btn">
    <div class="btn minsize-bt" @click="handleMinsizeWindow">
      <Icon type="md-remove" class="bt-icon" />
    </div>
    <div class="btn maxsize-bt" @click="handleMaxsizeWindow">
      <Icon class="bt-icon" type="ios-photos-outline" />
    </div>
    <div class="btn close-bt" @click="handleCloseWindow">
      <Icon type="md-close" class="bt-icon" />
    </div>
  </div>
</template>

<script src="./windowBtn.js"></script>

<style lang="scss" src="./windowBtn.scss" scoped></style>