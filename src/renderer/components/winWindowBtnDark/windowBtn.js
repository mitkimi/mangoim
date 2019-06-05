const ipc = require('electron').ipcRenderer

export default {
  data () {
    return {
    }
  },
  methods: {
    handleCloseWindow () {
      ipc.send('close-app')
    },
    handleMinsizeWindow () {
      ipc.send('min-app')
    },
    handleMaxsizeWindow () {
      ipc.send('max-app')
    }
  }
}
