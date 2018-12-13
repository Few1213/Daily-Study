(function (window) {


	// Your starting point. Enjoy the ride!

	// 动态的渲染列表
	const vm = new Vue({
		el: '#todoapp',
		data: {
			// list 存放数据 completed代表完成 false 代表未完成
			list: [],
			addName: '',
			clickId: -1
		},
		methods: {
			// 删除功能
			delTodo(id) {
				// console.log(id);
				// 根据 id 查询到所要删除的 id 并进行删除
				let idx = this.list.findIndex(item => item.id == id)
				this.list.splice(idx, 1)
			},
			//添加功能
			addTodo() {
				if (this.addName == '') return
				this.list.unshift({
					id: +new Date(),
					name: this.addName,
					completed: false
				})
				this.addName = ''
			},
			// 修改功能
			showTodo(id) {
				this.clickId = id
			},
			updateTodo() {
				this.clickId = -1
			},
			clearTodo() {
				this.list = this.list.filter(item => !item.completed)
			}
		},
		// 计算属性
		computed: {
			isShowFooter() {
				return this.list.length > 0
			},
			leftCount() {
				return this.list.filter(item => !item.completed).length
			},
			isShowClear() {
				return this.list.some(item => item.completed)
			}
		},
		watch: {
			list: {
				handler: function (value) {
					localStorage.setItem('todolists',JSON.stringify(value))
				},
				deep: true
			}
		},
		created(){
			this.list = JSON.parse(localStorage.getItem('todolists')) ||[]
		}
	});

})(window);
