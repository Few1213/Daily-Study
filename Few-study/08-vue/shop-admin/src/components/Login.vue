<template>
  <div class="login">
    <!-- ref 被用来给元素或子组件注册引用信息。引用信息将会注册在父组件的 $refs 对象上。 -->
    <!-- Form 组件提供了表单验证的功能，只需要通过 rules 属性传入约定的验证规则，并将 Form-Item 的 prop 属性设置为需校验的字段名即可 -->
    <el-form ref="form" :model="form" label-width="80px" :rules="rules" status-icon>
      <img src="@/assets/avatar.jpg" alt>
      <el-form-item label="用户名:" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码:" prop="password">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
          @keyup.enter.native="login"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login">登录</el-button>
        <el-button @click="reset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'change' },
          { min: 4, max: 8, message: '长度在 4 到 8 个字符', trigger: 'change' }
        ],
        password: [
          { required: true, message: '请输入用户密码', trigger: 'change' },
          {
            min: 4,
            max: 12,
            message: '长度在 4 到 12 个字符',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    login() {
      // 在这里对输入数据发送请求进行验证
      this.$refs.form.validate(async valid => {
        if (!valid) return false
        // 成功后发送 axios 请求跳转页面
        let res = await this.$axios({
          method: 'post',
          url: 'login',
          data: this.form
        })

        // console.log(res)
        // 解构
        let {
          meta: { status, msg }
        } = res
        if (status === 200) {
          // 登录成功 跳转到首页 并记录下 token 运用 this.$router.push 进行跳转
          let {
            data: { token }
          } = res
          this.$message.success(msg)
          localStorage.setItem('token', token)
          this.$router.push('/home')
        } else {
          this.$message.error(msg)
        }
      })
    },
    reset() {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  height: 100%;
  background-color: #2d434c;
  overflow: hidden;
  .el-form {
    width: 400px;
    padding: 75px 40px 15px;
    margin: 200px auto;
    background-color: #fff;
    border-radius: 20px;
    position: relative;
    img {
      position: absolute;
      left: 50%;
      top: -25%;
      transform: translateX(-50%);
      border-radius: 50%;
      border: 10px solid #ffffff;
    }
  }
}
</style>
