<?php 
    include_once '../../fn.php';
    //根据前传递id， 返回对应的文章数据
    $id = $_GET['id']; 
    //sql
    $sql = "select * from posts where id = $id";
    //执行
    $data = my_query($sql)[0];  
    //返回
    echo  json_encode($data); 
?>