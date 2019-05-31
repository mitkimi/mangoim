<template>
  <div class="video">
    <video :src="data.src" ref="video" muted autoplay></video>
    <div class="play-btn" @click="handlePlayVideo"><Icon type="md-play" /></div>
    <div class="video-duration"><Icon type="ios-videocam" /> {{videoDuration | duration}}</div>
    <transition name="fade" mode="out-in">
      <div v-if="mediaView">
        <div class="cover" @click="handleCloseVideo"></div>
        <div class="pop-video-container">
          <video :src="data.src" preload controls="controls"></video>
          <div class="float close-btn" @click="handleCloseVideo">
            <div class="btn-container">
              <Icon type="md-close" />
            </div>
          </div>
        </div>
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
      videoDuration: 0,
      mediaView: false
    }
  },
  mounted () {
    this.getVideoDuration()
  },
  methods: {
    getVideoDuration () {
      const video = this.$refs.video
      video.ondurationchange = () => {
        this.videoDuration = video.duration
      }
    },
    handlePlayVideo () {
      this.mediaView = true
    },
    handleCloseVideo () {
      this.mediaView = false
    }
  }
}
</script>
<style lang="scss" scoped>
.video {
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  video {
    width: 250px;
  }
  .play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 7;
    cursor: pointer;
    width: 50px;
    height: 50px;
    color: #ffffff;
    border: 1px solid #ffffff;
    border-radius: 50%;
    background: rgba(0,0,0,.35);
    font-size: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .video-duration {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: rgba(0,0,0,.5);
    color: #ffffff;
    padding: 0 5px;
    height: 18px;
    border-radius: 9px;
    cursor: default;
  }
  .cover {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 19;
  }
  .pop-video-container {
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
    video {
      background: #333333;
      height: 75vh;
      width: auto;
      max-width: calc(75vh / .5625);
    }
  }
  .float {
    position: absolute;
    transition: all, .3s;
    padding: 10px 40px 40px 10px;
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
  .close-btn {
    top: 0;
    left: 0;
    width: 100px;
    height: 100px;
  }
}
</style>