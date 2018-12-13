(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	let URL = 'http://localhost:3000/todos'
	const vm = new Vue({
		el: '#todoapp',
		// 数据
		data: {
			list: [],
			addName: '',
			clickId: -1
		},
		// 方法
		methods: {
			getData() {
				axios({
					method: 'get',
					url: `http://localhost:3000/todos?_sort=id&_order=desc`
				}).then(res => {
					this.list = res.data
					// console.log(this.list);
				}).catch(err => console.log(arr))
			},
			// 添加功能
			addTodo() {
				if (this.addName === '') return
				axios({
					method: 'post',
					url: URL,
					data: {
						name: this.addName,
						completed: false
					}
				}).then(res => {
					this.getData()
					this.addName = ''
				}).catch(err => console.log(err))
			},
			// 删除功能
			delTodo(id) {
				axios({
					method: 'delete',
					url: `http://localhost:3000/todos/${id}`
				}).then(res => {
					this.getData()
				}).catch(err => console.log(err))
			},
			changeTodo(id, completed) {
				axios({
					method: 'patch',
					url: `http://localhost:3000/todos/${id}`,
					data: {
						completed
					}
				}).then(res => {
					this.getData()
				})
			},
			isShowEdit(id) {
				this.clickId = id
			},
			updateTodo(id, name) {
				axios({
					method: 'patch',
					url: `http://localhost:3000/todos/${id}`,
					data: {
						name
					}
				}).then(res => {
					this.getData()
					this.clickId = -1
				})
			},
			clearTodo(){
				this.list.filter(item=>item.completed).forEach(item=>{
					this.delTodo(item.id)
				})
			}
		},
		computed: {
			isShowFooter() {
				return this.list.length > 0
			},
			leftCount(){
				return this.list.filter(item=>!item.completed).length
			},
			isShowClear(){
				return this.list.some(item=>item.completed)
			}
		},
		// 创建之后
		created() {
			this.getData()
		}
	})



	window.vm = vm
})(window);
