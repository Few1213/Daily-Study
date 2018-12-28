<template>
  <el-container class="home">
    <!-- 顶部 -->
    <el-header>
      <div class="logo"></div>
      <div class="content">
        <h1>后台管理系统</h1>
      </div>
      <div class="loginout">
        <el-button type="danger" class="fr" @click="loginout">退出</el-button>
      </div>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside width="200px">
        <!--default-active: 当前激活菜单的 index
          open : 展开指定的 submenu
          close : 收起指定的 submenu
          background-color: 菜单的背景色
          text-color: 菜单的文字颜色
          active-text-color: 当前激活的菜单颜色
          router: 是否使用 vue-router 模式,该模式在激活导航的时候会以 index 作为 path 作为路由跳转
        -->
        <el-menu
          :default-active="$route.path.slice(1)"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
          unique-opened
        >
          <!-- el-submenu 菜单 -->
          <el-submenu :index="list.path" v-for="list in menu" :key="list.id">
            <!-- 具名插槽 -->
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{list.authName}}</span>
            </template>
            <!-- 导航项 -->
            <el-menu-item :index="item.path" v-for="item in list.children" :key="item.id">
              <i class="el-icon-menu"></i>
              <span slot="title">{{item.authName}}</span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 主体内容 -->
      <el-main>
        <!-- 设置子组件的导航出口 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      menu: []
    }
  },
  methods: {
    // 退出框 退出功能
    loginout() {
      this.$confirm('您确定要退出登录吗?', '温馨提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // 退出成功清除 token ,并跳转到 login 页面
          localStorage.removeItem('token')
          this.$router.push('/login')
          this.$message({
            type: 'success',
            message: '退出登录成功!'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          })
        })
    },
    async getList() {
      let res = await this.$axios.get('menus')
      // let { meta: status, data } = res
      if (res.meta.status === 200) {
        this.menu = res.data
      }
    }
  },
  created() {
    this.getList()
  }
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  .el-header {
    display: flex;
    background-color: #b3c1cd;
    .logo {
      width: 180px;
      background: url('../assets/logo.png') no-repeat center;
      background-size: contain;
    }
    .content {
      flex: 1;
      h1 {
        text-align: center;
        line-height: 60px;
        color: #ffffff;
      }
    }
    .loginout {
      width: 180px;
      .el-button {
        margin-top: 10px;
      }
    }
  }
  .el-aside {
    background-color: rgb(84, 92, 100);
    .el-submenu {
      width: 200px;
    }
  }
  .el-main {
    background-color: #999;
  }
}
</style>
