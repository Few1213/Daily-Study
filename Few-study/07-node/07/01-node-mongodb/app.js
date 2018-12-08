// // 1-引入模块
// const mongodb = require('mongodb');

// // 2-得到一个mongodb客户端实例
// const mongodbClient = mongodb.MongoClient; 

const mongodbClient = require('mongodb').MongoClient;

//设置一个连接字符串 
let str = 'mongodb://127.0.0.1:27017';

//3-通过客户端连接数据 
mongodbClient.connect(str, (err, client) => {
    if (err) {
        return console.log('连接失败', err);        
    }
    //成功 通过client去 选择要使用的数据库  
    let db = client.db('test');

    //使用数据库 
    //增删改查 
    //查找
    // db.collection('user').find().toArray((err, data) => {
    //     if (err) {
    //         console.log('为获取到数据', err);            
    //     }
    //     console.log(data);        
    // });
    //查找年龄大于20 
    // db.collection('user').find({age: {$gt: 20}}).toArray((err, data) => {
    //     if (err) {
    //         console.log('为获取到数据', err);            
    //     }
    //     console.log(data);        
    // });

    //添加 
    // db.collection('user').insert({ name: '鹏鹏', age: 18 }); 
    // db.collection('user').insert([{ name: '聪聪', age: 37 }, { name: '似水', age: 40 }]);


    // 删除一条
    // db.collection('user').deleteOne({ age: 22 });

    // 删除多条 
    // db.collection('user').deleteMany({ age: 20 });


    //修改一条
    // db.collection('user').update({ age: 33 }, { $set: { name: '大春哥' } });
    // 修改多条
    // db.collection('user').updateMany({ age: 33 }, { $set: { name: 'pp' } });


    db.collection('user').find().toArray((err, data) => {
        if (err) {
            console.log('为获取到数据', err);            
        }
        console.log(data);        
    });




    //关闭数据库 
    client.close(); 
})