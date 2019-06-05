<template>
  <div class="menu">
    <div>
      <div class="menu-item active" v-if="pop.currentMenu==='msg'">
        <span class="iconfont">&#xe61f;</span>
      </div>
      <div class="menu-item" v-else @click="handleSwitchMenuItem('msg')">
        <span class="iconfont">&#xe61f;</span>
      </div>
    </div>
    <div>
      <div class="menu-item active" v-if="pop.currentMenu==='app'">
        <span class="iconfont">&#xe61b;</span>
      </div>
      <div class="menu-item" v-else @click="handleSwitchMenuItem('app')">
        <span class="iconfont">&#xe61b;</span>
      </div>
    </div>
    <div>
      <div class="menu-item active"  v-if="pop.currentMenu==='calendar'">
        <span class="iconfont">&#xe68c;</span>
        <div class="menu-date">{{date}}</div>
      </div>
      <div class="menu-item" v-else @click="handleSwitchMenuItem('calendar')">
        <span class="iconfont">&#xe68c;</span>
        <div class="menu-date">{{date}}</div>
      </div>
    </div>
    <div>
      <div class="menu-item active" v-if="pop.currentMenu==='document'">
        <span class="iconfont">&#xe61e;</span>
      </div>
      <div class="menu-item" v-else @click="handleSwitchMenuItem('document')">
        <span class="iconfont">&#xe61e;</span>
      </div>
    </div>
    <div>
      <div class="menu-item active" v-if="pop.currentMenu==='addressBook'">
        <span class="iconfont">&#xe68d;</span>
      </div>
      <div class="menu-item" v-else @click="handleSwitchMenuItem('addressBook')">
        <span class="iconfont">&#xe68d;</span>
      </div>
    </div>
    <div>
      <div class="menu-item active" v-if="pop.currentMenu==='star'">
        <span class="iconfont">&#xe612;</span>
      </div>
      <div class="menu-item" v-else @click="handleSwitchMenuItem('star')">
        <span class="iconfont">&#xe612;</span>
      </div>
    </div>
    
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      current: 'msg',
      date: (new Date()).getDate()
    }
  },
  computed: mapState([
    'pop'
  ]),
  methods: {
    ...mapActions([
      'handleSetMenu'
    ]),
    handleSwitchMenuItem (name) {
      this.handleSetMenu(name)
      this.handleRoute(`/main/${name}`)
      // console.log(`/main/${name}`)
    },
    handleRoute (path) {
      this.$router.push({
        path
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.menu {
  .menu-item {
    height: 50px;
    line-height: 50px;
    transition: all, 0.3s;
    /* opacity: .8; */
    color: #c5c8ce;
    font-size: 22px;
    text-align: center;
    cursor: pointer;
    position: relative;
    &:hover {
      color: #ffffff;
      .menu-date {
        background: #ffffff;
        color: #2b85e4;
      }
    }
    .menu-date {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -35%);
      color: #17233d;
      background: #c5c8ce;
      height: 14px;
      font-size: 12px;
      font-weight: bold;
      line-height: 14px;
      padding: 0 2px;
      transition: all, 0;
    }
  }
  .active {
    background: #2b85e4;
    color: #ffffff;
    .menu-date {
      background: #ffffff;
      color: #2b85e4;
    }
  }
}
</style>