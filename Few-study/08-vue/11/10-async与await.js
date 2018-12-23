// async与await是编写异步代码的终极解决方案
// async与await就是两个关键字
// async用于修饰一个函数
// await: 等待
// 1. await必须使用在async修饰的函数中
// 2. await后面会跟一个promise对象
// 3. await会暂停async函数的执行，直到等到了promise的成功结果
const fs = require('fs')
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

// 整体上是一个异步的
async function fn() {
  var result = await readFile('a.txt')
  var result2 = await readFile('b.txt')
  var result3 = await readFile('c.txt')
  var result4 = await readFile('d.txt')
  console.log(result, result2, result3, result4)
}

fn()
console.log(2222)
