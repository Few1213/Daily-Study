// 模块的查找规则
require('http');
require('fs');
require('mime');
require('jquery');
require('./a'); 

// 1- 如果模块名是一个路径，说明是自定义的模块， 就相对于当前文件去查找；
// 2- 如果模块名不是路径，会先当做核心模块去查找， 再当做第三方模块去查找
// 3- 第三方模块的查找规则： 
//   1-如果某个模块当做第三个模块查找时， 会先去当前文件所在目录 查找 node_modules目录 
//   2-在node_modules目录中找 和模块名同名（mime）的文件加
//   3-在模块同名的目录(mime)中 找package.json文件 
//   4-在package.json文件中查找 main属性 ,main属性对应文件 就是要引入的模块文件；
//   5-如果 模块同名的目录下面没有package.json文件 
//          或者 package.json中没有main属性 
//          或者 main属性对应文件不存在
//          node 会默认下载 模块同名目录（mime)下面 index.js  index.json index.node 
//  6-如果引入模块文件同级没有node_modules目录， 会向上一级目录去查找， 如果上一级目录有node_modules目录就按照前面的规则查找， 如果没有继续向上一级查找，直到找到磁盘根目录为止， 如果最后没有找到  提升 Cannot find module XXX 
