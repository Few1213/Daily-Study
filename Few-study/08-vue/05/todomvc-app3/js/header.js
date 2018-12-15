Vue.component('todo-header',{
    template:`
    <header class="header">
        <h1>todos</h1>
        <input class="new-todo" placeholder="What needs to be done?" autofocus v-model="addName" @keyup="addTodo">
    </header>
    `,
    data(){
        return {
            addName: ''
        }
    },
    methods:{
        addTodo(){
            this.$emit('add-todo',this.addName)
            this.addName = ''
        }
    }
})