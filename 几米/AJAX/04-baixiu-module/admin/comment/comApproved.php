<?php 
    include_once '../../fn.php';
    // 根据前端传递id ，批准对应数据  
    $id = $_GET['id'];
    //准备sql
    //in 一次匹配多条数据 
    $sql = "update comments set  status = 'approved' where id in ($id)  and status = 'held'"; //id in (23, 24, 25);
    //执行
    if (my_exec($sql)) {
        echo 'success!';
    } else {
        echo 'error!';
    }
?>