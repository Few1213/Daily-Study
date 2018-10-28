<?php 
    include_once '../../fn.php'; 
    //根据前端传递id ，删除对应的数据 
    $id = $_GET['id'];
    //sql
    $sql = "delete from posts where id = $id";
    //执行
    my_exec($sql);

    //返回删除后数据库剩余的数据总条数 
    $sql1 = "select count(*) as total  from posts 
    join users on posts.user_id = users.id 
    join categories on posts.category_id = categories.id ";

    //执行
    $data = my_query($sql1)[0]; 

    //输出
    echo json_encode($data);
?>