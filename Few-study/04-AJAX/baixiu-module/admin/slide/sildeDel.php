<?php 
    include_once '../../fn.php';
    //根据前端传递id,删除对应都是数据
    $id = $_GET['id'];  // id其实就是索引值 

    //1-获取数据库轮播图json字符串
    $sql = "select * from options where id = 10";        
    $str = my_query($sql)[0]['value'];
    //2-转成数组
    $arr = json_decode($str, true);
    //3-根id从数组中删除对应的数据
    // js splice(起始索引，删除长度， 替换项) 
    //php  array_splice(被删除数组， 起始索引， 删除长度)
    array_splice($arr, $id, 1);
    //4-将数组转成json字符粗
    $str = json_encode($arr);
    //5-将删除后的json字符串 更新会数据库 
    $sql = "update options set value = '$str' where id = 10";
    //执行
    my_exec($sql);
?>