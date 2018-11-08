<?php 
    
    include_once '../../fn.php';
    // 返回数据库中有效评论的总数  
    $sql = "select count(*) as total  from comments join posts on comments.post_id = posts.id ";
    //执行
    $data = my_query($sql)[0];
    //返回json
    echo json_encode($data);
    //{"total":"498"}

?>