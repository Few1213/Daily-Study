let obj = {
    name: '鹏鹏',
    age: 20, 
    sex: '男',
    hobby: '男',
    info: {
        aa: 'bb',
        cc: 'dd',
        ee: 'fff'
    }
}

// 参数一： 要转换数据
// 参数二： 回调函数 对json数据可以进行替换之类的操作 
// 参数三： 格式化json字符串的， 是数字，表示缩进空格数据
let str = JSON.stringify(obj, null, 4);  //转成json字符串 

console.log(str);
