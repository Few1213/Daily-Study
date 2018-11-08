define( ['template', 'moment', 'wangEditor', 'bootstrap', 'pagination'], 
function (template, moment, wangEditor, bootstrap, pagination) {
    //保存文章状态
    //草稿（drafted）/ 已发布（published）/ 回收站（trashed）
    var state = {
        drafted: '草稿',
        published: '已发布',
        trashed: '回收站'
      }
      var currentPage = 1;
      //   state[drafted]
  
      //1-封装请求指定页码的数据并渲染
      function render(page) {
        $.ajax({
          url: './post/postGet.php',
          data: { 
            page: page || 1, 
            pageSize: 10
          },
          dataType: 'json', 
          success: function (info) {
            console.log(info);       
            //渲染 
            $('tbody').html( template('tmp', {list: info, state: state}) );
  
          }
        })
      }
  
      //2-获取第一屏的数据，渲染在页面中
      render();
  
  
      //3-分页
      //1-获取后台有效的文章的总数 
      //2-根据文章总数 ，利用分页插件生成分页标签 
      function setPage (page) {
        // 获取后台有效的文章的总数 
        $.ajax({
          url: './post/postTotal.php',
          dataType: 'json',
          success: function (info) {
            console.log(info); 
            //使用分页插件生成 分页标签
            $('.page-box').pagination(info.total, {
              prev_text: '上一页',
              next_text: '下一页',
              num_display_entries: 5, //连续主体个数
              num_edge_entries: 1, //首尾的个数
              current_page: page - 1 || 0,
              load_first_page: false, //页面初始化是不支持回调函数
              callback: function (index) {
                console.log(index);
                //请求index指定页面的数据 ，并渲染
                render(index + 1); 
                //记录当前页面变化
                currentPage = index + 1;
              }
            });
          }
        })
      }
  
      //4-生成分页
      setPage();
  
  
      //5-删除
      //1-点击删除 按钮，获取 当前数据id ,传递给后台
      //2-后台根据id进行删除
      //3-删除完成后， 重新渲染当前页， 重新生成分页标签 
  
      $('tbody').on('click', '.btn-del', function () {
        //获取数据id  
        var id = $(this).parent().attr('data-id');
        //后台根据id进行删除
        $.ajax({
          url: './post/postDel.php',
          dataType: 'json',
          data: {id: id},
          success: function (info) {
            console.log(info);
            //判断当前页是否大于数据库最大页码
            var maxPage = Math.ceil( info.total / 10); 
  
            if (currentPage > maxPage) {
              currentPage = maxPage; 
            }
            // 重新渲染当前页
            render(currentPage);
            // 重新生成分页标签 
            setPage(currentPage);
          }
        })
      })
  
  
      //6-准备模态框
      // 填充分类下拉列表
      $.ajax({
        url:'./category/cateGet.php',
        dataType: 'json',
        success: function (info) {
          console.log(info);      
          //渲染
          $('#category').html( template('tmp-cate', {list: info}) );
  
        }
      })
      // 填充状态列表的
      var state = {
        drafted: '草稿',
        published: '已发布',
        trashed: '回收站'
      }
  
      $('#status').html( template('tmp-state', state ))
      // 准备富文本编辑器
      var E = wangEditor;
      var editor = new E('#content-box');
      //富文本和textarea同步  
       editor.customConfig.onchange = function (html) {
         $('#content').val(html);
      }
      editor.create();
  
      // 别名同步
      $('#slug').on('input', function () {
        $('#strong').text($(this).val() || 'slug');
      })
      // 本地预览
      $('#feature').on('change', function () {
        var file = this.files[0]; //获取第一个文件
        var url = URL.createObjectURL(file); //获取url
        $('#img').attr('src', url).show();
      })
      // 时间格式化  moment()
      $('#created').val(moment().format('YYYY-MM-DDTHH:mm'));
  
      //7-编辑01 
      // 1-点击修改按钮，获取当前文章id, 去后台获取对应id的数据， 
      // 把数据填充在模态框中， 供用户修改
      $('tbody').on('click', '.btn-edit', function () {
        //获取id
        var id = $(this).parent().attr('data-id');
        //获取对应数据
        $.ajax({
          url: './post/postGetOne.php',
          data: {id: id}, 
          dataType: 'json',
          success: function (info) {
            console.log(info);
            //模态框显示
            $('.edit-box').show();    
            //将后台返回的数据填充到模态框中
            // 标题
            $('#title').val(info.title);
            // 别名(strong标签页修改)
            $('#slug').val(info.slug);
            $('#strong').text(info.slug);
            // 图像（用img标签显示）
            $('#img').attr('src', '../' + info.feature).show();
  
            // 时间设置(注意格式)
            $('#created').val( moment(info.created).format('YYYY-MM-DDTHH:mm') );
            // 文章内容设置(同时设置textarea  和 富文本编辑器 )
            $('#content').val(info.content);
            //设置给富文本
            // editor.txt.html() 给富文本编辑器设置或者内容  传参就是设置 不传参获取 
            editor.txt.html(info.content);
            // 设置id  后台要根据id进行更新
            $('#id').val(info.id);
            // 分类选中(selected)
            $('#category option[value='+ info.category_id +']').prop('selected', true);
            // input[type="text"]
            // 状态选中(selected)
            $('#status option[value=' + info.status + ']').prop('selected', true);
   
          }
        })
      })
  
  
      //08-放弃
      $('.btn-cancel').click(function () {
        //隐藏模态框
        $('.edit-box').hide();  
      })
  
      //09-更新修改后的数据
      //1-点击修改按钮，获取表单数据，提交给服务器
      //2-服务器根据id进行更新
      //3-更新完成后，页面重新渲染下
      $('.btn-update').click(function () {
        //获取表单数据
        //FormData  管理表单数据对象 
        //注意点： 
        // 必须用post方式
        // 不要手动设置请求头 ，浏览器会自动设置一个合适请求
        var formData = new FormData( $('#editForm')[0] );
  
        //将表单数据通过ajax传递给后台
        $.ajax({
          url: './post/postUpdate.php',
          type: 'post',
          data: formData,
          contentType: false,  //让$.ajax不设置请求头了
          processData: false,  // 默认情况会将数据name=zs&age=18,数据由FormData进行管理，不要在去编码拼接了
          success: function (info) {
            console.log(info);     
            //重新渲染当前页面
            render(currentPage);     
            //隐藏模态框
            $('.edit-box').hide();  
          }
        })
  
      })
  
      
} );
  