const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

router.get('/index',(req,res)=>{
    readData(data=>{
        res.render('index.html',data);
    })
})



module.exports = router;
function readData(callback) {  
    fs.readFile(path.join(__dirname,'data','data.json'),(err,data)=>{
        if (err) {
            return console.log('读取失败',err);
        }
        data = JSON.parse(data);
        callback && callback(data);
    })
}