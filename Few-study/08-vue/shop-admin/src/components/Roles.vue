<template>
  <div class="roles">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button plain type="success" @click="showAddDialog">添加角色</el-button>
    <!-- 表格主体 -->
    <el-table :data="rolesList" style="width: 100%">
      <el-table-column type="expand">
        <template slot-scope="{row}">
          <!-- 第一层循环 渲染一级分类 -->
          <el-row v-for="l1 in row.children" :key="l1.id" class="l1">
            <el-col :span="4">
              <el-tag closable @close="delRight(row,l1.id)">{{l1.authName}}</el-tag>
              <i class="el-icon-arrow-right"></i>
            </el-col>
            <!-- 第二层循环 渲染二级分类 -->
            <el-col :span="20">
              <el-row v-for="l2 in l1.children" :key="l2.id" class="l2">
                <el-col :span="4">
                  <el-tag closable type="success" @close="delRight(row,l2.id)">{{l2.authName}}</el-tag>
                  <i class="el-icon-arrow-right"></i>
                </el-col>
                <el-col :span="20">
                  <!-- 第三层循环 渲染三级分类 -->
                  <span v-for="l3 in l2.children" :key="l3.id" class="l3">
                    <el-tag closable type="warning" @close="delRight(row,l3.id)">{{l3.authName}}</el-tag>
                  </span>
                </el-col>
              </el-row>
            </el-col>
          </el-row>
        </template>
      </el-table-column>
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="roleName" label="角色名称" width="180"></el-table-column>
      <el-table-column prop="roleDesc" label="描述" width="180"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="{row}">
          <el-button
            type="primary"
            icon="el-icon-edit"
            circle
            plain
            size="small"
            @click="showEditDialog(row)"
          ></el-button>
          <el-button
            type="danger"
            icon="el-icon-delete"
            circle
            plain
            size="small"
            @click="delAssigin(row)"
          ></el-button>
          <el-button
            type="success"
            icon="el-icon-edit"
            plain
            size="small"
            @click="showAssignDialogVisible(row)"
          >分配权限</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分配权限的对话框 -->
    <el-dialog title="角色权限" :visible.sync="assignDialogVisible" width="40%">
      <el-tree
        :data="data"
        :props="defaultProps"
        show-checkbox
        default-expand-all
        node-key="id"
        ref="tree"
      ></el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="assignDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="updateAssignDialogVisible">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 编辑角色的对话框 -->
    <el-dialog title="修改角色" :visible.sync="editDialog" width="40%">
      <el-form ref="editForm" :model="editForm" label-width="80px" :rules="rules">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="editForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="editForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editDialog = false">取 消</el-button>
        <el-button type="primary" @click="updateEditDialog">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 添加角色的对话框 -->
    <el-dialog title="添加角色" :visible.sync="addDialog" width="40%">
      <el-form ref="addForm" :model="addForm" label-width="80px" :rules="rules">
        <el-form-item label="角色名称" prop="roleName">
          <el-input v-model="addForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="角色描述" prop="roleDesc">
          <el-input v-model="addForm.roleDesc"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialog = false">取 消</el-button>
        <el-button type="primary" @click="updateAddDialog">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rolesList: [],
      assignDialogVisible: false,
      roleId: '',
      data: [],
      defaultProps: {
        children: 'children',
        label: 'authName'
      },
      editDialog: false,
      editForm: {
        roleName: '',
        roleDesc: '',
        id: ''
      },
      rules: {
        roleName: [
          { required: true, message: '请输入角色名称', trigger: 'blur' }
        ],
        roleDesc: [
          { required: true, message: '请输入角色描述', trigger: 'blur' }
        ]
      },
      addDialog: false,
      addForm: {
        roleName: '',
        roleDesc: ''
      }
    }
  },
  methods: {
    // 获取主体的表格数据
    async getRolesList() {
      let res = await this.$axios.get('roles')
      // console.log(res)
      let {
        data,
        meta: { status }
      } = res
      if (status === 200) {
        this.rolesList = data
      }
    },
    // 删除角色指定权限
    async delRight(row, id) {
      let res = await this.$axios.delete(`roles/${row.id}/rights/${id}`)
      let {
        data,
        meta: { status }
      } = res
      if (status === 200) {
        row.children = data
        this.$notify({
          title: '成功',
          message: '取消授权成功',
          type: 'success'
        })
      } else {
        this.$notify({
          title: '失败',
          message: '取消授权失败',
          type: 'error'
        })
      }
    },
    async showAssignDialogVisible(row) {
      this.assignDialogVisible = true
      // 在这里获取权限列表并渲染
      this.roleId = row.id
      let res = await this.$axios.get('rights/tree')
      // console.log(res)
      let {
        data,
        meta: { status }
      } = res
      if (status === 200) {
        this.data = data
        // 设置选中状态
      }
      // 获取所有被选中的 id
      let ids = []
      row.children.forEach(l1 => {
        l1.children.forEach(l2 => {
          l2.children.forEach(l3 => {
            ids.push(l3.id)
          })
        })
      })
      // 设置所有被选中的 id
      this.$refs.tree.setCheckedKeys(ids)
    },
    // 更新分配权限
    async updateAssignDialogVisible() {
      // 获取所有被选中的 id 和半选的 id 发送请求更新数据
      let halfCheckedNodes = this.$refs.tree.getHalfCheckedNodes()
      let checkedKeys = this.$refs.tree.getCheckedKeys()
      let rids = halfCheckedNodes.concat(checkedKeys).join()
      let res = await this.$axios.post(`roles/${this.roleId}/rights`, { rids })
      let {
        meta: { status }
      } = res
      if (status === 200) {
        this.getRolesList()
        this.assignDialogVisible = false
        this.$message.success('分配权限成功了')
      } else {
        this.$message.error('分配权限失败了')
      }
      // this.assignDialogVisible = false
    },
    // 显示编辑的对话框
    showEditDialog(row) {
      this.editDialog = true
      // 在显示对话框的时候填充数据
      this.editForm.roleName = row.roleName
      this.editForm.roleDesc = row.roleDesc
      this.editForm.id = row.id
    },
    // 修改角色编辑的对话框
    async updateEditDialog() {
      let { id, roleName, roleDesc } = this.editForm
      let res = await this.$axios.put(`roles/${id}`, {
        roleName,
        roleDesc
      })
      if (res.meta.status === 200) {
        this.$message.success('修改成功')
        this.editDialog = false
      }
    },
    // 显示添加角色的对话框
    showAddDialog() {
      this.addDialog = true
    },
    // 点击确定添加角色
    updateAddDialog() {
      this.$refs.addForm.validate(async valid => {
        if (!valid) return false
        let { roleName, roleDesc } = this.addForm
        let res = await this.$axios.post('roles', {
          roleName,
          roleDesc
        })
        if (res.meta.status === 201) {
          this.$message.success('添加成功')
          this.$refs.addForm.resetFields()
        }
        this.addDialog = false
      })
    },
    // 删除角色
    async delAssigin(row) {
      try {
        await this.$confirm(
          '此操作将永久删除该用户, 是否继续?',
          '温馨提示提示',
          {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }
        )
        let res = await this.$axios.delete(`roles/${row.id}`)
        if (res.meta.status === 200) {
          this.getRolesList()
          this.$message({
            type: 'success',
            message: '删除成功!'
          })
        }
      } catch (error) {
        this.$message.error('取消删除')
      }
    }
  },
  created() {
    this.getRolesList()
  }
}
</script>

<style lang="less" scoped>
.roles {
  .el-breadcrumb {
    height: 40px;
    line-height: 40px;
    background-color: rgb(209, 214, 224);
    color: aliceblue;
    padding-left: 5px;
  }
  .l1 {
    border-bottom: 1px dotted #ccc;
    padding: 10px 0;
  }

  .l2 {
    margin-bottom: 5px;
  }

  .l3 {
    margin-right: 5px;
    margin-bottom: 5px;
  }
}
</style>
