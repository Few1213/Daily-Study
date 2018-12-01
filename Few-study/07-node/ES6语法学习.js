/**
 * 
 * var 
 * 全局作用域
 * 函数作用域
 * 变量会提升
 * 
 * 现在定义变量的三种方式
 * var let const
 * 
 * let 
 * 块级作用域{} 只在大括号内有效
 * 变量不会被提升
 * 变量不能被重复定义
 * 变量可以重新赋值
 * 
 * const 
 * 常量,在程序运行过程中,值不能被该变量
 * 不能被重新赋值,常量在定义的时候必须赋值
 * 块级作用域内有效{} 
 * 变量不会被提升
 * 变量不能被重复定义
 * 
 * 
 * var let const
 * 尽量减少 var 的使用
 * 定义变量和函数使用 let 
 * 定义常量不变的常量使用 const
 * 
 * 
 * 
 */

// 字符串的新方法 返回值是 true 或者是 false
// var str = 'abcdefg' ;
// console.log(str.startsWith('a'));
// console.log(str.endsWith('b'));
// console.log(str.includes('c'));

// 数组的新方法
// forEach 将数组中的每个元素,依次交给回调函数进行处理
// array.forEach(element => {
    
// });
// map() 此方法会实现准备一个空数组,再依次将每个元素交给回调函数进行处理,会将每个处理完成的结果,存放在空数组中
var arr = ['2','3','4','5','3','2'];
let arr1 = arr.map(function (v,i) { 
    return v = v * 2;
 })
 console.log(arr1);
 

// arr.forEach(function (v,i,arr) {
//     // v 是当前遍历的元素
//     // i 是索引 
//     // arr 是当前遍历的数组
//   });

// arr.forEach(v=>console.log(v))
// arr.map();

// arr.map(v=>console.log(v*2));
// arr.filter(): 返回数组中满足条件的元素
// var r = arr.filter(v=> v > 3 );
// console.log(r);
// some(); 判断数组至少有一个满足条件
// every();    判断数组所有满足条件
// find() 返回满足条件的第一个元素
//findIndex() 返回满足条件的第一个元素的索引值


// // 对象 的简写
// let name = 'ls';
// let age = 14;
// let gender = '男';

// let obj = {
//     name: name,
//     age:age,
//     gender:gender,
//     hobby:'打球',
//     say:function () {
//         console.log('hi');
        
//       }

// }
// let obj = {
//     name,
//     age,
//     gender,
//     say(){
//         console.log('hi');
//     }
// }

// 函数的默认参数
// function add(num1 = 1,num2 =2) {
//     return console.log(num1 +num2);
    
//   }
// add();

// 箭头函数
//  let add = (num1 = 1,num2 = 2) => console.log(num1+num2);
//  add(2,3);
let sum = num1 => num1;