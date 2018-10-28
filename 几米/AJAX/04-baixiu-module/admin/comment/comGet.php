<?php 
    //根据前端传递页码 和 每页的数据条数  给前端返回对应页码 的评论数据 
    include_once '../../fn.php';

    $page = $_GET['page'];
    $pageSize = $_GET['pageSize'];

    //截取起始索引  
    //当前页截取起始索引 = （页码 - 1) * 10  = (页码 - 1) * 每页数据条数 
    $start = ($page - 1) * $pageSize;

    $sql = "select comments.*, posts.title from comments 
            join posts on comments.post_id = posts.id  -- 联合文章表一起查 
            order by comments.id   -- 通过id进行排序 
            limit $start, $pageSize  -- limit 起始索引 ，截取长度";

    //执行
    $data = my_query($sql);

    //以json格式进行返回 
    echo json_encode($data); 
    
?>