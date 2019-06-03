export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    handleListenChange (event) {
      // console.log(event)
      // 第一步 检查是否为空
      const msg = this.msg
      if (msg === '\n') {
        this.msg = null
        return
      }
      // 第二步 检查是否回车时带有 shift
      if (event.keyCode === 13 && event.shiftKey) {
        return
      }
      // 第三步 发送
      const lastWord = msg.length > 1 ? msg.charAt(msg.length - 1) : null
      if (event.keyCode === 13 && msg.length > 0 && lastWord === '\n') {
        this.handleSendMsg()
      }
    },
    handleSendMsg () {
      console.log('发送消息 =>', this.msg)
      const msg = this.msg.replace('\n', '<br>')
      this.$emit('sendMsg', msg)
      this.msg = null
    }
  }
}
