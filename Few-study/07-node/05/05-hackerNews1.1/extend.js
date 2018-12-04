// 这个模块专门用于给req, res 拓展功能的 
const url = require('url');

module.exports = function (req, res) {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    // 解析req.url中的queryString name=zs&age= 18
    // 给res 拓展了一个query属性
    res.query = url.parse(req.url, true).query;
    // 给res扩展一个重定向的方法 
    res.redirect = function () {
        res.statusCode = 302;
        res.setHeader('location', '/index');
        res.end();
    }
}

