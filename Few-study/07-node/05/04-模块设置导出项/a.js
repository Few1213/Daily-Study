//如果a模块将数据暴露给外界，需要设置导出项  
// 在node中，每个js文件内部都会一个module对象, 这个对象就表示当前模块 
// module对象中有一个属性exports, module.exports 就是模块要导出的数据；
// 在其他模块中不能访问模块内部属性，但是可以模块的 module.exports

console.log('我是a模块');

let name = 'zs';
let age = 18;

//模块向外界暴露的数据 
// module.exports.name = 'lisi';
// module.exports.age = 22;

module.exports = {
    name: '大翁哥',
    hobby: '老宫',
    sex: '鹏鹏'
}
