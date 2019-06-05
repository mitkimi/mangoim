import AvatarBoard from './avatarBoard'
import MainMenu from './menu'
import MacWindowBtn from '@/components/macWindowBtn'
import winWindowBtn from '@/components/winWindowBtnDark'

export default {
  components: {
    AvatarBoard,
    MainMenu,
    MacWindowBtn,
    winWindowBtn
  },
  data () {
    return {
      platform: process.platform
    }
  },
  mounted () {
  },
  methods: {
  }
}
