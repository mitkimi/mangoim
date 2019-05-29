<template>
  <div class="component">
    <div class="avatar-container" @click="handleToggle">
      <Avatar size="large" src="http://47.104.80.66:9026/public/uploads/51f8a3457244864aab02af2799276b36.jpeg"></Avatar>
      <div class="dot"></div>
      <Tooltip class="mood" :content="bio" placement="right">
        <Icon type="ios-analytics" />
      </Tooltip>
    </div>
    <transition name="fade" mode="out-in">
    <div class="user-info" v-if="onlyShowPop.onlyShowPop === 'userInfo'">
      <div class="basic-info">
        <div class="name">田昊天</div>
        <div class="avatar">
          <img src="http://47.104.80.66:9026/public/uploads/51f8a3457244864aab02af2799276b36.jpeg" />
          <div class="mask">
            <Icon type="ios-reverse-camera-outline" />
          </div>
        </div>
      </div>
      <div class="mood-info">
        <div class="icon"><Icon type="ios-analytics" /></div>
        <div class="bio">
          <div class="bio-show" v-if="!bioEdit">
            {{bio}}<span class="edit-btn" @click="bioEdit = true"><Icon type="ios-brush-outline" /></span>
          </div>
          <div class="bio-edit" v-else>
            <input v-model="bio" />
            <div class="clear-input">
              <Icon type="md-close-circle" />
            </div>
          </div>
        </div>
      </div>
      <div class="menu-item">
        <div class="name">设置</div>
        <div class="relation">
          <div class="dot"></div>
          <div class="link"><Icon type="ios-arrow-forward" /></div>
        </div>
      </div>
      <div class="menu-item">
        <div class="name">复制链接</div>
        <div class="relation">
          <div class="link"><Icon type="md-copy" /></div>
        </div>
      </div>
    </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      bio: '国家一级退堂鼓演奏大师',
      bioEdit: false
    }
  },
  computed: mapState([
    'onlyShowPop'
  ]),
  methods: {
    ...mapActions([
      'handleSetPop'
    ]),
    handleToggle () {
      if (this.onlyShowPop.onlyShowPop === 'userInfo') {
        this.handleSetPop(null)
      } else {
        this.handleSetPop('userInfo')
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.component {
  .avatar-container {
    margin: 20px 0;
    display: flex;
    justify-content: center;
    position: relative;
    cursor: pointer;
    .dot {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: #ed4014;
      border: 2px solid #17233d;
      position: absolute;
      top: 0px;
      right: 10px;
    }
    .mood {
      background: #f8f8f9;
      width: 16px;
      height: 16px;
      line-height: 16px;
      text-align: center;
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      right: 10px;
    }
  }
  .user-info {
    width: 320px;
    height: 300px;
    background: #ffffff;
    position: absolute;
    top: 26px;
    left: 60px;
    border-radius: 4px;
    box-shadow: 0 0 5px rgba(0,0,0,.16);
    .basic-info {
      height: 140px;
      padding: 0 15px;
      background: #515a6e;
      color: #ffffff;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      .name {
        font-size: 22px;
        font-weight: bold;
      }
      .avatar {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: #ffffff;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        img {
          width: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1;
        }
        .mask {
          width: 100%;
          height: 100%;
          background: rgba(0,0,0,.55);
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          opacity: 0;
          transition: all, 0.3s;
          color: #ffffff;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 22px;
          font-weight: bold;
        }
        &:hover {
          img {
            filter: blur(1px);
          }
          .mask {
            opacity: 1;
          }
        }
      }
    }
    .mood-info {
      padding: 10px 15px;
      font-size: 15px;
      border-bottom: 1px solid #efeff3;
      display: flex;
      justify-content: flex-start;

      margin-bottom: 20px;
      .icon {
        width: 25px;
        color: #c5c8ce;
        margin-top: -2px;
      }
      .bio {
        width: calc(100% - 25px);
        color: #17233d;
        .edit-btn {
          color: #c5c8ce;
          opacity: 0;
          cursor: pointer;
          &:hover {
            color: #2d8cf0;
          }
        }
        .bio-edit {
          position: relative;
          input {
            width: 100%;
            font-size: 15px;
            outline: none;
            &:focus, &:hover {
              & + .clear-input {
                opacity: 1;
              }
            }
          }
          .clear-input {
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0;
            cursor: pointer;
            &:hover {
              opacity: 1;
            }
          }
        }
      }
      &:hover {
        .edit-btn {
          opacity: 1;
        }
      }
    }
    .menu-item {
      padding: 0 20px;
      line-height: 40px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      cursor: pointer;
      .relation {
        display: flex;
        justify-content: flex-end;
        .dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #ed4014;
          opacity: .8;
          margin-top: calc(50% - 4px);
          margin-right: 10px;
        }
        .link {
          color: #808695;
        }
      }
      &:hover {
        background: #efeff3;
      }
    }
  }
}
</style>