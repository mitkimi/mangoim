<template>
  <div class="window-btn">
    <div class="btn close-bt" @click="handleCloseWindow">
      <Icon type="md-close" class="bt-icon" />
    </div>
    <div class="btn minsize-bt" @click="handleMinsizeWindow">
      <Icon type="md-remove" class="bt-icon" />
    </div>
    <div class="btn maxsize-bt" @click="handleMaxsizeWindow">
      <div class="bt-icon">
        <Icon type="md-arrow-dropleft" class="p" />
        <Icon type="md-arrow-dropright" class="p" />
      </div>
      <!-- <div class="bt-icon">
        <Icon type="md-add" class="bt-icon" />
      </div> -->
    </div>
  </div>
</template>

<script src="./windowBtn.js"></script>

<style lang="scss" src="./windowBtn.scss" scoped></style>