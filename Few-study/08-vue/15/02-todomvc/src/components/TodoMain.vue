<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li @dblclick="showEdit(item.id)" :class="{completed: item.completed, editing: item.id === clickId}" v-for="item in list" :key="item.id">
        <div class="view">
          <input class="toggle" type="checkbox" @change="changeState({id: item.id})" :checked="item.completed">
          <label>{{ item.name }}</label>
          <!-- 这里的delTodo相当于直接提交 mutatation:  delTodo -->
          <button class="destroy" @click="delTodo({id: item.id})"></button>
        </div>
        <input class="edit" :value="item.name" @keyup.enter="updateTodo(item.id, $event)">
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      clickId: -1
    }
  },
  // mapState 辅助函数帮助我们生成计算属性
  computed: {
    ...mapState({
      list: 'list'
    }),
    ...mapState(['username']),
    n3() {
      return '哈哈哈'
    }
  },
  methods: {
    // 把this.delTodo  映射为 this.$store.commit('delTodo')
    ...mapMutations(['delTodo', 'changeState']),
    showEdit(id) {
      this.clickId = id
    },
    updateTodo(id, e) {
      this.$store.commit('updateTodo', {id, name: e.target.value})
      this.clickId = -1
    }
  }
}
</script>

<style>

</style>
