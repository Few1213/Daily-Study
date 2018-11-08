<?php 
    include_once '../../fn.php';
    // 根据前端传递id，删除对应的数据  
    $id = $_GET['id'];
    //sql
    $sql = "delete from categories where id = $id";
    //执行
    if(my_exec($sql)) {
        echo 'success!';
    } else {
        echo 'error!';
    }
?>