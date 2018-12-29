import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  list: [
    { id: 1, name: '唱歌', completed: true },
    { id: 2, name: '聚会', completed: false },
    { id: 3, name: '找工作', completed: false }
  ],
  username: 'zs'
}

const mutations = {
  addTodo (state, payload) {
    state.list.unshift({
      id: +new Date(),
      name: payload.name,
      completed: false
    })
  },
  delTodo (state, payload) {
    let idx = state.list.findIndex(item => item.id === payload.id)
    state.list.splice(idx, 1)
  },
  changeState (state, payload) {
    // 修改id对应的任务的状态
    let idx = state.list.findIndex(item => item.id === payload.id)
    state.list[idx].completed = !state.list[idx].completed
  },
  updateTodo (state, payload) {
    let idx = state.list.findIndex(item => item.id === payload.id)
    state.list[idx].name = payload.name
  },
  clearTodo (state) {
    state.list = state.list.filter(item => !item.completed)
  }
}

// vuex中的getters类似于组件中计算属性
// 一般来说，如果需要根据state中的数据得到新的数据，就需要使用到getters
const getters = {
  leftCount (state) {
    return state.list.filter(item => !item.completed).length
  },
  isShowFooter (state) {
    return state.list.length > 0
  },
  isShowClear (state) {
    return state.list.some(item => item.completed)
  }
}

const actions = {
  // context: 上下文， context其实就是vuex对象
  clear (context) {
    setTimeout(() => {
      context.commit('clearTodo')
    }, 1000)
  }
}

// 创建一个store
const store = new Vuex.Store({
  // 严格模式
  strict: true,
  state,
  mutations,
  getters,
  actions
})

export default store
