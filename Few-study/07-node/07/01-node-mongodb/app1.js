// 引入模块
const mongodb = require('mongodb');
// 得到一个 MongoDB 的客户端
const mongodbClient = mongodb.MongoClient();

// 设置一个连接字符串
let str = 'mongodb://127.0.0.1:27017';

// 通过客户端连接数据
mongodbClient.connect(str, (err, client) => {
    if (err) {
        return console.log('连接失败', err);
    }

    // 成功 通过 client 去选择要使用的数据库
    let db = client.db('text');

    // 使用数据库进行操作 增删改查
    // 查找
    // db.collection('users').find().toArray((err,data)=>{
    //     if (err) {
    //         console.log('为了获取到数据',err);
    //     }
    //     console.log(data);

    // })
    db.collection('users').find({
        age: {
            $gt: 20
        }
    }).toArray((err, data) => {
        if (err) {
            return console.log('查找失败', err);
        }
        console.log(data);
    })

    // 添加
    db.collection('users').insert({
        name: '是的',
        age: 18
    });
    // 删除一条
    db.collection('users').deleteOne({age:22});
    //修改 一条
    db.collection('users').update({age:33},{$set:{
        name:'大春哥'
    }})

     client.close();
})