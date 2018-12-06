// 在express提供了外置路由方式  ，
// 直接将路由绑定给路由对象即可， 无需将路由绑定给app对象本身 
const express = require('express');

const router = express.Router();  // 可以得到一个 路由实例  

router.get('/', (req, res) => {
    res.send('首页');
})

router.get('/index', (req, res) => {
    res.send('首页');
})


router.get('/list', (req, res) => {
    res.send('列表页');
})


router.get('/login', (req, res) => {
    res.send('登录页');
})

//导出router实例即可 
module.exports = router;

