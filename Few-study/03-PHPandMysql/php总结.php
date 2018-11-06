<?php
//在php的语法中,末尾必须加分号,否则会报错
1.变量操作
    定义
    $name = '值';
    删除
    unset($name);
    判断变量是否设置值
    isset($name); //返回值是bool
    判断变量是否为空
    empty($name); //返回值是bool

2.数据类型
    字符串
    $str= 'hello world';
    整数
    $num =100;
    浮点数
    $float = 11.11;
    布尔类型
    $flag = true;
    字符串连接
    $name.$str.'php';

3.单引号和双引号
    单引号的性能高于双引号,双引号会解析变量;

4.数组
    索引数组
    $arr = array('z','x','c');
    关联数组
    $arr =array('name'=>'z','age'=>18);

    二维数组
    $arr = [
        [
            'name'=>'zs',
            'age'=>18
        ],
        [
            'name'=>'ls',
            'age'=>18
            ]
    ]

5.输出语句
    echo 简单数据类型
    print_r 复杂数据类型

6.对象
    class Person{
        public $name ="zx";
        public $age = 18;//可以输出的属性
        private $sex = 'nan';//私有属性 不能输出

    }

7.遍历和索引数组
    for ($i=0; $i <count($arr) ; $i++) { 
    # code...
    //count($arr) 获取数组的长度
    }

    foreach ($variable as $key => $value) {
        # code...
    }

8.函数
    function hello($name='zx'){
        echo "大家好 ,我是$name";
    }
php中函数要注意的问题
    函数不能重复声明
    函数体内的变量只在函数体内有效
    函数体外的变量只在函数体外有效

9.常量
    声明:  define(常量名,  常量值,  大小写区分标志);   
    true（不区分）/false（区分/默认）;

10.PHP的内置函数
## 数学函数
- max(),min()   分别返回一组数的最大值及最小值；
- abs() 返回绝对值。
- floor() 向下取整。
- ceil()  向上取整。
- round() 四舍五入。
- rand()  返回随机数，可以取到两端的值。

## 日期函数
- time()  返回当前的 时间戳(1970到现在的时间的毫秒数)
- date(format,time) 格式化一个本地时间或日期


## 字符串函数
- str_replace(查找的值，替换的值，执行替换操作的字符串)       字符串替换
- trim(字符串);     去除首尾空白字符
- explode(分割符，执行分割的字符串);        使用一个字符串分割另一个字符串,返回一个分割后的数组(类似split)
- implode(连接符，执行连接的数组);           将数组根据连接符拼接成字符串(类似join)
- substr( 字符串，起始索引，截取长度  );    截取字符串 中文占3个字节长度
- strchr(字符串，标识字符);          从左向右找标识字符，返回该字符后全部字符(包括该字符)
- strrchr(字符串，标识字符);        从右向左找标识字符，返回该字符后全部字符(包括该字符) **主要用于获取后缀名**

11.include and include_once
    include | include_once   "文件的路径"
    区别 - include  可以重复引入文件
        - include_once  只引入一次，防止多次引入文件

12.PHP读写文件
    file_get_contents   得到一个字符串
    file_put_contents   只能传递字符串
    int file_put_contents(string $file, string $data[, constants flag]);
    参数1: 文件路径
    参数2: 要写入文件的字符串
    参数3: 可选参数，默认不写，新内容覆盖原文件中的内容；FILE_APPEND是向文件中追加内容
    返回值: 写入文件的字符串长度(不用记)

    json_encode($data) 转换成json格式的字符串
    json_decode($str,true)  将json的字符串转换成php格式的数组

13.表单处理文件上传
   
    <form action="" method="POST" enctype="multipart/form-data"></form>
    //1. action: 指定表单的提交地址
    //2. method: 指定表单的提交方式，get/post，默认get
    //3. input的数据想要提交到后台，必须指定name属性，后台通过name属性获取值
    //4. 想要提交表单，不能使用input:button 必须使用input:submit
    文件上传时，通过`$_FILES`才能获取到，这是一个二维数组。
    Array
    (
        [photo] => Array
            (
                [name] => 001.jpg   // 文件名字
                [type] => image/jpeg  // 文件类型
                [tmp_name] => C:\Users\Jepson\AppData\Local\Temp\phpF2A0.tmp   // 上传图片临时保存的位置
                [error] => 0     // 上传错误码, 错误码为 0 表示没有错误
                [size] => 6000   // 文件大小, 单位字节, 大小 6kb 左右
            )
  
    )
    

    $_GET 和 $_POST
    //1. get方式
	//1.1 数据会拼接在url地址的后面?username=pp&password=123456
	//1.2 地址栏有长度限制，因此get方式提交数据大小不会超过4k
    //2. post方式
	//2.1 数据不会在url中显示，相比get方式，post更安全
	//2.2 提交的数据没有大小限制, 可用于文件上传

    move_uploaded_file($path, $newPath);`可以保存临时图片
                    旧的文件路径  新的文件路径
    // 保存图片的完整代码
    // 思路:
    // 1. 在文件上传成功的情况下, 进行图片的保存   error == 0
    // 2. 获取临时文件路径
    // 3. 随机生成新的文件名, 注意文件中后缀名是不能改变的
    // 4. 根据新的文件名, 转移临时文件
  
    $file = $_FILES['photo'];
  
    // 判断上传是否成功
    if ( $file['error'] === 0 ) { // 上传成功
      // 1. 获取临时文件路径
      $ftemp = $file['tmp_name'];
  
      // 2. 随机生成新的文件名, 后缀不能随便起, 要获取一下
      $name = $file['name'];
      $text = strrchr($name, '.');
      // 为了防止重复, 生成随机的文件名以当前时间秒数+随机数组成
      $newName = time().rand(10000,99990).$text;
  
      // 3. 进行转存
      move_uploaded_file($ftemp, "./upload/$newName");
    }

14.请求报文与响应报文
    请求由浏览器发起:请求头,请求体,请求报文
    响应由服务器发出:响应行(状态行),响应头,响应主体
    






?>