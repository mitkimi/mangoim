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
