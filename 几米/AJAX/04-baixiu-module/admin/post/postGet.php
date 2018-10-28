<?php 

    include_once  '../../fn.php';
    // 根据前端传递  页面 和每页数据条数  返回对应页码的数据； 
    $page = $_GET['page'];
    $pageSize = $_GET['pageSize'];

    // echo $page; 

    //起始索引
    $start = ($page - 1) * $pageSize;
    //查询数据库中文章的数据

    $sql = "select posts.*, users.nickname, categories.name from posts  -- 查询文章数据
            join users on posts.user_id = users.id   -- 联合 用户表 查询用户昵称
            join categories  on posts.category_id = categories.id  -- 联合分类表 查询分类名称
            order by posts.id desc  -- 通过文字id进行排序 
            limit $start, $pageSize     --  limit 起始索引 截取长度分页";

    //执行
    $data = my_query($sql);

    //返回 json格式 
    echo json_encode($data);

    // echo '呵呵';

?>