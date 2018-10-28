<?php 
  include_once '../fn.php';
  isLogin(); 
?>


<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Posts &laquo; Admin</title>
  <link rel="stylesheet" href="../assets/vendors/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="../assets/vendors/font-awesome/css/font-awesome.css">
  <link rel="stylesheet" href="../assets/vendors/nprogress/nprogress.css">
  <link rel="stylesheet" href="../assets/css/admin.css">
  <link rel="stylesheet" href="../assets/vendors/pagination/pagination.css">
  <script src="../assets/vendors/nprogress/nprogress.js"></script>
  <style>
    .page-box a , 
    .page-box span {
      user-select: none;
    }
  </style>
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
        <h1>所有文章</h1>
        <a href="post-add.html" class="btn btn-primary btn-xs">写文章</a>
      </div>
      <!-- 有错误信息时展示 -->
      <!-- <div class="alert alert-danger">
        <strong>错误！</strong>发生XXX错误
      </div> -->
      <div class="page-action">
        <!-- show when multiple checked -->
        <a class="btn btn-danger btn-sm" href="javascript:;" style="display: none">批量删除</a>
      <!-- 分页容器 -->
      <div class="page-box pull-right"></div>
      </div>
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th class="text-center" width="40"><input type="checkbox"></th>
            <th>标题</th>
            <th>作者</th>
            <th>分类</th>
            <th class="text-center">发表时间</th>
            <th class="text-center">状态</th>
            <th class="text-center" width="100">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="text-center"><input type="checkbox"></td>
            <td>随便一个名称</td>
            <td>小小</td>
            <td>潮科技</td>
            <td class="text-center">2016/10/07</td>
            <td class="text-center">已发布</td>
            <td class="text-center">
              <a href="javascript:;" class="btn btn-default btn-xs">编辑</a>
              <a href="javascript:;" class="btn btn-danger btn-xs">删除</a>
            </td>
          </tr>        
        </tbody>
      </table>
    </div>
  </div>
  <!-- 给页面添加标记 -->
  <?php $page = 'posts' ?> 
  <!-- 引入侧边栏 -->
  <?php include_once './inc/aside.php' ?>
  <!-- 引入模态框 -->
  <?php include_once './inc/edit.php' ?>

  <!-- 模版引擎 -->
  <script type="text/template" id="tmp" >
    {{ each list v i }}
      <tr>
          <td class="text-center" data-id={{v.id}} ><input class="tb-chk" type="checkbox"></td>
          <td>{{ v.title }}</td>
          <td>{{ v.nickname }}</td>
          <td>{{ v.name }}</td>
          <td class="text-center">{{ v.created }}</td>
          <td class="text-center">{{ state[v.status] }}</td>
          <td class="text-center" data-id={{v.id}}>
            <a href="javascript:;" class="btn btn-default btn-xs btn-edit">编辑</a>
            <a href="javascript:;" class="btn btn-danger btn-xs btn-del ">删除</a>
          </td>
        </tr>              
    {{ /each }}
  </script>

   <!-- 准备分类模版 -->
   <script type="text/template" id="tmp-cate">
    {{ each list v i }}
      <option value="{{ v.id }}" > {{ v.name }}</option>       
    {{ /each }}
  </script>

  <!-- 准备状态的模版 -->
  <!-- 在模版中 $data 指定传递给模版对象自身   -->
  <!-- v 当前对象属性的值， k： 当前对象属性的键  -->
  <script type="text/template" id="tmp-state">
    {{ each $data v k }}
      <option value="{{ k }}">{{ v }}</option>  
    {{ /each }}
  </script>
  <!-- <script src="../assets/vendors/jquery/jquery.js"></script>
  <script src="../assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script src="../assets/vendors/template/template-web.js"></script>
  <script src="../assets/vendors/pagination/jquery.pagination.js"></script>
  <script src="../assets/vendors/wangEditor/wangEditor.js"></script>
  <script src="../assets/vendors/moment/moment.js"></script>
  <script src="../assets/vendors/posts.js"></script> -->

  <script>NProgress.done()</script>

  <!-- 引入模块化插件 -->
  <script src="../assets/vendors/require/require.js"></script>
  
  <script>
    //配置路径（整个网站只需配置一次）
    require.config({
      baseUrl: '/study/baixiu/04-baixiu-module/assets/vendors/', //基础路径（绝对路径：从服务器更目录去找 ）
      paths:{ //别名 
        jquery: 'jquery/jquery',
        template: 'template/template-web',
        moment: 'moment/moment',
        wangEditor: 'wangEditor/wangEditor', 
        posts:'posts',
        bootstrap: 'bootstrap/js/bootstrap',
        pagination: 'pagination/jquery.pagination'       
      }, 
      // 处理不支持模块化插件 ，不支持模块化插件不知道自己依赖于谁
      // 给不支持模块化的插件，绑定依赖项
      shim: {
        //别名： 依赖项项
        pagination: {
          deps: ['jquery']
        },
        bootstrap: {
          deps: ['jquery']
        }
      }
    })

    //用ruquire引入插件 
    require(['posts']);
  </script>
</body>
</html>
