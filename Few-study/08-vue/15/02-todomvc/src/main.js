import Vue from 'vue'
import App from './App'
import '@/assets/base.css'
import '@/assets/index.css'
import store from './store'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store
})
