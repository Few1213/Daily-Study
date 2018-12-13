(function (window) {
	let URL = 'http://localhost:3000/todos'
	const vm = new Vue({
		el: '#todoapp',
		data: {
			list: [],
			addName: '',
			clickId: -1
		},
		methods: {
			// 获取列表
			getData() {
				axios({
					method: 'get',
					url: `http://localhost:3000/todos?_sort=id&_order=desc`
				}).then(res => {
					this.list = res.data
				})
			},
			// 添加数据
			addTodo() {
				if(this.addName==='')return
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
				})
			},
			// 删除数据
			delTodo(id) {
				axios({
					method: 'delete',
					url: `http://localhost:3000/todos/${id}`
				}).then(res => {
					// console.log(res);	
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
			changeShow(id, completed) {
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
		created() {
			this.getData()
		}

	})

	window.vm = vm
})(window);
