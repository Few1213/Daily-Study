<?php 
    include_once '../../fn.php';

    //根据id 更新对应数据接口 
    $id = $_GET['id'];
    $name = $_GET['name'];
    $slug = $_GET['slug'];

    //sql
    $sql = "update  categories  set name = '$name', slug='$slug' where id = $id"; 
    
    //执行
    if(my_exec($sql)) {
        echo 'success!';
    } else {
        echo 'error!';
    }
?>