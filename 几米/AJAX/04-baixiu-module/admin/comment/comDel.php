<?php 
    //引入
    include_once '../../fn.php';
    // 根据前端传递id，删除对应的数据 
    $id = $_GET['id'];
    //sql
    $sql = "delete from comments where id in ($id)";
    //执行
    my_exec($sql);

    //删除数据，会导致数据库的数据越来越少， 前端分页标签是根据数据库数据的总数动态生成的
    //删除数据后会导致分页标签要重新生成；
    //为了前端更方便的生成分页标签，每次删除完成后， 返回当前数据库中剩余的有效数据总数；方便前端来生成分页标签； 

    $sql1 = "select count(*) as total  from comments join posts on comments.post_id = posts.id ";
    //执行
    $data = my_query($sql1)[0];
    //返回json
    echo json_encode($data);
?>