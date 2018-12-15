(function (window) {

	const vm = new Vue({
		el:'#todoapp',
		data:{
			list:[
				{id: 1, name: '铁蛋',completed: false},
				{id: 2, name: '狗蛋',completed: false},
				{id: 3, name: '傻蛋',completed: true},
				{id: 4, name: '笨蛋',completed: false}
			]
		},
		methods:{
			addTodo(name){
				// console.log(name);
				if(name==='')return
				this.list.unshift({
					id: +new Date,
					name,
					completed: false
				})
			},
			delTodo(id){
				let idx = this.list.findIndex(item=>item.id===id)
				this.list.splice(idx, 1)
			},
			clearTodo(){
				this.list = this.list.filter(item=>!item.completed)
			}
		}
	})
})(window);
