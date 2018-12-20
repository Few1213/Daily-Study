// 这个是路由文件 在这里分发各种模块的路由
import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Home from '@/components/Home'

Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: Home
    }
  ]
})
// 导航守卫配合token实现登录拦截
// 注册导航守卫
// 参数1： to:到哪儿去
// 参数2： from:从哪儿来
// 参数3： next:正常放行
// 如果浏览器中能够获取到token，说明用户登录过
// 如果浏览器中没有token，说明没有登录
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if (to.path === '/login') {
    next()
    return
  }
  if (token) {
    next()
  } else {
    // 去登录页
    next('/login')
  }
})
export default router
