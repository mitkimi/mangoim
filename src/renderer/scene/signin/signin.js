import MgInput from '../../components/mgInput'
import MgLanguageSelector from './languageSelector'
export default {
  components: {
    MgInput,
    MgLanguageSelector
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
