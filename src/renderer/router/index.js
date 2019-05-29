import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: require('@/scene/main').default
    },
    // 登录页面
    // {
    //   path: '/',
    //   name: 'signIn',
    //   component: require('@/scene/signin').default
    // },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
