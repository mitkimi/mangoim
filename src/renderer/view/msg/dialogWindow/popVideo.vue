<template>
  <div class="video">
    <video :src="data.src" ref="video" muted autoplay></video>
    <div class="play-btn" @click="handlePlayVideo"><Icon type="md-play" /></div>
    <div class="video-duration"><Icon type="ios-videocam" /> {{videoDuration | duration}}</div>
    <transition name="fade" mode="out-in">
      <div v-if="mediaView">
        <div class="cover" @click="handleCloseVideo"></div>
        <div class="pop-video-container">
          <video ref="popVideo" :src="data.src" :loop="popView.loop" preload @ended="end"></video>
          <div class="float menu">
            <div class="control-btns">
              <div class="play-btn-group video-control-btn" @click="handlePopViewAction('play')">
                <Tooltip content="暂停" v-if="popView.play"  placement="top">
                  <Icon class="c-btn" type="ios-pause" />
                </Tooltip>
                <Tooltip content="播放" v-else placement="top">
                  <Icon class="c-btn" type="ios-play" />
                </Tooltip>
              </div>
              <div class="play-btn-group video-control-btn" @click="handlePopViewAction('loop')">
                <Tooltip content="只播一次" v-if="popView.loop" placement="top">
                  <Icon class="c-btn" type="md-code-working" />
                </Tooltip>
                <Tooltip content="单片循环" v-else placement="top">
                  <Icon class="c-btn" type="md-infinite" />
                </Tooltip>
              </div>
              <div class="period">
                <Slider v-model="popView.duration" @tip-format="calcDuration" @on-change="handleSetVideoDuration"></Slider>
              </div>
            </div>
          </div>
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
      mediaView: false,
      popView: {
        play: false,
        loop: false,
        duration: 0
      },
      timer: null
    }
  },
  mounted () {
    // this.popView.length = this.$refs.popVideo.duration
    console.log('aaaaa', this.$refs.popVideo)
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
    },
    handlePopViewAction (action) {
      if (action === 'play') {
        if (this.popView.play) {
          this.$refs.popVideo.pause()
          this.popView.play = false
          clearInterval(this.timer)
        } else {
          this.$refs.popVideo.play()
          this.popView.play = true
          this.timer = setInterval(() => {
            this.asyncVideoTime()
          }, 10)
        }
      } else if (action === 'loop') {
        this.popView.loop = !this.popView.loop
      }
      console.log(this.popView)
    },
    end () {
      this.popView.play = false
      clearInterval(this.timer)
    },
    asyncVideoTime () {
      this.popView.duration = (this.$refs.popVideo.currentTime / this.videoDuration) * 100
      console.log(this.$refs.popVideo.currentTime)
    },
    handleSetVideoDuration (time) {
      this.$refs.popVideo.currentTime = (time / 100) * this.videoDuration
    },
    calcDuration () {
      const duration = parseInt(this.popView.duration)
      const MM = parseInt(duration / 60) | 0
      const ss = duration - MM * 60
      const SS = ss > 9 ? ss : `0${ss}`
      return `${MM}:${SS}`
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
  .menu {
    bottom: 50px;
    left: 50%;
    transform: translateX(-50%);
    height: 40px;
    border-radius: 30px;
    width: 90%;
    background: #efeff3;
    .control-btns {
      display: flex;
      flex-direction: row;
      justify-content: space-bewteen;
      .video-control-btn {
        height: 30px;
        min-width: 30px;
        background: #dcdee2;
        border-radius: 15px;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all, 0.3s;
        box-shadow: inset 0 0 5px rgba(0,0,0,.18);
        margin: 0 5px;
        &:hover {
          box-shadow: inset -2px -2px 5px rgba(0,0,0,.3);
        }
      }
      .period {
        width: calc(100% - 70px);
        margin-left: 15px;
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