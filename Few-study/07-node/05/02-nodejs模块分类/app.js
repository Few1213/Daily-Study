// nodejs模块的分类
// 1- 核心模块  
    // 在官网罗列这些模块 就是核心  fs  http  url  path .... 
    // 直接引入使用即可 
// 2- 第三方模块
    // 使用npm 安装的模块  mime  art-template jquery ...
    // 先安装 在引入使用  
// 3- 自定义模块 
    // 自己定义js文件，被引入使用 


require('http');
require('path');
require('mime');
require('./test');

// 注意：
// 自定义模块 定义要带有路径 ./ 或者 ../, 如果不带路径会当做 核心模块 或者 第三方模块去加载  