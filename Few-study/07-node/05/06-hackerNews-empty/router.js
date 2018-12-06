// 引入模块
const handler = require('./handler');

module.exports = function (req, res) {
    // 首页
    if (req.url.startsWith('/index') || req.url == '/') {
        // 先读取数据库中的数据,再读取模板
        // 将数据和模板进行绑定,生成结构
        // 返回给浏览器
        handler.showIndex(req,res);
    } else if (req.url.startsWith('/details')) {
        handler.showDetails(req,res);

    } else if (req.url.startsWith('/submit')) {
        handler.showSubmit(req,res);
    } else if (req.url.startsWith('/assets')) {
        handler.showAssets(req,res);
    } else if (req.url.startsWith('/add') && req.method == 'GET') {
        // 如果是 get 请求
        // 获取前端表单提交的数据
        // 读取全部的数据,转换成 js 对象
        // 将新添加的数据,追加到数组中
        // 将数组转换成 json 字符串,写到 data.json 中
        // 跳转到列表页,看到添加效果

        // console.log(url.parse(req.url,true).query);
       
        // res.end('ok');
        handler.getAdd(req,res);
    } else if (req.url.startsWith('/add') && req.method == 'POST') {
        // post 请求获取数据
        // 得到全部的数据
        // 添加数据,写入数据
        // 只要前端以 post 向后台提交数据,都会触发 data 事件,并且 data 事件可能触发多次
        // 如果浏览器传递数据完毕,就会触发 end 事件,在 end 事件中使用接收的数据
        // 前端传递给后台得是字符串
        handler.postAdd(req,res);

    } else {
        handler.notFound(req,res);
    }
}

