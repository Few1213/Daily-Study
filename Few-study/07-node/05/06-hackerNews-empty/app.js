// 引入需要的模块
const http = require('http');
const router = require('./router');
const extend = require('./extend');



// 创建一个服务器
const server = http.createServer();
// 监听服务器的请求
server.on('request', (req, res) => {

    extend(req, res);
    router(req, res);
});

// 设置端口 开启服务器
server.listen(9999, () => {
    console.log('http://localhost:9999 服务器开启了');
});