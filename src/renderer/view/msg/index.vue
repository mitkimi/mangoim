<template>
  <div class="msg-view">
    <div class="list">
      <div class="head-line">
        <search-bar></search-bar>
        <add-btn></add-btn>
      </div>
      <div class="dialog-list">
        <div class="group" v-for="dayItem, dayIndex in msg" v-if="dayItem.dialogs.length > 0">
          <div class="group-name">
            <div class="name">{{dayItem.name}}</div>
            <div class="btn" @click="dayItem.unroll = !dayItem.unroll"><Icon type="ios-arrow-dropup" class="transition" :style="!dayItem.unroll ? {transform: 'rotate(180deg)'} : {}" /></div>
          </div>
          <div v-for="item,index in dayItem.dialogs" :key="index" v-if="dayItem.unroll">
            <div class="dialog-owner-card active" v-if="dayIndex === current.day && index === current.dialog">
              <div class="info-container">
                <Avatar :src="item.avatar">{{!item.avatar || item.avatar === '' ? item.name.slice(0,1) : ''}}</Avatar>
                <div class="info">
                  <div class="name">{{item.name}}</div>
                  <div class="last-msg">
                    <i-circle v-if="item.readPercent" :percent="item.readPercent" style="width: 14px;height: 14px;position: relative;" stroke-color="#5cb85c">
                      <Icon type="ios-checkmark" size="20" style="color:#5cb85c;position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);"></Icon>
                    </i-circle>
                    {{item.lastWord}}
                  </div>
                </div>
              </div>
              <div class="time">
                {{item.lastWordTime}}
              </div>
              <div class="options">
                <Tooltip content="完成" placement="top">
                  <Icon class="btn" type="ios-checkmark-circle" />
                </Tooltip>
              </div>
            </div>
            <div class="dialog-owner-card" @click="setCurrentDialogWindow(dayIndex, index)" v-else>
                <div class="info-container">
                  <Avatar :src="item.avatar">{{!item.avatar || item.avatar === '' ? item.name.slice(0,1) : ''}}</Avatar>
                  <div class="info">
                    <div class="name">{{item.name}}</div>
                    <div class="last-msg">
                      <i-circle v-if="item.readPercent" :percent="item.readPercent" style="width: 14px;height: 14px;" stroke-color="#5cb85c">
                        <Icon type="ios-checkmark" size="20" style="color:#5cb85c;position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);"></Icon>
                      </i-circle>
                      {{item.lastWord}}
                    </div>
                  </div>
                </div>
                <div class="time">
                  {{item.lastWordTime}}
                </div>
              <div class="options">
                <Tooltip content="完成" placement="top">
                  <Icon class="btn" type="ios-checkmark-circle" />
                </Tooltip>
              </div>
            </div>
          </div>
          <div>
              
          </div>
        </div>
      </div>
    </div>
    <div class="view">
      <!-- 聊天窗: {{ msg[current.day].name }} , {{msg[current.day].dialogs[current.dialog].name}} -->
      <dialog-window v-if="current.day !== null && current.dialog !== null"></dialog-window>
      <div class="no-msg-container" v-else>
        <div class="no-msg-img">
          <img src="./images/no-msg.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script src="./msg.js"></script>
<style src="./msg.scss" lang="scss" scoped></style>