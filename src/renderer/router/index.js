import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    // 主界面
    {
      path: '/main',
      name: 'main',
      component: require('@/scene/main').default,
      children: [
        {
          path: 'msg',
          name: 'msgView',
          component: require('@/view/msg').default
        },
        {
          path: 'app',
          name: 'appWebView',
          component: require('@/view/apps').default
        },
        {
          path: 'calendar',
          name: 'calendarView',
          component: require('@/view/calendar').default
        },
        {
          path: 'document',
          name: 'documentWebView',
          component: require('@/view/document').default
        },
        {
          path: 'addressBook',
          name: 'addressBook',
          component: require('@/view/addressBook').default
        },
        {
          path: 'star',
          name: 'starView',
          component: require('@/view/star').default
        }
      ]
    },
    // 登录页面
    {
      path: '/',
      name: 'signIn',
      component: require('@/scene/signin').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
