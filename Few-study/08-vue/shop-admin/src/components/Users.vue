<template>
  <div class="users">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索 -->
    <el-input
      placeholder="请输入内容"
      class="input-with-select"
      v-model="query"
      @keyup.enter.native="search"
    >
      <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
    </el-input>
    <el-button type="success" plain @click="showAddUser">添加用户</el-button>
    <!-- 主体数据 -->
    <el-table :data="userList" border stripe style="width: 100%">
      <el-table-column prop="username" label="用户名" width="200" align="center"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="200" align="center"></el-table-column>
      <el-table-column prop="mobile" label="电话" width="200" align="center"></el-table-column>
      <el-table-column prop="mg_state" label="用户状态" width="200" align="center">
        <!-- 作用域插槽 -->
        <template slot-scope="scope">
          <!-- <div>{{scope.row.mg_state}}</div> -->
          <el-switch
            v-model="scope.row.mg_state"
            active-color="#13ce66"
            inactive-color="#ff4949"
            @change="changeState(scope.row)"
          ></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            circle
            plain
            size="small"
            @click="showEditDialog(scope.row)"
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            plain
            size="small"
            @click="delUsers(scope.row.id)"
          ></el-button>
          <el-button type="success" icon="el-icon-check" plain size="small">分配角色</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[2, 4, 6, 8]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
      background
    ></el-pagination>
    <!-- 添加用户 -->
    <el-dialog title="添加用户" :visible.sync="addDialogVisible" width="40%">
      <el-form :model="addForm" label-width="80px" ref="addForm" :rules="rules" status-icon>
        <el-form-item label="用户名" prop="username">
          <el-input v-model="addForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="addForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="addForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="addForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="hideAddDialog">取 消</el-button>
        <el-button type="primary" @click="addUser">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 编辑用户 -->
    <el-dialog title="编辑用户" :visible.sync="editDialogVisible" width="40%">
      <el-form :model="editForm" label-width="80px" ref="editForm" :rules="rules" status-icon>
        <el-form-item label="用户名">
          <el-tag type="success">{{editForm.username}}</el-tag>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="editForm.email"></el-input>
        </el-form-item>
        <el-form-item label="手机" prop="mobile">
          <el-input v-model="editForm.mobile"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="hideEditDialog">取 消</el-button>
        <el-button type="primary" @click="updateUser">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userList: [],
      query: '',
      currentPage: 1,
      pageSize: 2,
      total: 0,
      addDialogVisible: false,
      // 添加表单的数据
      addForm: {
        username: '',
        password: '',
        email: '',
        mobile: ''
      },
      editDialogVisible: false,
      editForm: {
        id: '',
        email: '',
        mobile: '',
        username: ''
      },
      // 验证规则
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        email: [
          { type: 'email', message: '请输入合法的邮箱', trigger: 'change' }
        ],
        mobile: [
          {
            pattern: /^1\d{10}$/,
            message: '请输入一个合法的手机号',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    // 获取数据
    getList() {
      this.$axios({
        method: 'get',
        url: 'users',
        params: {
          query: this.query,
          pagenum: this.currentPage,
          pagesize: this.pageSize
        }
      }).then(res => {
        // console.log(res)
        this.userList = res.data.users
        this.total = res.data.total
      })
    },
    // 改变当前页条数
    handleSizeChange(val) {
      this.pageSize = val
      this.getList()
    },
    // 改变当前页
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.currentPage = val
      this.getList()
    },
    // 搜索功能
    search() {
      this.getList()
    },
    // 删除用户
    async delUsers(id) {
      // 点击删除按钮后弹出对话框确认是否删除
      // console.log(id)
      try {
        await this.$confirm('你确定要删除吗?', '温馨提示', {
          type: 'warning'
        })
        let res = await this.$axios({
          method: 'delete',
          url: `users/${id}`
        })

        // 删除成功后要做的事情
        console.log(res)
        if (this.getList.length <= 1 && this.currentPage > 1) {
          this.currentPage--
        }
        this.$message.success('删除成功')
        this.getList()
      } catch (error) {
        this.$message.error('删除失败')
      }
    },
    // 改变状态
    async changeState(row) {
      let res = await this.$axios.put(`users/${row.id}/state/${row.mg_state}`)
      let {
        meta: { status, msg }
      } = res
      if (status !== 200) return
      this.$notify({
        title: '成功',
        message: msg,
        type: 'success',
        duration: 1000
      })
    },
    // 显示添加用户
    showAddUser() {
      this.addDialogVisible = true
    },
    // 隐藏添加用户
    hideAddDialog() {
      this.addDialogVisible = false
      this.$refs.addForm.resetFields()
    },
    // 添加用户
    addUser() {
      // 表单验证
      this.$refs.addForm.validate(async valid => {
        if (!valid) return false
        let res = await this.$axios.post('users', this.addForm)
        let {
          meta: { status, msg }
        } = res
        if (status === 201) {
          // 创建成功 显示消息 渲染最后一页 关闭消息框 清空表单
          this.total++
          this.currentPage = Math.ceil(this.total / this.pageSize)
          this.getList()
          this.$message.success(msg)
        } else {
          this.$message.error(msg)
        }
        this.addDialogVisible = false
        this.$refs.addForm.resetFields()
      })
    },
    showEditDialog(row) {
      this.editDialogVisible = true
      this.editForm.id = row.id
      this.editForm.username = row.username
      this.editForm.email = row.email
      this.editForm.mobile = row.mobile
    },
    hideEditDialog() {
      this.editDialogVisible = false
      this.$refs.editForm.resetFields()
    },
    updateUser() {
      this.$refs.editForm.validate(async valid => {
        if (!valid) {
          this.$notify({
            title: '失败',
            message: '失败',
            type: 'error',
            duration: 1000
          })
          return false
        }
        let res = await this.$axios.put(
          `users/${this.editForm.id}`,
          this.editForm
        )
        let {
          meta: { status, msg }
        } = res
        if (status === 200) {
          this.getList()
          this.$message.success(msg)
        } else {
          this.$message.error(msg)
        }
        this.editDialogVisible = false
        this.$refs.editForm.resetFields()
      })
    }
  },
  created() {
    this.getList()
  }
}
</script>

<style lang="less" scoped>
.users {
  .el-breadcrumb {
    background-color: rgb(184, 189, 199);
    padding: 10px;
  }
  .el-input {
    width: 300px;
    margin: 5px 0;
  }
}
</style>
