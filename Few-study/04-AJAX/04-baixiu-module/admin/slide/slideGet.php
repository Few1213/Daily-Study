<?php 
    include_once '../../fn.php';
    //获取轮播图数据接口
    $sql = "select * from options where id = 10";
    //执行
    $data = my_query($sql)[0]['value'];

    // echo '<pre>';
    // print_r($data);
    // echo '</pre>';

    echo $data; //返回json格式 数据
?>