<?php 
    include_once '../../fn.php';
    //获取分类的全部数据 并返回 
    $sql = "select * from categories";
    //执行
    $data = my_query($sql);
    //返回json数据 
    echo  json_encode($data);
?>