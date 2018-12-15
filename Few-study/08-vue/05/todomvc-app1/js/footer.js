Vue.component('todo-footer', {
	template: `
    <footer class="footer" v-show="isShowFooter">
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
    props: ['list'],
    computed:{
        isShowFooter(){
            return this.list.length > 0
        },
        leftCount(){
            return this.list.filter(item=>!item.completed).length
        },
        isShowClear(){
            return this.list.some(item=>item.completed)
        }
    },
    methods:{
        clearTodo(){
            this.$emit('clear-todo')
        }
    }
})
