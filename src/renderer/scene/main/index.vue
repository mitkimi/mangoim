<template>
  <div id="main">
    <div class="menu-bar">
      <div class="window-btn-container" v-if="platform === 'darwin'">
        <mac-window-btn></mac-window-btn>
      </div>
      <avatar-board></avatar-board>
      <main-menu></main-menu>
    </div>
    <div class="router-view">
      <div class="win-btn-container" v-if="platform === 'win32'">
        <div class="drag-area"></div>
        <div class="control-btns">
          <win-window-btn></win-window-btn>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>
<script src="./main.js"></script>
<style src="./main.scss" lang="scss" scoped></style>
