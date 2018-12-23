// promise是书写异步代码的一种方式，能够解决回调函数嵌套的问题
// ES6中，提供了一个构造函数 Promise
// 在promise的内部会封装一个异步的任务
const fs = require('fs')
// resolve: 表示成功的时候需要调用
// reject: 失败的时候需要调用
// let p = new Promise(function(resolve, reject) {
//   fs.readFile('./a.txt', 'utf8', (err, data) => {
//     if (err) {
//       reject(err)
//     } else {
//       resolve(data)
//     }
//   })
// })

// let p2 = new Promise(function(resolve, reject) {
//   fs.readFile('./b.txt', 'utf8', (err, data) => {
//     if (err) {
//       reject(err)
//     } else {
//       resolve(data)
//     }
//   })
// })

// let p3 = new Promise(function(resolve, reject) {
//   fs.readFile('./c.txt', 'utf8', (err, data) => {
//     if (err) {
//       reject(err)
//     } else {
//       resolve(data)
//     }
//   })
// })

// let p4 = new Promise(function(resolve, reject) {
//   fs.readFile('./d.txt', 'utf8', (err, data) => {
//     if (err) {
//       reject(err)
//     } else {
//       resolve(data)
//     }
//   })
// })

function readFile(filename) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

// promise对象的方法  then(): 处理成功的结果  catch():处理失败的结果
// then和catch不会同时触发
p.then(data => {
  console.log(data)
  return p2
})
  .then(data => {
    console.log(data)
    return p3
  })
  .then(data => {
    console.log(data)
    return p4
  })
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })

// axios()  返回的就是promise
// this.$comfirm()
