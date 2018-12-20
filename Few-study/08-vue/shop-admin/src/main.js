// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 入口文件  在这里引入各种 框架 CSS JS LESS SASS 等文件
// 引入 Vue
import Vue from 'vue'
// 引入 App 根组件
import App from './App'
// 引入路由模块 ./router/index.js
import router from './router'
// 引入样式重置文件
import '@/assets/normalize.css'
// 引入 element-ui 框架
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入 axios 可以进行 ajax 请求
import axios from 'axios'

// 使用 element-ui 框架
Vue.use(ElementUI)
// 将 axios 挂载到实例上,让全局可以使用
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
