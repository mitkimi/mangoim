<template>
  <div class="component">
    <div class="selector" @click="handleToggleSelections">
      简体中文
      <Icon type="md-arrow-dropup" />
    </div>
    <transition name="fade" mode="out-in" appear>
    <div class="language-select-panel" v-if="pop.onlyShowPop === 'loginLanguage'">
      <div class="select-item" @click="handleSelectLanguage">
        简体中文
      </div>
      <div class="select-item" @click="handleSelectLanguage">
        English
      </div>
    </div>
    </transition>
    <div class="cover" v-if="pop.onlyShowPop === 'loginLanguage'" @click="handleToggleSelections"></div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {}
  },
  mounted () {

  },
  computed: mapState([
    'pop'
  ]),
  methods: {
    ...mapActions([
      'handleSetPop'
    ]),
    handleToggleSelections () {
      if (this.pop.onlyShowPop === 'loginLanguage') {
        this.handleSetPop(null)
      } else {
        this.handleSetPop('loginLanguage')
      }
    },
    handleSelectLanguage () {
      this.handleSetPop(null)
    }
  }
}
</script>
<style lang="scss" scoped>
.component {
  .selector {
    color: #ffffff;
    font-size: 14px;
    cursor: pointer;
  }
  .language-select-panel {
    background: rgba(255,255,255,.85);
    width: 120px;
    padding: 8px 0;
    border-radius: 4px;
    overflow: hidden;
    position: absolute;
    right: 0;
    bottom: 30px;
    z-index: 11;
    .select-item {
      line-height: 30px;
      padding: 0 15px;
      font-size: 16px;
      cursor: pointer;
      &:hover {
        background: #2d8cf0;
        color: #ffffff;
        transition: all, 0.3s;
      }
    }
  }
  .cover {
    width: 100vw;
    height: 100vh;
    /* background: rgba(0,0,0,.5); */
    position: absolute;
    bottom: -20px;
    right: -20px;
    z-index: 10;
  }
}
</style>