const url = require('url');

module.exports = function (req,res) {
    res.setHeader('content-type', 'text/html;charset=utf-8');
    res.query = url.parse(req.url, true).query;
    res.redirect = function () {
        // console.log("执行了");
        
        res.statusCode = 302;
        res.setHeader('location', '/index');
        res.end();
      }

  }