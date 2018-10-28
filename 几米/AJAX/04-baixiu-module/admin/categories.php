<?php 
  include_once '../fn.php';
  isLogin(); 
?>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Categories &laquo; Admin</title>
  <link rel="stylesheet" href="../assets/vendors/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="../assets/vendors/font-awesome/css/font-awesome.css">
  <link rel="stylesheet" href="../assets/vendors/nprogress/nprogress.css">
  <link rel="stylesheet" href="../assets/css/admin.css">
  <script src="../assets/vendors/nprogress/nprogress.js"></script>
</head>
<body>
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
        <h1>分类目录</h1>
      </div>
      <!-- 有错误信息时展示 -->
      <div class="alert alert-danger" style="display:none;">
        <strong>错误！</strong><span class="msg">aaa</span>
      </div>
      <div class="row">
        <div class="col-md-4">
          <form id="form">
            <h2>添加新分类目录</h2>
            <input type="hidden" name="id" id="id">
            <div class="form-group">
              <label for="name">名称</label>
              <input id="name" class="form-control" name="name" type="text" placeholder="分类名称">
            </div>
            <div class="form-group">
              <label for="slug">别名</label>
              <input id="slug" class="form-control" name="slug" type="text" placeholder="slug">
              <p class="help-block">https://zce.me/category/<strong>slug</strong></p>
            </div>
            <div class="form-group">              
              <input type="button" class="btn btn-primary btn-add" value="添加">
              <input type="button" class="btn btn-primary btn-update" value="修改" style="display:none;">
              <!-- <input type="reset" value="重置"> -->
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
                <th>名称</th>
                <th>Slug</th>
                <th class="text-center" width="100">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="text-center"><input type="checkbox"></td>
                <td>未分类</td>
                <td>uncategorized</td>
                <td class="text-center">
                  <a href="javascript:;" class="btn btn-info btn-xs">编辑</a>
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
  <?php $page = 'categories' ?>
  <!-- 引入侧边栏 -->
  <?php include_once './inc/aside.php' ?>

  <!-- 模版 -->
  <script type="text/template" id="tmp">
    {{ each list v i }}
       <tr>
          <td class="text-center" data-id={{v.id}}><input type="checkbox"></td>
          <td>{{ v.name }}</td>
          <td>{{ v.slug }}</td>
          <td class="text-center" data-id={{v.id}}>
            <a href="javascript:;" class="btn btn-info btn-xs btn-edit">编辑</a>
            <a href="javascript:;" class="btn btn-danger btn-xs btn-del">删除</a>
          </td>
        </tr>                  
    {{ /each }}
  </script>  
  <script src="../assets/vendors/jquery/jquery.js"></script>
  <script src="../assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script src="../assets/vendors/template/template-web.js"></script>
  <script>NProgress.done()</script>
  <script>
    //1- 获取分类的数据 渲染在页面中 
   function render() {
     $.ajax({
       url: './category/cateGet.php',
       dataType: 'json',
       success: function (info) {
         console.log(info);    
         //渲染数据到页面
         $('tbody').html( template('tmp', {list: info}) );     
       }
     })
   }

   render();


   //2-删除分类
   //1-点击删除按钮，获取数据id,传递给后台
   //2-后台根据id进行删除
   //3-删除完成后，重新渲染当前页
   $('tbody').on('click', '.btn-del', function () {
     //获取id
     var id = $(this).parent().attr('data-id');
     //传递给后台
     $.ajax({
       url: './category/cateDel.php',
       data: {id: id}, 
       success: function (info) {
         console.log(info);
         //重新渲染当前页
         render();         
       }
     })
   })


   //3-添加分类思路
   //1-点击添加按钮，获取表单的数据 ，通过ajax提交给服务器
   //2-服务器获取前端提交的数据，插入到数据库中 
   //3-插入数完成后， 重新渲染列表
   $('.btn-add').click(function () {
     //1-获取表单的数据
     //FormData  表单序列化  
     var str = $('#form').serialize();
     //将数据保存到数据库中
     $.ajax({
       url: './category/cateAdd.php',
       data: str,
       beforeSend: function () {
         //验证数据是否合理，如果不合理请求到此结束
         if ($('#name').val().trim().length == 0 || $('#slug').val().trim().length == 0 ) {
           //数据不合理  
           $('.alert').show();
           $('.msg').text('亲，数据不能为空哦！'); 
           return false;
         } else {
           //数据合理
           $('.alert').hide();
         }
       },
       success: function (info) {
         console.log(info);
         //重新渲染列表
         render();        
         //表单DOM提供了reset()方法用于重置表单 
         $('#form')[0].reset(); 
       }
     }) 
   })


   //4-修改分类思路
   //1-点击编辑按钮，获取当前数据id,传递给后台
   //2-获取根据id获取对应的数据，填充到页面
   //3-用户修改完成后，点击保存按钮，将修改后数据更新到数据库中 
   $('tbody').on('click', '.btn-edit', function () {
     //获取id  
     var id = $(this).parent().attr('data-id');
     //获取对应的数据
     $.ajax({
       url: './category/cateGetOne.php',
       data: {id: id}, 
       dataType: 'json',
       success: function (info) {
         console.log(info);    
         //将数据填充到表单中，供用户修改
         $('#name').val(info.name);     
         $('#slug').val(info.slug); 
         //保存id, 会根据id进行更新
         $('#id').val(info.id);    

         //添加按钮隐藏 ，修改按钮出现 
         $('.btn-add').hide();
         $('.btn-update').show();
       }
     })
   })


   //5- 更新数据会数据库
   // -用户修改完成后，点击保存按钮，将修改后数据更新到数据库中 
   $('.btn-update').click(function () {
     //获取表单数据 
     var str = $('#form').serialize();
     //发送给后台进行修改
     $.ajax({
       url: './category/cateUpdate.php',
       data: str, 
       success: function (info) {
         console.log(info);
         //重新渲染当前页
         render();
         //表单重置
         $('#form')[0].reset();       
         //添加按钮出现，修改按钮隐藏
         $('.btn-add').show();
         $('.btn-update').hide();  
       }
     })
   })

  </script>

</body>
</html>
