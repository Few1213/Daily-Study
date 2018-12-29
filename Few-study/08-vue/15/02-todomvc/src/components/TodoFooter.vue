<template>
  <footer class="footer" v-show="isShowFooter">
    <!-- This should be `0 items left` by default -->
    <span class="todo-count"><strong>{{ leftCount }}</strong> item left</span>
    <!-- Remove this if you don't implement routing -->
    <ul class="filters">
      <li>
        <a class="selected" href="#/">All</a>
      </li>
      <li>
        <a href="#/active">Active</a>
      </li>
      <li>
        <a href="#/completed">Completed</a>
      </li>
    </ul>
    <!-- Hidden if no completed items are left ↓ -->
    <button class="clear-completed" v-show="isShowClear" @click="clearTodo()">Clear completed</button>
  </footer>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters(['leftCount', 'isShowFooter', 'isShowClear'])
    // leftCount() {
    //   return this.$store.getters.leftCount
    // }
  },
  methods: {
    ...mapActions({
      clearTodo: 'clear'
    })
    // ...mapMutations(['clearTodo'])
    // clearTodo() {
    //   this.$store.commit('clearTodo')
    // }
    // clearTodo() {
    //   // 不是去提交一个mutations. 分发一个action
    //   this.$store.dispatch('clear')
    // }
  }
}
</script>

<style>

</style>
