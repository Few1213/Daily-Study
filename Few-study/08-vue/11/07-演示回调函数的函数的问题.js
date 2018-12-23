// 按照顺序读取4个文件  aaa, bbbb, cccc,  dddd
const fs = require('fs')
fs.readFile('./a.txt', 'utf8', (err, data) => {
  if (err) {
    return console.log('读取文件失败了')
  }
  console.log(data)
  fs.readFile('./b.txt', 'utf8', (err, data) => {
    if (err) {
      return console.log('读取文件失败了')
    }
    console.log(data)
    fs.readFile('./c.txt', 'utf8', (err, data) => {
      if (err) {
        return console.log('读取文件失败了')
      }
      console.log(data)
      fs.readFile('./d.txt', 'utf8', (err, data) => {
        if (err) {
          return console.log('读取文件失败了')
        }
        console.log(data)
      })
    })
  })
})
