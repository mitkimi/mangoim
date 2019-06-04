import MgInput from '../../components/mgInput'
import MgLanguageSelector from './languageSelector'
import VueParticles from './vue-particles/vue-particles'
import MacWindowBtn from '@/components/macWindowBtn'
import WinWindowBtn from '@/components/winWindowBtn'
export default {
  components: {
    MgInput,
    MgLanguageSelector,
    VueParticles,
    MacWindowBtn,
    WinWindowBtn
  },
  data () {
    return {
      panel: localStorage.signPanel || 'qr',
      qr: 'home',
      platform: process.platform
    }
  },
  mounted () {
    console.log(process.platform)
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
