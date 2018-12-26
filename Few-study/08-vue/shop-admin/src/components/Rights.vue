<template>
  <div class="rights">
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>权限列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 表格主体数据 -->
    <el-table :data="rightList" style="width: 100%">
      <el-table-column type="index" width="50"></el-table-column>
      <el-table-column prop="authName" label="权限名称" width="180"></el-table-column>
      <el-table-column prop="path" label="路径" width="180"></el-table-column>
      <el-table-column label="层级">
        <template slot-scope="{row:{level}}">
          <span v-if="+level===0">一级</span>
          <span v-else-if="+level===1">二级</span>
          <span v-else>三级</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rightList: []
    }
  },
  methods: {
    // 获取权限列表数据
    async getRightList() {
      let res = await this.$axios.get('rights/list')
      // console.log(res)
      if (res.meta.status === 200) {
        this.rightList = res.data
      }
    }
  },
  created() {
    this.getRightList()
  }
}
</script>

<style lang="less" scoped>
.rights {
  .el-breadcrumb {
    height: 40px;
    line-height: 40px;
    background-color: rgb(209, 214, 224);
    color: aliceblue;
    padding-left: 5px;
  }
}
</style>
