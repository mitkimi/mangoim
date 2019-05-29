import MgInput from '../../components/mgInput'
export default {
  components: {
    MgInput
  },
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
