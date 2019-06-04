<template>
  <div id="main">
    <div class="menu-bar">
      <div class="window-btn-container">
        <mac-window-btn></mac-window-btn>
      </div>
      <avatar-board></avatar-board>
      <main-menu></main-menu>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>
<script src="./main.js"></script>
<style src="./main.scss" lang="scss" scoped></style>
