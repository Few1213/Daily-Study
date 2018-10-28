<?php 
    include_once '../../fn.php';
    //获取用户的数据 并返回  
    $sql = "select * from users";
    //执行
    $data = my_query($sql);
    //返回json格式数据
    echo json_encode($data); 
?>  