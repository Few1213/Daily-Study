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

readFile('a.txt')
  .then(data => {
    console.log(data)
    return readFile('b.txt')
  })
  .then(data => {
    console.log(data)
    return readFile('c.txt')
  })
  .then(data => {
    console.log(data)
    return readFile('d.txt')
  })
  .then(data => {
    console.log(data)
  })
  .catch(err => {
    console.log(err)
  })

//async await
