<?php 

    include_once '../../fn.php';
    // 查询有效的文章总数
    // 有效： 文章的作者必须存在   文章必须有分类 
    $sql = "select count(*) as total  from posts 
    join users on posts.user_id = users.id 
    join categories on posts.category_id = categories.id ";

    //执行
    $data = my_query($sql)[0]; 

    //输出
    echo json_encode($data);
?>