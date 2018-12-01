// 1-引入模块
const http = require('http');
// 2-创建服务器
const server = http.createServer();
// 3-监听请求处理请求
server.on('request', (req, res) => {
    // //状态码
    // res.statusCode = 404; 
    // // 状态文本
    // res.statusMessage = 'bbb';
    // //响应头
    // res.setHeader('content-type', 'text/css');
    //设置状态行和响应头
    // res.writeHead(状态码， 状态文本， {响应头})

    res.writeHead(404, 'ccc', { 'content-type': 'text/html' });

    //处理逻辑
    res.end('ok');
})
// 4-设置端口，开启服务器
server.listen(9999, () =>{ console.log('http://localhost:9999 服务器已启动') });