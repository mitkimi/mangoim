<template>
  <div class="container">
    <div class="editor-container">
      <div class="full-editor">
        <!-- <span v-html="msg"></span><input class="input" v-model="msg" /> -->
        <textarea class="input" v-model="msg" @keyup="handleListenChange($event)" autofocus></textarea>
      </div>
      <div class="input-menu">
        <div class="btn">
          <Tooltip content="表情" placement="top">
            <span class="iconfont btn">&#xe648;</span>
          </Tooltip>
        </div>
        <div class="btn">
          <Tooltip content="提及" placement="top">
            <span class="iconfont btn">&#xe8a6;</span>
          </Tooltip>
        </div>
        <div class="btn">
          <Tooltip content="屏幕截图(Command + Shift + A)" placement="top">
            <span class="iconfont btn">&#xe607;</span>
          </Tooltip>
        </div>
        <div class="btn">
          <Tooltip content="更多" placement="top">
            <span class="iconfont btn">&#xe74a;</span>
          </Tooltip>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./msgEditor.js"></script>
<style src="./msgEditor.scss" lang="scss" scoped></style>