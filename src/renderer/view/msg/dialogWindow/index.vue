<template>
  <div class="dialog-window">
    <div class="dialog">
      <div class="header">
        <div class="person">
          <div class="avatar">
            <Avatar size="large" src="http://47.104.80.66:9026/public/uploads/51f8a3457244864aab02af2799276b36.jpeg"></Avatar>
          </div>
          <div class="info">
            <div class="name">田昊天</div>
            <div class="bio">
              <Icon type="ios-analytics" /> 国家一级退堂鼓演奏大师
            </div>
          </div>
        </div>
        <div class="option">
          <div class="btn-container">
            <Tooltip content="创建群组" placement="bottom">
              <Icon class="btn" type="md-person-add" />
            </Tooltip>
          </div>
          <div class="btn-container">
            <Tooltip content="完成" placement="bottom">
              <Icon class="btn" type="md-checkbox" />
            </Tooltip>
          </div>
        </div>
      </div>
      <div class="dialog-view" ref="dialogs">
        <msg-pop v-for="item,index in dialog" :key="index" :data="item" :merge="hasMerge(index)" :devide="hasDevider(index)"></msg-pop>
      </div>
      <div class="editor">
        文本编辑区域
        <Button @click="handleSendMsg">模拟聊一句天</Button>
      </div>
    </div>
    <div class="menu-container" ref="menuR">
      <div class="search" v-if="pop.onlyShowPop === 'dialog-search'">
        <div class="menu-page">
            <Tabs value="msg">
              <TabPane label="消息记录" name="msg">消息记录</TabPane>
              <TabPane label="图片" name="image">图片</TabPane>
              <TabPane label="链接" name="url">链接</TabPane>
              <TabPane label="文件" name="file">文件</TabPane>
            </Tabs>
        </div>
      </div>
      <div class="pin" v-if="pop.onlyShowPop === 'dialog-pin'">
        <div class="menu-page">
          <div class="title">Pin</div>
        </div>
      </div>
      <div class="setting" v-if="pop.onlyShowPop === 'dialog-setting'">
        <div class="menu-page">
          <div class="title">设置</div>
        </div>
      </div>
    </div>
    <transition name="fade">
    <div class="menu-mask" v-if="pop.onlyShowPop" @click="handleRoll">
      
    </div>
    </transition>
    <div class="menu-r">
      <div class="menu-item" @click="pop.onlyShowPop ? handleSwitchMenu('search') : handleUnroll('search')">
        <Tooltip content="搜索" placement="left">
          <Icon type="md-desktop" />
        </Tooltip>
      </div>
      <div class="menu-item" @click="pop.onlyShowPop ? handleSwitchMenu('pin') : handleUnroll('pin')">
        <Tooltip content="Pin" placement="left">
          <Icon type="md-pin" />
        </Tooltip>
      </div>
      <div class="menu-item" @click="pop.onlyShowPop ? handleSwitchMenu('setting') : handleUnroll('setting')">
        <Tooltip content="设置" placement="left">
          <Icon type="md-settings" />
        </Tooltip>
      </div>
    </div>
  </div>
</template>
<script src="./dialogWindow.js"></script>
<style src="./dialogWindow.scss" lang="scss" scoped></style>