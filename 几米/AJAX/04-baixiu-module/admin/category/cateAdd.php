<?php 
    include_once '../../fn.php';
    // 获取前端传递 分类数据，添加到数据库中 
    $name = $_GET['name'];
    $slug = $_GET['slug']; 
    //sql
    $sql = "insert into categories (slug, name) values ('$slug', '$name')";
    //执行
    if(my_exec($sql)) {
        echo 'success!';
    } else {
        echo 'error!';
    }
?>