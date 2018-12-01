// forEach(function (v, i, arr){ })  
// forEach(); 将数组中每个元素，依次交给回调函数进行处理；
// map(); 此方法会先准备一个空数组， 在依次将每个元素交给回调函数进行处理， 会将每个元素处理完成结果，存放到数组中，作为返回值返回（新数组）
// filter() 返回数组中满足条件元素
// some()   判断数组中至少有一个元素满足条件 
// every()  判断数组中的所有元素是否满足条件
// find();  返回满足条件的第一个元素
// findIndex(); 返回满足条件的第一个元素的索引值 

// let arr = [22, 33, 44, 55, 66];

// v 当前遍历元素
// i 当前索引值 
// arr1 被遍历数组 
// 将数组放大1倍
// arr.forEach(function (v, i, arr1) {
//     // console.log(v , i, arr1);    
//     arr1[i] =  v * 2; 
// });

// let arr = [22, 33, 44, 55, 66];
// // console.log(arr);
// // [44, 66, 88, 110, 132]
// let r = arr.map(function (v, i, arr1) {
//     return v * 3;
// })

// console.log(r);

// let money = [1000, 5000, 20000, 3000, 10000, 800, 1500];

// 获取工资大于3000的数据
// []
// let r = money.filter(function (v, i, arr) {
//     return v > 3000;  //返回满足条件的数据 
// });

// console.log(r);

// let money = [1000, 5000, 20000, 3000, 10000, 800, 1500];
// 判断是否有人工资大于10000 , 需要一个或者一个以上元素满足条件 
// let r = money.some(function (v, i, arr1) {
//     return v > 10000;
// });

// console.log(r);

//判断是否所有人工资都大于1000 
// let r = money.every(function (v) {
//     return v > 100;
// });
// console.log(r);



let money = [1000, 5000, 20000, 3000, 10000, 800, 1500];

//找到工资大于5000的人
let r = money.find(function (v) {
    return v > 5000;
});

console.log(r);

let index = money.findIndex(function (v) {
    return v > 5000;
})

console.log(index);









