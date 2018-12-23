<template>
  <div class="users">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索 -->
    <el-input placeholder="请输入内容" class="input-with-select" v-model="query">
      <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
    </el-input>
    <!-- 主体数据 -->
    <el-table :data="userList" border stripe style="width: 100%">
      <el-table-column prop="username" label="用户名" width="200" align="center"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="200" align="center"></el-table-column>
      <el-table-column prop="mobile" label="电话" width="200" align="center"></el-table-column>
      <el-table-column prop="mg_state" label="用户状态" width="200" align="center">
        <!-- 作用域插槽 -->
        <template slot-scope="scope">
          <!-- <div>{{scope.row.mg_state}}</div> -->
          <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"></el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" circle plain size="small"></el-button>
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
      total: 0
    }
  },
  methods: {
    getList() {
      this.$axios({
        method: 'get',
        baseURL: 'http://localhost:8888/api/private/v1/',
        url: 'users',
        params: {
          query: this.query,
          pagenum: this.currentPage,
          pagesize: this.pageSize
        },
        // 需要设置携带 token 的请求头
        headers: {
          Authorization: localStorage.getItem('token')
        }
      }).then(res => {
        // console.log(res.data.data.total)
        this.userList = res.data.data.users
        this.total = res.data.data.total
      })
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.getList()
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.currentPage = val
      this.getList()
    },
    search() {
      this.getList()
    },
    delUsers(id) {
      // 点击删除按钮后弹出对话框确认是否删除
      // console.log(id)
      this.$confirm('你确定要删除吗?', '温馨提示', {
        type: 'warning'
      }).then(() => {
        this.$axios({
          method: 'delete',
          url: `http://localhost:8888/api/private/v1/users/${id}`,
          headers: {
            Authorization: localStorage.getItem('token')
          }
        })
          .then(res => {
            // 删除成功后要做的事情
            // console.log(res.data)
            if (this.getList.length <= 1 && this.currentPage > 1) {
              this.currentPage--
            }
            this.$message.success('删除成功')
            this.getList()
          })
          .catch(() => {
            this.$message.error('删除失败')
          })
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
