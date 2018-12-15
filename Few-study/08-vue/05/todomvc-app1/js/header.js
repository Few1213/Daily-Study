Vue.component('todo-header',{
    template:`
    <header class="header">
        <h1>todos</h1>
        <input class="new-todo" placeholder="What needs to be done?" autofocus v-model="addName" @keyup.enter="addTodo">
    </header>
    `,
    data(){
        return {
            addName:''
        }
    },
    methods:{
        addTodo(){
            // 这里的 this 指的是当前的组件
            // console.log(this);
            // 可以通过 $emit 触发当前实例上的事件,附加参数都会传回监听器回调
            this.$emit('add-todo',this.addName)
            this.addName = ''
        }
    },
    props:['list']
})