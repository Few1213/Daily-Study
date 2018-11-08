<?php 
    define('IP', '127.0.0.1');
    define('UNAME', 'root');
    define('PWD', 'root');
    define('DB', 'zbaixiu');
    //封装 要给同php操作数据库函数 
    // 1- 执行非查询语句行数
    // 执行成功 返回 true  失败 false 
    function my_exec($sql){
        //1-连接数据库
        $link = mysqli_connect(IP, UNAME, PWD, DB);

        if(!$link) {
            echo '数据库连接失败！';
            return false;
        }

        //2-执行sql 
        if(!mysqli_query($link, $sql) ) {
            echo '执行失败';
            mysqli_close($link);
            return false;
        }

        mysqli_close($link);
        return true; //成功         
    }

    // $sql = "delete from posts where id = 63";
    // my_exec($sql);

    // 2- 执行查询语句函数 
    //成功  返回查询的数据  失败 false 
    function my_query($sql) {
        //1-连接数据库
        $link = mysqli_connect(IP, UNAME, PWD, DB);

        if(!$link) {
            echo '数据库连接失败！';
            return false;
        }

        //执行 
        $res = mysqli_query($link, $sql); 

        //判断是否获取到数据
        if(!$res || mysqli_num_rows($res) == 0 ) {
            echo '未获取到数据';
            mysqli_close($link);
            return false;
        }

        //有数据  保存数据  
        //mysqli_fetch_assoc();  
        //从结果集中获取数据： 一次只能获取一个，以关联数组形式返回 
        while( $row = mysqli_fetch_assoc($res) ) {
            $data[] = $row; 
        }

        mysqli_close($link);
        //返回数据
        return $data; 

    }

    // $sql = "select * from users";
    // $data = my_query($sql);

    // echo '<pre>';
    // print_r($data);
    // echo '</pre>';

    //判断用户之前是否登录过
    function isLogin () {
        //判断用户之前是否登录过
        if(empty($_COOKIE['PHPSESSID'])) {
            //去登录
            header('location: ./login.php');
        } else {
            //判断同名session文件中是否有 user_id
            session_start(); //使用session 之前先开启 
            if(empty($_SESSION['user_id'])) {
                //去登录
                header('location:./login.php');
            }
        }
    }
    
?>