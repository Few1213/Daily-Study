<?php
    
//    echo '<pre>';
//    print_r($_POST);
//    echo '</pre>';

//    echo '<pre>';
//    print_r($_FILES);
//    echo '</pre>';

    include_once '../../fn.php';

    //获取 前端表单数据
    $id = $_POST['id'];
    $title = $_POST['title'];
    $content = $_POST['content'];
    $slug = $_POST['slug'];
    $category = $_POST['category'];
    $created = $_POST['created'];
    $status = $_POST['status'];
    $feature = '';

    //在图片上传成功的情况下，保存图片
    $file = $_FILES['feature'];
    if ($file['error'] === 0 ) {
        $ext = strrchr($file['name'], '.'); //后缀名
        $newName = 'uploads/' . time() . rand(1000, 9999) . $ext; //新文件名
        move_uploaded_file($file['tmp_name'], '../../' . $newName); //转移
        $feature = $newName; 
    }
    //注意： 
    //如果上传了新图片用新图片覆盖旧图片，否则继续保留原图片
    //将数据根据 id 更新会数据库
    if(empty($feature)) {
        //没有上传新图片
        $sql = "update posts set title = '$title', content = '$content', slug = '$slug', category_id = $category, 
                created = '$created', status = '$status' where id = $id";
    } else {
        //有新图片
        $sql = "update posts set title = '$title', content = '$content', slug = '$slug', category_id = $category, 
                created = '$created', status = '$status', feature = '$feature' where id = $id";
    }

    //执行 
    my_exec($sql);


?>