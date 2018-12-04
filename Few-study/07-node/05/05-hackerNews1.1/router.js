const handler = require('./handler');

// 路由模块 根据不同请求 处理不同的逻辑, 
// 路由模块 只需要分配任务， 不需要模块自身去实现
module.exports = function (req, res) {
    if (req.url.startsWith('/index') || req.url == '/') { //  首页
        handler.showIndex(req, res);

    } else if (req.url.startsWith('/details')) { // 详情页面
        handler.showDetails(req, res);

    } else if (req.url.startsWith('/submit')) {  // 提交页面   
        handler.showSubmit(req, res);

    } else if (req.url.startsWith('/assets')) {  // 静态资源
        handler.showStatic(req, res);

    } else if (req.url.startsWith('/add') && req.method == 'GET') { //get方式添加数据 
        handler.getAdd(req, res);
    }else { //404 
        handler.notFound(req, res);
    }
}


