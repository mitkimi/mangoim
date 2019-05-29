import MgInput from '../../components/mgInput'
import MgLanguageSelector from './languageSelector'
import VueParticles from './vue-particles/vue-particles'
export default {
  components: {
    MgInput,
    MgLanguageSelector,
    VueParticles
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
