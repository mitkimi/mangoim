import SearchBar from './searchBar'
import AddBtn from './addBtn'

export default {
  components: {
    SearchBar, AddBtn
  },
  data () {
    return {
      current: {
        day: 0,
        dialog: 0
      },
      msg: [
        {
          name: '今天',
          unroll: true,
          dialogs: [
            {
              name: '田昊天',
              type: 'dialog',
              avatar: '',
              lastWord: '是吗？哈哈哈',
              readPercent: 100,
              lastWordTime: '13:00'
            },
            {
              name: '申旭凌',
              type: 'dialog',
              avatar: '',
              lastWord: '这个我也不知道',
              readPercent: 100,
              lastWordTime: '12:50'
            },
            {
              name: '一群不知道什么人的群(4)',
              type: 'groupChat',
              avatar: '',
              lastWord: '我: 具体情况具体分析...',
              readPercent: 75,
              lastWordTime: '12:37'
            }
          ]
        },
        {
          name: '昨天',
          unroll: true,
          dialogs: [
            {
              name: '尤雨溪',
              type: 'dialog',
              avatar: '',
              lastWord: '谁知道呢',
              readPercent: 100,
              lastWordTime: '23:43'
            },
            {
              name: '孙永豪',
              type: 'dialog',
              avatar: '',
              lastWord: '行，那明天喊你',
              readPercent: 0,
              lastWordTime: '11:03'
            }
          ]
        }
      ]
    }
  },
  methods: {
    setCurrentDialogWindow (dayIndex, dialogIndex) {
      this.current.day = dayIndex
      this.current.dialog = dialogIndex
      console.log(dayIndex, dialogIndex)
    }
  }
}
