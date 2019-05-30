<template>
  <div>
    <div class="divider" v-if="devide">
      <div class="line"></div>
      <div class="str day" v-if="devide === 'day'">{{data.time | day}}</div>
      <div class="str time" v-if="devide === 'time'">{{data.time | time}}</div>
      <div class="str time" v-if="devide === 'today'">今天</div>
      <!-- <div v-else>{{devide}}</div> -->
    </div>
    <div class="msg-pop-container">
      <div class="blank" v-if="!merge"></div>
      <div class="msg-container myMsg" v-if="data.host === 'me'">
        <div class="msg" v-html="data.msg"></div>
        <div class="avatar">
          <Avatar v-if="!merge">田</Avatar>
        </div>
        <div class="time-container" v-if="merge">{{data.time | time}}</div>
        <div class="time-container-first" v-else><span v-if="hasDate(data.time)">{{data.time | day}} </span>{{data.time | time}}</div>
      </div>
      <div class="msg-container notMyMsg" v-else>
        <div class="avatar">
          <Avatar v-if="!merge">田</Avatar>
        </div>
        <div class="msg" v-html="data.msg"></div>
        <div class="time-container" v-if="merge">{{data.time | time}}</div>
        <div class="time-container-first" v-else><span v-if="hasDate(data.time)">{{data.time | day}} </span>{{data.time | time}}</div>
      </div>
    </div>
  </div>
</template>
<script>
const Moment = require('moment')
export default {
  props: {
    data: {
      type: Object,
      require: true
    },
    merge: {
      type: Boolean,
      require: false
    },
    devide: {
      type: String || Boolean,
      require: false
    }
  },
  methods: {
    hasDate (time) {
      const today = new Date()
      const a = Moment(today).format('MM-DD')
      const b = Moment(time).format('MM-DD')
      return !(a === b)
    }
  }
}
</script>
<style lang="scss" scoped>
.divider {
  height: 20px;
  width: 100%;
  margin-bottom: 0;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .line {
    width: calc(100% - 30px - 20px);
    height: 1px;
    margin-top: 9px;
    background: #e8eaec;
  }
  .str {
    width: 40px;
    font-size: 14px;
    color: #c5c8ce;
    text-align: right;
  }
}
.msg-pop-container {
  padding-bottom: 10px;
  position: relative;
  .msg-container {
    display: flex;
    .msg {
      background: #efeff3;
      border-radius: 4px;
      padding: 8px;
      max-width: 70%;
      font-size: 14px;
    }
    .avatar {
      width: 30px;
    }
    .time-container,.time-container-first {
      color: #808695;
      position: absolute;
      opacity: 0;
      transition: all, .3s;
    }
  }
  &:hover {
    .time-container,.time-container-first {
      opacity: 1;
    }
  }
  .myMsg {
    justify-content: flex-end;
    .msg {
      background: #ffffff;
      border: 1px solid #dcdee2;
    }
    .avatar {
      margin-left: 10px;
    }
    .time-container-first {
      right: 40px;
      top: 10px;
    }
    .time-container {
      right: 0;
      top: 50%;
      transform: translateY(-80%);
    }
  }
  .notMyMsg {
    justify-content: flex-start;
    .avatar {
      margin-right: 10px;
    }
    .time-container-first {
      left: 40px;
      top: 10px;
    }
    .time-container {
      left: 0;
      top: 50%;
      transform: translateY(-80%);
    }
  }
  .blank {
    width: 100%;
    height: 30px;
  }
}
</style>