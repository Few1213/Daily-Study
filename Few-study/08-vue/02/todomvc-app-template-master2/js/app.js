(function (window) {
	const vm = new Vue({
		el: '#todoapp',
		data: {
			list: [{
					id: 1,
					name: '聪明可爱仙气的铁蛋',
					completed: false
				},
				{
					id: 2,
					name: '很聪明的狗蛋',
					completed: false
				},
				{
					id: 3,
					name: '傻蛋',
					completed: true
				}
			],
			addName: '',
			clickId: -1
		},
		methods: {
			addTodo() {
				if (this.addName === '') return
				// console.log(this); //
				this.list.unshift({
					id: +new Date(),
					name: this.addName,
					completed: false
				})
				this.addName = ''
			},
			delTodo(id) {
				let idx = this.list.findIndex(item => item.id === id)
				this.list.splice(idx, 1)
			},
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
					localStorage.setItem('todos', JSON.stringify(value))
				},
				deep: true
			}
		},
		created() {
			this.list = JSON.parse(localStorage.getItem('todos')) || []
		}
	});

})(window);
