const handler = require('./handler');

module.exports = function (req, res) {
    // 首页
    if (req.url.startsWith('/index') || req.url == '/') {
        handler.showIndex(req,res);
    } else if (req.url.startsWith('/details')) {
        handler.showDetails(req,res);
    } else if (req.url.startsWith('/submit')) {
        handler.showSubmit(req,res);
    } else if (req.url.startsWith('/assets')) {
        handler.showAssets(req,res);
    } else if (req.url.startsWith('/add') && req.method == 'GET') {
        handler.getAdd(req,res);
    } else if (req.url.startsWith('/add') && req.method == 'POST') {
        handler.postAdd(req,res);
    } else {
        handler.notFound(req,res);
    }

}