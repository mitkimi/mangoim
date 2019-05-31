<template>
  <div class="video">
    <video :src="data.src" ref="video"></video>
    <div class="play-btn" @click="handlePlayVideo"><Icon type="md-play" /></div>
    <div class="video-duration"><Icon type="ios-videocam" /> {{videoDuration | duration}}</div>
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
      window.open(this.data.src)
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
}
</style>