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
            <Icon type="md-flag" />
          </Tooltip>
        </div>
        <div class="btn">
          <Tooltip content="提及" placement="top">
            <Icon class="btn" type="ios-at-outline" />
          </Tooltip>
        </div>
        <div class="btn">
          <Tooltip content="屏幕截图(Command + Shift + A)" placement="top">
            <Icon class="btn" type="md-cut" />
          </Tooltip>
        </div>
        <div class="btn">
          <Tooltip content="更多" placement="top">
            <Icon class="btn" type="md-add-circle" />
          </Tooltip>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./msgEditor.js"></script>
<style src="./msgEditor.scss" lang="scss" scoped></style>