<?php 
  include_once '../fn.php';
  isLogin(); 
?>


<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Add new post &laquo; Admin</title>
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
        <h1>写文章</h1>
      </div>

      <!-- 有错误信息时展示 -->
      <!-- <div class="alert alert-danger">
        <strong>错误！</strong>发生XXX错误
      </div> -->

      <form class="row" action="./post/postAdd.php" method="post" enctype="multipart/form-data" >
        <div class="col-md-9">
          <div class="form-group">
            <label for="title">标题</label>
            <input id="title" class="form-control input-lg" name="title" type="text" placeholder="文章标题">
          </div>
          <div class="form-group">
            <label for="content">内容</label>
            <textarea id="content" class="form-control input-lg" name="content" cols="30" rows="10" placeholder="内容" style="display: none; "></textarea>
            <!-- 富文本编辑器容器  -->
            <div id="content-box"></div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="form-group">
            <label for="slug">别名</label>
            <input id="slug" class="form-control" name="slug" type="text" placeholder="slug">
            <p class="help-block">https://zce.me/post/<strong id="strong">slug</strong></p>
          </div>
          <div class="form-group">
            <label for="feature">特色图像</label>
            <!-- show when image chose -->
            <img class="help-block thumbnail" id="img" style="display: none; width: 80px; height:60px;">
            <input id="feature" class="form-control" name="feature" type="file" accept="image/*">
          </div>
          <div class="form-group">
            <label for="category">所属分类</label>
            <select id="category" class="form-control" name="category">
              <option value="1">未分类</option>              
            </select>
          </div>
          <div class="form-group">
            <label for="created">发布时间</label>
            <input id="created" class="form-control" name="created" type="datetime-local">
          </div>
          <div class="form-group">
            <label for="status">状态</label>
            <select id="status" class="form-control" name="status">
              <option value="drafted">草稿</option>              
            </select>
          </div>
          <div class="form-group">
            <button class="btn btn-primary" type="submit">保存</button>
          </div>
        </div>
      </form>
    </div>
  </div>
  
  <!-- 给页面添加标记 -->
  <?php $page = 'post-add' ?>  
  <!-- 引入侧边栏 -->
  <?php include_once './inc/aside.php' ?>

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
  <script src="../assets/vendors/jquery/jquery.js"></script>
  <script src="../assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script src="../assets/vendors/template/template-web.js"></script>
  <script src="../assets/vendors/moment/moment.js"></script>
  <script src="../assets/vendors/wangEditor/wangEditor.js"></script>
  <script>NProgress.done()</script>

  <script>
    //1-在正式添加文章之前， 先把表单准备好  
    // 1. 分类下拉数据填充
    $.ajax({
      url:'./category/cateGet.php',
      dataType: 'json',
      success: function (info) {
        // console.log(info);      
        //渲染
        $('#category').html( template('tmp-cate', {list: info}) );

      }
    })

    // [
    //   0: 'a',
    //   1: 'b',
    //   2: 'c'
    // ]
    
    // 2. 状态下拉数据填充
    //状态的数据  
    var state = {
      drafted: '草稿',
      published: '已发布',
      trashed: '回收站'
    }

    $('#status').html( template('tmp-state', state ))

    // 3. 别名同步
    $('#slug').on('input', function () {
      //将输入框值，同步给strong标签
      $('#strong').text( $(this).val() || 'slug' );
    })

    // 4. 图片本地预览
    $('#feature').on('change', function () {
      //1-获取被选中的文件  
      //files 是原生js的属性； 
      //files 是伪数组  files中存放选中的多个文件，但是我们只需第一个即可 
      var  file = this.files[0];
      //2-获取文件url地址
      var url = URL.createObjectURL(file);
      //3-将url赋值给img的src 
      $('#img').attr('src', url).show();
    })

    // 5. 默认时间设置
    $('#created').val( moment().format('YYYY-MM-DDTHH:mm') );
    
    // 6. 富文本编辑器的使用
    var E = window.wangEditor;
    var editor = new E('#content-box');   
    //将富文本的内容同步到 textarea 
    editor.customConfig.onchange = function (html) {
         $('#content').val(html);
    }
    //配置菜单
    // 自定义菜单配置
    editor.customConfig.menus = [
      'head',  // 标题
      'bold',  // 粗体
      'fontSize',  // 字号
      'fontName',  // 字体
      'foreColor',  // 文字颜色
      'backColor',  // 背景颜色
      'link',  // 插入链接
      'list',  // 列表
      'justify',  // 对齐方式   
      'emoticon',  // 表情
      'image',  // 插入图片
      'table',  // 表格
      'video',  // 插入视频
      'undo',  // 撤销   
  ];
    editor.create(); //创建富文本编辑器

    //

  </script>
</body>
</html>
