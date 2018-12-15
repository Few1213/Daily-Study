Vue.component('todo-footer',{
    template:`
    <footer class="footer" v-show="isShowfooter">
        <span class="todo-count"><strong>{{leftCount}}</strong> item left</span>
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
        <button class="clear-completed" v-show="isShowClear" @click="clearTodo">Clear completed</button>
    </footer>
    `,
    props:['list'],
    computed:{
        isShowfooter(){
            return this.list.length > 0
        },
        isShowClear(){
            return this.list.some(item=>item.completed)
        },
        leftCount(){
            return this.list.filter(item=>!item.completed).length
        }
    },
    methods:{
        clearTodo(){
            this.$emit('clear')
        }
    }
})