<template>
  <div class="menu">
    <div>
      <div class="menu-item active" v-if="pop.currentMenu==='msg'">
        <Icon type="ios-chatbubbles" />
      </div>
      <div class="menu-item" v-else @click="handleSwitchMenuItem('msg')">
        <Icon type="ios-chatbubbles" />
      </div>
    </div>
    <div>
      <div class="menu-item active" v-if="pop.currentMenu==='app'">
        <Icon type="md-apps" />
      </div>
      <div class="menu-item" v-else @click="handleSwitchMenuItem('app')">
        <Icon type="md-apps" />
      </div>
    </div>
    <div>
      <div class="menu-item active"  v-if="pop.currentMenu==='calendar'">
        <Icon type="ios-calendar" />
      </div>
      <div class="menu-item" v-else @click="handleSwitchMenuItem('calendar')">
        <Icon type="ios-calendar" />
      </div>
    </div>
    <div>
      <div class="menu-item active" v-if="pop.currentMenu==='document'">
        <Icon type="md-document" />
      </div>
      <div class="menu-item" v-else @click="handleSwitchMenuItem('document')">
        <Icon type="md-document" />
      </div>
    </div>
    <div>
      <div class="menu-item active" v-if="pop.currentMenu==='addressBook'">
        <Icon type="md-bookmarks" />
      </div>
      <div class="menu-item" v-else @click="handleSwitchMenuItem('addressBook')">
        <Icon type="md-bookmarks" />
      </div>
    </div>
    <div>
      <div class="menu-item active" v-if="pop.currentMenu==='star'">
        <Icon type="md-star" />
      </div>
      <div class="menu-item" v-else @click="handleSwitchMenuItem('star')">
        <Icon type="md-star" />
      </div>
    </div>
    
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      current: 'msg'
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
    font-size: 24px;
    text-align: center;
    cursor: pointer;
    &:hover {
      color: #ffffff;
    }
  }
  .active {
    background: #2b85e4;
    color: #ffffff;
  }
}
</style>