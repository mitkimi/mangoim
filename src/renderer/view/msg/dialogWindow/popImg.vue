<template>
  <div class="img" @click="handleViewMedia">
    <img :src="data.src" />
    <transition name="fade" mode="out-in">
      <div v-if="mediaView">
        <div class="window">
          <div class="img-container">
            <img :src="data.src" />
          </div>
          <div class="float close-btn" @click="closeViewMedia">
            <div class="btn-container">
              <Icon type="md-close" />
            </div>
          </div>
          <div class="float prev-btn">
            <div class="btn-container">
              <Icon type="ios-arrow-back" />
            </div>
          </div>
          <div class="float next-btn">
            <div class="btn-container">
              <Icon type="ios-arrow-forward" />
            </div>
          </div>
          <div class="float menu-op">菜单</div>
        </div>
        <div class="view-pic" @click="closeViewMedia"></div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      require: false
    }
  },
  data () {
    return {
      mediaView: false
    }
  },
  methods: {
    handleViewMedia () {
      this.mediaView = true
    },
    closeViewMedia (e) {
      e.stopPropagation()
      console.log('1 点击了关闭')
      this.mediaView = false
      console.log('2 设置了值：', this.mediaView)
    }
  }
}
</script>
<style lang="scss" scoped>
.img {
  width: 300px;
  overflow: hidden;
  border-radius: 4px;
  img {
    width: 100%;
  }
  .view-pic {
    width: 100vw;
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 19;
    background:#000000;
  }
  .window {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #efeff3;
    box-shadow: 0 0 50px 0 rgba(0,0,0,.35);
    border: 1px solid #dcdee2;
    padding: 30px 15px;
    border-radius: 6px;
    z-index: 20;
    .img-container {
      width: 75vw;
      display: flex;
      justify-content: center;
      img {
        height: 75vh;
        width: auto;
      }
    }
    .float {
      position: absolute;
      transition: all, .3s;
      padding: 20px;
      opacity: 0;
      &:hover {
        opacity: 1;
      }
      .btn-container {
        cursor: pointer;
        width: 60px;
        height:60px;
        border-radius: 50%;
        background: #ffffff;
        font-size: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transition: all, .3s;
        &:hover {
          color: #2d8cf0;
        }
      }
    }
    
    .prev-btn {
      width: 100px;
      height: 100px;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
    .next-btn {
      width: 100px;
      height: 100px;
      top: 50%;
      right: 0;
      transform: translateY(-50%);
    }
    .close-btn {
      top: 0;
      left: 0;
      width: 100px;
      height: 100px;
    }
    .menu-op {
      width: 600px;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
      background: #ffffff;
      height: 60px;
      border-radius: 30px;
    }
  } 
}
</style>