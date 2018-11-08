<?php 
    header('content-type:text/html;charset=utf-8');
    include_once './fn.php';

    $name = '吃饭饭';
    $slug = 'eat';
    //外双内单
    // php中双引号可以解析变量
    // 单引号是加给数据的sql的语句， 数据库中字符串也要加引号 
    $sql = "insert into categories (name, slug) values ('$name', '$slug')";
    echo $sql; 
?>