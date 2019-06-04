const ipc = require('electron').ipcRenderer

export default {
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
