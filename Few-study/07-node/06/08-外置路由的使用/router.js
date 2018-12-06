
module.exports = function (app) {

    app = '嘿嘿';

    app.get('/', (req, res) => {
        res.send('首页');
    }) 
    app.get('/index', (req, res) => {
        res.send('首页');
    }) 

    app.get('/list', (req, res) => {
        res.send('列表页');
    }) 

    app.get('/login', (req, res) => {
        res.send('登录页');
    }) 

    app.get('/submit', (req, res) => {
        res.send('提交页面页');
    }) 

}

//  大唐    突厥   东瀛  高丽