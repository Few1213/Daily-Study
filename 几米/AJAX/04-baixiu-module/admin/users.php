<?php 
  include_once '../fn.php';
  isLogin(); 

  //获取当前用户id 
  $id = $_SESSION['user_id'];
?>


<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Users &laquo; Admin</title>
  <link rel="stylesheet" href="../assets/vendors/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="../assets/vendors/font-awesome/css/font-awesome.css">
  <link rel="stylesheet" href="../assets/vendors/nprogress/nprogress.css">
  <link rel="stylesheet" href="../assets/css/admin.css">
  <script src="../assets/vendors/nprogress/nprogress.js"></script>
</head>
<body data-id=<?php echo $id ?> >
  <script>NProgress.start()</script>

  <div class="main">
    <nav class="navbar">
      <button class="btn btn-default navbar-btn fa fa-bars"></button>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="profile.html"><i class="fa fa-user"></i>个人中心</a></li>
        <li><a href="login.html"><i class="fa fa-sign-out"></i>退出</a></li>
      </ul>
    </nav>
    <div class="container-fluid">
      <div class="page-title">
        <h1>用户</h1>
      </div>
      <!-- 有错误信息时展示 -->
      <!-- <div class="alert alert-danger">
        <strong>错误！</strong>发生XXX错误
      </div> -->
      <div class="row">
        <div class="col-md-4">
          <form>
            <h2>添加新用户</h2>
            <div class="form-group">
              <label for="email">邮箱</label>
              <input id="email" class="form-control" name="email" type="email" placeholder="邮箱">
            </div>
            <div class="form-group">
              <label for="slug">别名</label>
              <input id="slug" class="form-control" name="slug" type="text" placeholder="slug">
              <p class="help-block">https://zce.me/author/<strong>slug</strong></p>
            </div>
            <div class="form-group">
              <label for="nickname">昵称</label>
              <input id="nickname" class="form-control" name="nickname" type="text" placeholder="昵称">
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input id="password" class="form-control" name="password" type="text" placeholder="密码">
            </div>
            <div class="form-group">              
              <input class="btn btn-primary" type="button" value="添加">
            </div>
          </form>
        </div>
        <div class="col-md-8">
          <div class="page-action">
            <!-- show when multiple checked -->
            <a class="btn btn-danger btn-sm" href="javascript:;" style="display: none">批量删除</a>
          </div>
          <table class="table table-striped table-bordered table-hover">
            <thead>
               <tr>
                <th class="text-center" width="40"><input type="checkbox"></th>
                <th class="text-center" width="80">头像</th>
                <th>邮箱</th>
                <th>别名</th>
                <th>昵称</th>
                <th>状态</th>
                <th class="text-center" width="100">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center"><input type="checkbox"></td>
                <td class="text-center"><img class="avatar" src="../assets/img/default.png"></td>
                <td>i@zce.me</td>
                <td>zce</td>
                <td>汪磊</td>
                <td>激活</td>
                <td class="text-center">
                  <a href="post-add.php" class="btn btn-default btn-xs">编辑</a>
                  <a href="javascript:;" class="btn btn-danger btn-xs">删除</a>
                </td>
              </tr>             
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  
  <!-- 给页面添加标记 -->
  <?php $page = 'users' ?> 
  <!-- 引入侧边栏 -->
  <?php include_once './inc/aside.php' ?>

  <!-- 准备模版 -->
  <script type="text/template" id="tmp">
    {{ each list v i }}
      <tr>
        <td class="text-center" data-id={{v.id}}><input type="checkbox"></td>
        <td class="text-center"><img class="avatar" src="../{{ v.avatar }}"></td>
        <td>{{ v.email }}</td>
        <td>{{ v.slug }}</td>
        <td>{{ v.nickname }}</td>
        <td>激活</td>
        <td class="text-left" data-id={{v.id}}>
          <a href="post-add.php" class="btn btn-default btn-xs">编辑</a>
          {{ if v.id != uid }}
          <a href="javascript:;" class="btn btn-danger btn-xs">删除</a>
          {{ /if }}
        </td>
      </tr>             
    {{ /each }}
  </script>

  <script src="../assets/vendors/jquery/jquery.js"></script>
  <script src="../assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script src="../assets/vendors/template/template-web.js"></script>
  <script>NProgress.done()</script>
  <script>

    var uid = $('body').attr('data-id');
    console.log(uid);
    
    //获取数据并渲染方法
    function render() {
      $.ajax({
        url: './user/userGet.php',
        dataType: 'json',
        success: function (info) {
          console.log(info);      
          $('tbody').html(template('tmp', {list: info, uid: uid }));    
        }
      })
    }

    render();

    //优化点：用户不能删除自己 
    //如果当前渲染的数据 和 登录的用户 是同一个id， 就不显示删除按钮； 
  </script>
</body>
</html>
