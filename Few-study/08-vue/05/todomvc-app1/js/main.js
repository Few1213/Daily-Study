Vue.component('todo-main',{
    template:`
    <section class="main">
        <input id="toggle-all" class="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul class="todo-list">
            <li :class="{completed:item.completed,editing:item.id===clickId}" v-for="item in list" :key="item.id">
                <div class="view">
                    <input class="toggle" type="checkbox" v-model="item.completed">
                    <label @dblclick="isShowEdit(item.id,item.name)">{{item.name}}</label>
                    <button class="destroy" @click="delTodo(item.id)"></button>
                </div>
                <input class="edit" value="Create a TodoMVC template" v-model="item.name" @keyup.enter="updateTodo(item.id,item.name)">
            </li>
        </ul>
    </section>
    `,
    data(){
        return {
            clickId: -1
        }
    },
    methods:{
        delTodo(id){
            this.$emit('del-todo',id)
        },
        isShowEdit(id){
            this.clickId = id
        },
        updateTodo(id,name){
            this.$emit('update-todo',id,name)
            this.clickId = -1
        }
    },
    props:['list']
})