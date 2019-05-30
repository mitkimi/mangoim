import Vue from 'vue'
import axios from 'axios'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import App from './App'
import router from './router'
import store from './store'
Vue.use(iView)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

const moment = require('moment')
Vue.filter('day', function (value, formatString) {
  formatString = formatString || 'M-DD'
  if (value) {
    return moment(value).format(formatString)
  } else {
    return ''
  }
})
Vue.filter('time', function (value, formatString) {
  formatString = formatString || 'HH:mm'
  if (value) {
    return moment(value).format(formatString)
  } else {
    return ''
  }
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
