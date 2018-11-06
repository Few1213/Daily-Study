<?php 

  //在$_POST不为空是，获取用户名和密码进行验证
  include_once '../fn.php';

  if(!empty($_POST)) {
      // echo '<pre>';
      // print_r($_POST);
      // echo '</pre>';
      //1-获取邮箱和密码
      $email = $_POST['email'];
      $pwd = $_POST['password'];
      //1-获取邮箱和密码
      //2-判断数据是否为空 ， 如果不为空继续 
      //3-根据用户名去查询对应密码， 如果查到密码则继续， 
      // 如果没有查询到密码，说明用户名不存在
      //4- 对比 查询密码 和用户输入的密码是否一致 
        // 一致： 跳转到首页  成功
        // 不一致： 重新登录  失败 

      if(empty($email) || empty($pwd)) {
        $msg = '用户名或密码为空';
      } else {
        //根据用户名去查询对应密码
        $sql = "select * from users where email = '$email'";
        //执行
        $data = my_query($sql);

        if(empty($data)) {
          $msg = '用户名不存在';
        } else {
          //用户名存在
          $data = $data[0];
          //对比 查询密码 和用户输入的密码是否一致 
          if($pwd === $data['password']) {

            //登录成功
            //给登录成功的用户添加标记  
            session_start();
            //在服务器中记录用户id 
            $_SESSION['user_id'] = $data['id'];

            //跳转到首页
            header('location: ./index1.php');
          } else {
            //密码错误
            $msg = '密码错误';
          }
        }
        
        // echo '<pre>';
        // print_r($data);
        // echo '</pre>';
      }



  }
?>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Sign in &laquo; Admin</title>
  <link rel="stylesheet" href="../assets/vendors/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="../assets/css/admin.css">
</head>
<body>
  <div class="login">
    <!-- action为空是 表单默认提交给当前页面 -->
    <form class="login-wrap" action="" method="post">
      <img class="avatar" src="../assets/img/default.png">
      <!-- 有错误信息时展示 -->
      <?php if(!empty($msg)) { ?>
        <div class="alert alert-danger">
          <strong>错误！</strong> <?php echo $msg ?>
        </div>
      <?php } ?>

      <div class="form-group">
        <label for="email" class="sr-only">邮箱</label>
        <input  id="email" 
                type="email" 
                name="email" 
                class="form-control" 
                placeholder="邮箱" 
                autofocus
                value = "<?php echo  !empty($msg) ? $email : '' ?>"
                >
      </div>
      <div class="form-group">
        <label for="password" class="sr-only">密码</label>
        <input  id="password" 
                type="password" 
                name="password" 
                class="form-control" 
                placeholder="密码">
      </div>     
      <input  class="btn btn-primary btn-block" type="submit" value="登录">
    </form>
  </div>
</body>
</html>
