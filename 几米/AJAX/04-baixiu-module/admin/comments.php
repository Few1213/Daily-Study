<?php 
  include_once '../fn.php';
  isLogin(); 
?>

<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>Comments &laquo; Admin</title>
  <link rel="stylesheet" href="../assets/vendors/bootstrap/css/bootstrap.css">
  <link rel="stylesheet" href="../assets/vendors/font-awesome/css/font-awesome.css">
  <link rel="stylesheet" href="../assets/vendors/nprogress/nprogress.css">
  <link rel="stylesheet" href="../assets/css/admin.css">
  <link rel="stylesheet" href="../assets/vendors/pagination/pagination.css">
  <script src="../assets/vendors/nprogress/nprogress.js"></script>
</head>
<body data-id=100 >
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
        <h1>所有评论</h1>
      </div>
      <!-- 有错误信息时展示 -->
      <!-- <div class="alert alert-danger">
        <strong>错误！</strong>发生XXX错误
      </div> -->
      <div class="page-action">
        <!-- show when multiple checked -->
        <div class="btn-batch pull-left" style="display: none">
          <button class="btn btn-info btn-sm btn-approveds">批量批准</button>
          <!-- <button class="btn btn-warning btn-sm">批量拒绝</button> -->
          <button class="btn btn-danger btn-sm btn-dels">批量删除</button>
        </div>
        <!-- 分页容器 -->
        <div class="page-box pull-right"></div>
      </div>
      <table class="table table-striped table-bordered table-hover">
        <thead>
          <tr>
            <th class="text-center" width="40"><input class="th-chk" type="checkbox"></th>
            <th>作者</th>
            <th>评论</th>
            <th>评论在</th>
            <th>提交于</th>
            <th>状态</th>
            <th class="text-center" width="100">操作</th>
          </tr>
        </thead >
        <tbody>
          <tr>
            <td class="text-center"><input type="checkbox"></td>
            <td>大大</td>
            <td>楼主好人，顶一个</td>
            <td>《Hello world》</td>
            <td>2016/10/07</td>
            <td>未批准</td>
            <td class="text-center">
              <a href="post-add.html" class="btn btn-info btn-xs">批准</a>
              <a href="javascript:;" class="btn btn-danger btn-xs">删除</a>
            </td>
          </tr>         
        </tbody>
      </table>
    </div>
  </div>
  
  <!-- 给页面添加标记 -->
  <?php $page = 'comments' ?>
  <!-- 引入侧边栏 -->
  <?php include_once './inc/aside.php' ?>


    <!-- 模版 -->
    <script type="text/template" id="tmp">
      {{ each list v i }}
        <tr>
            <td class="text-center" data-id={{v.id}} ><input  class="tb-chk" type="checkbox" ></td>
            <td>{{ v.author }}</td>
            <td>{{ v.content.substr(0, 20) + '...' }}</td>
            <td>《{{ v.title }}》</td>
            <td>{{ v.created }}</td>
            <td>{{ state[v.status] }}</td>
            <td class="text-right" data-id={{v.id}} >
              {{ if v.status == 'held' }}
                <a href="javascript:;" class="btn btn-info btn-xs btn-approved">批准</a>
              {{ /if }}
              <a href="javascript:;" class="btn btn-danger btn-xs btn-del">删除</a>
            </td>
          </tr>           
      {{ /each }}
    </script>


  <script src="../assets/vendors/jquery/jquery.js"></script>
  <script src="../assets/vendors/bootstrap/js/bootstrap.js"></script>
  <script src="../assets/vendors/template/template-web.js"></script>
  <script src="../assets/vendors/pagination/jquery.pagination.js"></script>
  <script>NProgress.done()</script>

  <script>
    //评论状态
    //待审核（held）/ 准许（approved）/ 拒绝（rejected）/ 回收站（trashed）

    var state = {
      held: '待审核',
      approved: '准许',
      rejected: '拒绝',
      trashed: '回收站'
    }

    var  currentPage = 1; 

    // state['held'];
    //1-封装 请求指定页面数据并渲染方法
    function render(page) {
      $.ajax({
        url: './comment/comGet.php',
        data: {
          page: page || 1,
          pageSize: 10
        },
        dataType: 'json',
        success: function (info) {
          console.log(info);  //数组
          // 包装
          var obj = {
            list: info,
            state: state
          }      
          //渲染
          $('tbody').html(template('tmp', obj));

          //重置批量和全选 
          $('.btn-batch').hide();
          $('.th-chk').prop('checked', false);
        }
      })
    }
    //2-获取第一屏的数据，渲染在页面中
    render();

    //3-封装一个动态生成分页标签的方法 
    //根据后台返回评论的总数，生成分页标签 
    function setPage(page) {
      //1-获取有效评论的总数
      $.ajax({
        url: './comment/comTotal.php',
        dataType: 'json',
        success: function (info) {
          console.log(info);          
          //2-根据总数，生成分页标签
          $('.page-box').pagination(info.total, {
            prev_text: '上一页',
            next_text: '下一页',
            num_display_entries: 5, //连续主体的个数 
            num_edge_entries: 1,  //首尾的个数
            current_page: page - 1 || 0, //当前页
            load_first_page: false, 
            callback: function (index) { //回调函数 
                //根据index执行，请求对应页码 的数据并渲染 
                render(index + 1); //index 是索引 比页码小1 

                //记录最新点击当前页面页码
                currentPage = index + 1;
            }
          });

        }
      })
    }
    //4-生成分页
    setPage();

    //5-批准
    // 1-前端点击批准按钮， 获取当前数据对应id， 将id传递给后台
    // 2-后台获取id，根据id更新数据库中对应的数据 
    // 3-批准完成后，页面重新渲染，看到批准效果
    // $('.btn-approved').click(function () {
    //   alert(1);
    // })
    //用普通的事件，给批准按钮没有绑定上事件，为什么? 
    //给动态生成元素 用事件委托来绑定事件 
    $('tbody').on('click', '.btn-approved', function () {
      //获取数据id
      var id = $(this).parent().attr('data-id');
      //将id传递给后台 ,进行批准
      $.ajax({
        url: './comment/comApproved.php',
        data: {id: id}, 
        success: function (info) {
          console.log(info);
          //页面重新渲染当前页 
          render(currentPage);          
        }
      })  

    })



    //6-删除 
    // 1-点击删除按钮，获取当前数据id, 传递给后台
    // 2-后台会根据id进行删除
    // 3-删除完成后，重新渲染当前页，看到删除的效果
    $('tbody').on('click', '.btn-del', function () {
      //获取id 
      var id = $(this).parent().attr('data-id');
      //根据id进行删除
      $.ajax({
        url: './comment/comDel.php',
        data: {id: id},
        dataType: 'json',
        success: function (info) {
          console.log(info);
          //先根据后台返回的数据总数，计算出数据库中数据的最大页码
          var maxPage = Math.ceil(info.total / 10); 
          //判断当前页是否越界 
          if(currentPage > maxPage) {
            currentPage = maxPage;
          }
          //重新渲染当前页   
          render(currentPage); 
          //重新生成分页标签 (删除数据，总数会越来越少，根据新的数据总数重新生成分页标签)
          setPage(currentPage);        
        }
      })
    })


    //7-全选功能
    //  1- 下面所有小复选框的选中状态 和全选按钮一致 
    //  2- 如果全选按钮选中，则批量按钮显示 否则隐藏 
    $('.th-chk').change(function () {
      var value = $(this).prop('checked');    //获取全选按钮选中状态
      $('.tb-chk').prop('checked', value); //设置给小复选框
      //如果全选按钮选中，则批量按钮显示 否则隐藏 
      if(value) {
        //批量按钮显示
        $('.btn-batch').show();
      } else {
        $('.btn-batch').hide();
      }
    });

    // 8-多选功能
    // 1-小复选框 全部选中，则全选按钮选中，否则取消 
    // 2-如果有小复选框被选中，批量按钮显示，否则隐藏
    $('tbody').on('change', '.tb-chk', function () {
      //-小复选框 全部选中  选中的复选框个数 == 当前页面所有的小复选框个数 
      // console.log( $('.tb-chk').length );
      // console.log( $('.tb-chk:checked').length );
      if(  $('.tb-chk').length == $('.tb-chk:checked').length )  {
        //全选按钮选中
        $('.th-chk').prop('checked', true);
      } else {
        //全选按钮选中
        $('.th-chk').prop('checked', false);
      }

      //如果有小复选框被选中，批量按钮显示，否则隐藏
      if(  $('.tb-chk:checked').length  > 0 ) {
        //显示
        $('.btn-batch').show();
      } else {
        //隐藏
        $('.btn-batch').hide();
      }
      
    })


    //9-获取被选中数据id（批量批准和批量删除前端都需要获取被选中数据id）
    function getId() {
      var ids = [];//存放获取多个id 
      // console.log( $('.tb-chk:checked'));      
      $('.tb-chk:checked').each(function(index, ele) {
        ids.push( $(ele).parent().attr('data-id') );
      })
      //console.log(ids.join()); //字符串形式的多个id  32,33,34,35      
      return ids.join();       //返回获取所有id [32,33,34,35]
    }

   //10-批量批准
   //1-点击批量批准按钮，获取被选中的数据id, 传递给后台
   //2-后台根据id进行批量批准
   //3-批准完成后， 重新渲染当前页

   $('.btn-approveds').click(function () {
     var ids = getId(); //获取被选中数据id 
     //传递给后台进行删除
     $.ajax({
       url:'./comment/comApproved.php',
       data: {id: ids},
       success: function (info) {
         console.log(info);
         //重新渲染当前页 
         render(currentPage);         
       }
     })
   })

   //11-批量删除
   //1-点击批量删除按钮，获取被选中的数据id, 传递给后台
   //2-后台根据id进行批量删除
   //3-删除完成后， 重新渲染当前页，重新生成分页标签
   $('.btn-dels').click(function () {
     //获取被选中数据id
     var ids = getId();
     //将id传递给后台进行删除
     $.ajax({
       url: './comment/comDel.php', 
       data: {id: ids}, 
       dataType: 'json', 
       success: function (info) {
         console.log(info);
         //先判断currentPage值是否大于 数据库中数据的最大的页码 
         var maxPage = Math.ceil( info.total / 10);
        
        if(currentPage > maxPage) {
          currentPage = maxPage;
        }
        
         //重新渲染当前页
         render(currentPage);
         //重新生成分页标签
         setPage(currentPage);   

       }

     })
   })


   





    

  </script>
</body>
</html>
