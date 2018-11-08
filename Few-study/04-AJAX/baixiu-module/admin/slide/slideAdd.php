<?php 
    // echo '<pre>';
    // print_r($_POST);
    // echo '</pre>';

    // echo '<pre>';
    // print_r($_FILES);
    // echo '</pre>';

    include_once '../../fn.php';

    //获取前端上传数据和图片，保存到数据库中 
    //如果没有上传图片，则此数据不要保存；
    $file = $_FILES['image'];

    if ($file['error'] === 0) {
        //保存图片
        //文件名随机生成，后缀名不变 
        $ext = strrchr($file['name'], '.');
        $newName = 'uploads/' . time() . rand(1000, 9999) . $ext;
        //转移文件
        move_uploaded_file($file['tmp_name'], '../../' . $newName);

        //保存数据（用关联数组保存）
        $info['image'] = $newName;
        $info['link'] = $_POST['link'];
        $info['text'] = $_POST['text'];

        // echo '<pre>';
        // print_r($info);
        // echo '</pre>';

        //将我们数据存储到数据库中  
        //1-将数据json字符串取出来
        $sql = "select * from options where id = 10";        
        $str = my_query($sql)[0]['value'];
        //2-转成数组
        $arr = json_decode($str, true);
        // echo '<pre>';
        // print_r($arr);
        // echo '</pre>';
        //3-将我们的数据追加到数组中
        $arr[] = $info;
        // echo '<pre>';
        // print_r($arr);
        // echo '</pre>';
        //4-将数组转回json字符串
        $str = json_encode($arr);
        // echo $str;
        //5-将添加有数据的json字符串在更新会数据库
        $sql = "update options set value = '$str' where id = 10";
        //执行
        my_exec($sql);
        
    }


?>   

