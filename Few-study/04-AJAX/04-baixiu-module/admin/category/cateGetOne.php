<?php 
    include_once '../../fn.php';
    //根据id返回对应的数据
    $id = $_GET['id'];
    //sql
    $sql = "select * from categories where id = $id";
    //执行
    $data = my_query($sql)[0];
    //返回
    echo json_encode($data);
?>