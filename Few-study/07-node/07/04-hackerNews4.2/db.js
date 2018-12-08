// 封装所有和数据库操作的相关功能  

const mongodb = require('mongodb');
const ObjectID = mongodb.ObjectID;

//得到一个mongodb的客户端 
const mongodbClient = mongodb.MongoClient; 
//连接数据库字符串 
const host = 'mongodb://127.0.0.1:27017';


module.exports = {
    getAllnews(callback) { //获取所有的新闻数据
        condb(news => {
            news.find().toArray((err, data) => {
                if (err) {
                    return console.log('读取失败', err);                
                }
                //将查询全部数据交个回调函数去执行 
                callback && callback(data);
            });
        })
    },
    getNewById(id, callback) { //根据id 查找对应新闻数据
        condb(news => {
            // 根据id找到对应的数据，
            // new ObjectID(id) 将字符串形式id 转成 ObjectID
            news.find({ _id : new ObjectID(id) }).toArray((err, data) => {
                if (err) {
                    return console.log('查找失败',err);                
                }
                callback && callback(data);
            });
        })
    },
    insertNew(info,  callback) {
        condb(news => {
            news.insert(info);  //2-将数据插入到数据库中
            callback && callback();   //执行回调函数 
        })
    }
}


//封装连接数据库的方法 
function condb(callback) {
    mongodbClient.connect(host, (err, client) => {
        if (err) {
            return console.log('连接失败', err);            
        }
        //选择要操作的数据库 中的 集合 
        let news = client.db('hackerNews').collection('news');

        //操作
        callback && callback(news);
        // 关闭数据库
        client.close();
    })
}