export default {
  data () {
    return {
      panel: localStorage.signPanel || 'qr',
      qr: 'home'
    }
  },
  mounted () {
  },
  methods: {
    handleSelectPanel (str) {
      this.panel = str
      localStorage.signPanel = str
    }
  }
}
