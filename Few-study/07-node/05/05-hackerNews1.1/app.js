// 引入模块
const http = require('http');
const router = require('./router');
const extend = require('./extend');

// 创建服务器 
const server = http.createServer(); 

// 监听请求 处理请求
server.on('request', (req, res) => {
    //给req 和 res添加新功能  
    extend(req, res);
    // 由 路由来处理逻辑 
    router(req, res);
});

// 开启服务器
server.listen(9999, () => console.log('http://localhost:9999 服务器已启动'));



