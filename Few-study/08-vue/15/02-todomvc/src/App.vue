<template>
  <div id="app">
    <section class="todoapp">
      <todo-header></todo-header>
      <todo-main></todo-main>
      <todo-footer></todo-footer>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  // 发送请求
  async created() {
    let res = await axios.get('/api/getBrandList')
    console.log(res)
  }
}
</script>

<style>
</style>
