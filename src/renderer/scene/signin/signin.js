import MgInput from '../../components/mgInput'
import MgLanguageSelector from './languageSelector'
import VueParticles from './vue-particles/vue-particles'
import WindowBtn from '@/components/windowBtn'
export default {
  components: {
    MgInput,
    MgLanguageSelector,
    VueParticles,
    WindowBtn
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
    },
    handleFakeLogin () {
      this.$router.push({
        path: '/main/msg'
      })
    }
  }
}
