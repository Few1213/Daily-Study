/*
  开发todomvc功能
	1. 使用vue进行开发
		1.1 引入vue
		1.2 初始化vue的实例
		1.3 提供todos的基本数据
	2. 根据list的数据，动态渲染任务的列表
		1. 使用v-for指令遍历list的数据  ，记得指定key
		2. 控制每个li的内容，动态渲染  {{item.name}}
		3. 控制每个li的 completed类， 如果item.completed为true, 应该要有completed类，  v-bind:class
			:class="{completed: item.completed}"
		4. checkbox默认全选中，控制checkbox的选中状态， checkbox是一个表单元素，所以v-model实现双向数据绑定
			惊喜：因为是双向绑定，当我们选中checkbox，任务状态已经改成完成了
	三. todomvc的添加功能
		1. 给input框注册keyup事件，当回车的时候，需要添加任务
		2. 获取到输入的内容
		3. 添加到list列表中
		4. 清空文本框的内容
	四： 删除功能
		1. 给删除按钮注册点击事件
		2. 提供一个对应的删除的方法
		3. 注册事件的时候，需要把删除的任务的id传递过去
		4. 删除id对应的那项任务（id对象的那项数据）
	五：修改功能
		1. 双击某个任务
		2. 让这个li 有editing类
		3. 显示原来的内容
		4. 还需要给修改的input注册keyup事件，回车的时候触发
		5. 把edting的类移除掉
*/
(function (window) {
	const vm = new Vue({
		el: '#todoapp',
		data: {
			list: [],
			addName: '',
			clickId: -1
		},
		methods: {
			addTodo(e) {
				let info = {
					id: +new Date(),
					name: this.addName,
					completed: false
				}
				this.list.unshift(info)
				this.addName = ''
			},
			delTodo(id) {
				// console.log(id);
				let idx = this.list.findIndex(item => item.id == id)
				this.list.splice(idx, 1)

			},
			showEdit(id) {
				// console.log(id);
				this.clickId = id
			},
			updateTodo(){
				this.clickId= -1
			},
			clearTodo(){
				this.list = this.list.filter(item=>!item.completed)
			}
		},
		computed:{
			leftCount(){
				return this.list.filter(item=>!item.completed).length
			},
			isShowfooter(){
				return this.list.length>0
			},
			isShowClear(){
				// completed : false 未完成
				return this.list.some(item=>item.completed)
			}
		},
		watch:{
			list:{
				// 监听的函数
				handler:function (value,oldValue) { 
					// console.log(111);
					
					localStorage.setItem('todoList',JSON.stringify(value))
				 },
				 // 是否深度监听
				 deep: true,
			}
		},
		created() {
			this.list = JSON.parse(localStorage.getItem('todoList')) || []
		}
	})
	window.vm = vm

})(window);
