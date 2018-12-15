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
				if (name === '') return
				this.list.unshift({
					id: +new Date,
					name,
					completed: false
				})
			},
			delTodo(id) {
				// console.log(id);
				
				let idx = this.list.findIndex(item=>item.id===id)
				// console.log(idx);
				this.list.splice(idx, 1)
			},
			clearTodo(){
				this.list = this.list.filter(item=>!item.completed)
			}
		}
	})

})(window);
