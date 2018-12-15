(function (window) {
	const vm = new Vue({
		el: '#todoapp',
		data: {
			list: [{
					id: 1,
					name: '做热舞',
					completed: false
				},
				{
					id: 2,
					name: '接任务',
					completed: true
				},
				{
					id: 3,
					name: '放弃任务',
					completed: false
				}
			]
		},
		methods: {
			addTodo(name) {
				if(name==='')return
				// 在这里获取组件传回来的 name 
				this.list.unshift({
					id: +new Date,
					name,
					completed: false
				})
			},
			delTodo(id) {
				let idx = this.list.findIndex(item => item.id === id)
				this.list.splice(idx, 1)
			},
			updateTodo(id,name){
				let idx = this.list.findIndex(item => item.id === id)
				this.list[idx].name = name
			},
			clearTodo(){
				this.list = this.list.filter(item=>!item.completed)
			}
		}
	})

})(window);
