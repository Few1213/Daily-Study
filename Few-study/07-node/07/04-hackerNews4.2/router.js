const express = require('express')
const handler = require('./handler')

//得到一个外置路由对象
const router = express.Router()

//将路由绑定给router
router.get('/', (req, res) => {
  //首页
  handler.showIndex(req, res)
})

router.get('/index', (req, res) => {
  //首页
  handler.showIndex(req, res)
})

router.get('/details', (req, res) => {
  //详情页
  handler.showDetails(req, res)
})

router.get('/submit', (req, res) => {
  //提交页面
  handler.showSubmit(req, res)
})

router.post('/add', (req, res) => {
  //post方式 添加
  handler.postAdd(req, res)
})

//导入router
module.exports = router
