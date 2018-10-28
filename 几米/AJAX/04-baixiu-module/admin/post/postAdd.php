<?php 
    // echo '<pre>';
    // print_r($_POST);
    // echo '</pre>';

    // echo '<pre>';
    // print_r($_FILES);
    // echo '</pre>';
    // header('content-type:text/html;charset=utf-8');
    include_once '../../fn.php';

    //后台获取前端提交的数据和文件， 保存到数据库中
    //获取上传数据
    $title = $_POST['title'];
    $content = $_POST['content'];
    $slug = $_POST['slug'];
    $category = $_POST['category'];
    $created = $_POST['created'];
    $status = $_POST['status'];
    //获取当前文章作者
    session_start(); 
    $userid = $_SESSION['user_id'];

    //图片在服务器中地址
    $feature = '';

    echo $userid;

    //保存文章对应图片
    $file = $_FILES['feature'];
    //在图片上传成功的情况下，保存图片 
    if ($file['error'] === 0 ) {
        //要随机生成新文件名， 后缀名不能变
        //截取后缀名
        //strrchr(被操作字符， 截取的字符)
        $ext = strrchr($file['name'], '.');
        //新文件名
        $newName = 'uploads/' .time() . rand(1000, 99999) . $ext; 
        //转移
        move_uploaded_file($file['tmp_name'], '../../'. $newName);
        $feature = $newName; //保存图片在服务器中地址
    }


    //将获取的数据和图片在服务器中的地址 插入到数据库中 
    $sql = "insert into posts (title, content, slug, category_id, created, status, user_id, feature) 
                       values ('$title', '$content', '$slug', $category, '$created', '$status', $userid, '$feature')";

    echo $sql; 

    //执行
    my_exec($sql);

    //跳转 文章列表页 (保证在上面代码没有错误的情况下，在进行跳转)
    header('location: ../posts.php');
?>