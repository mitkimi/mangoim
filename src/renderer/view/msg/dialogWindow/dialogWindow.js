import { mapState, mapActions } from 'vuex'
import MsgPop from './MsgPop'
const Moment = require('moment')
export default {
  components: {
    MsgPop
  },
  data () {
    return {
      dialogMenuShow: false,
      dialog: [
        {
          msg: '你好啊，小伙伴😄',
          type: 'string',
          host: 'me',
          time: new Date() - 28 * 3600 * 1000
        },
        {
          msg: '您好，一段虚拟对话',
          type: 'string',
          host: 'notme',
          time: new Date() - 24 * 3600 * 1000 - 4500
        },
        {
          msg: '您好，两段虚拟对话。这段对话比较长，所以我希望他有点分量<br>其中还包括一些不知道什么鬼的东西。<br>、、、、是吧',
          type: 'string',
          host: 'notme',
          time: new Date() - 24 * 3600 * 1000
        },
        {
          msg: '那就先这样吧',
          type: 'string',
          host: 'me',
          time: new Date() - 23 * 3600 * 1000
        },
        {
          msg: '我就先睡觉去了',
          type: 'string',
          host: 'me',
          time: new Date() - 23 * 3600 * 1000 + 2000
        },
        {
          msg: '北北',
          type: 'string',
          host: 'me',
          time: new Date() - 23 * 3600 * 1000 + 10000
        },
        {
          msg: '应该显示“今天”',
          type: 'string',
          host: 'me',
          time: new Date() - 6 * 3600 * 1000 - 1
        },
        {
          msg: '对吧',
          type: 'string',
          host: 'me',
          time: new Date() - 6 * 3600 * 1000
        },
        {
          msg: '30分钟前的一句话',
          type: 'string',
          host: 'notme',
          time: new Date() - 30 * 60 * 1000
        }
      ]
    }
  },
  computed: mapState([
    'pop'
  ]),
  mounted () {
    this.autoFocusDialogBottom()
  },
  methods: {
    ...mapActions([
      'handleSetPop'
    ]),
    hasMerge (i) {
      /***
       * 第i个和第i-1个
       * 获取是否有devider 有 不合并
       * 第i个和第i-1个是同一个主 合并
       */
      const hasDevider = this.hasDevider(i)
      if (hasDevider) {
        return false
      }
      if (i > 0) {
        if (this.dialog[i].host === this.dialog[i - 1].host) {
          return true
        }
        return false
      } else {
        return false
      }
    },
    hasDevider (i) {
      if (i > 0) {
        const a = this.dialog[i].time * 1
        const b = this.dialog[i - 1].time * 1
        const Today = Moment(new Date()).format('MMDD') * 1
        const ADay = Moment(this.dialog[i].time).format('MMDD') * 1
        const BDay = Moment(this.dialog[i - 1].time).format('MMDD') * 1
        // 今天的时候，细分
        if (ADay === Today) {
          if (ADay > BDay) {
            return 'today'
          } else if (a - b > 60 * 1000 * 10) {
            return 'time'
          }
        } else {
          // 不是今天 不细分，只要在同一天内，就不要devider
          if (ADay === BDay) {
            return null
          } else if (a - b > 3600 * 24) {
            return 'day'
          }
        }
        return null
      } else {
        return null
      }
    },
    autoFocusDialogBottom () {
      const p = this.$refs.dialogs
      p.scrollTop = p.scrollHeight
    },
    handleSendMsg () {
      this.dialog.push({
        msg: '模拟的一句话',
        type: 'string',
        host: 'me',
        time: new Date() * 1
      })
      setTimeout(() => {
        this.autoFocusDialogBottom()
      }, 0)
    },
    handleUnroll (key) {
      this.handleSetPop(`dialog-${key}`)
      setTimeout(() => {
        let i = 0
        const a = setInterval(() => {
          i += 10
          this.$refs.menuR.style.width = `${i}px`
          if (i >= 350) {
            this.$refs.menuR.style.width = '350px'
            clearInterval(a)
          }
        }, 1)
      }, 100)
    },
    handleSwitchMenu (key) {
      this.handleSetPop(`dialog-${key}`)
    },
    handleRoll () {
      let i = 350
      const b = setInterval(() => {
        i -= 10
        this.$refs.menuR.style.width = `${i}px`
        if (i < 0) {
          this.$refs.menuR.style.width = '0px'
          clearInterval(b)
        }
      }, 1)
      setTimeout(() => {
        this.handleSetPop(null)
        clearInterval(b)
      }, 150)
    }
  }
}
