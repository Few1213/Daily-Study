<template>
  <header class="header">
    <h1>todos</h1>
    <input v-model="todoName" @keyup.enter="addTodo" class="new-todo" placeholder="What needs to be done?" autofocus>
  </header>
</template>

<script>
export default {
  data() {
    return {
      todoName: ''
    }
  },
  methods: {
    addTodo() {
      this.$store.commit('addTodo', { name: this.todoName })
      this.todoName = ''
    }
  }
}
</script>

<style>

</style>
