// //1.  [22, 33, 44, 55, 66, 77] 数组放大1倍
// let arr = [22, 33, 44, 55, 66, 77];

// let r = arr.map(v => v =v * 2);
// // arr.forEach(function (v,i) { 
// //     arr[i] = v*3;
// //  });
// arr.forEach((v, i )=> arr[i] = v * 3);
// console.log(r);
// console.log(arr);





// let r = arr.map(function (v) {
//     return v * 2;
// })

// let r = arr.map((v) => { return v * 2 });
// let r = arr.map( v => v * 2);

// console.log(r);


// //2.  let money = [1000, 5000, 20000, 3000, 10000, 800, 1500]; //找到大于2000的工资
// let money = [1000, 5000, 20000, 3000, 10000, 800, 1500];

// let r1 = money.filter(v => v > 2000);
// console.log(r1);


// let r1 = money.filter(function (v) {
//     return v > 2000;
// })

// let r1 = money.filter(v => v > 2000);

// console.log(r1);



//练习(用箭头函数来实现)
// 1. 有一个数组[1,3,5,7,9,2,4,6,8,10],请对数组进行排序 sort();
// 2. 有一个数组['a','ccc','bb','dddd'],请按照字符串长度对数组进行排序 对数组的length进行排序 
// 3. 有一个数组，[57,88,99,100,33,77],请保留60分以上的成绩，返回一个新的数组

var arr = [57,88,99,100,33,77];

var arr1 = arr.filter(v => v > 60 );
console.log(arr1);




// let arr1 = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];

// let r = arr1.sort((a,b)=> a-b);
// console.log(r);





// let r = arr1.sort(function (a, b) {
//     return a - b;
// });

// let r = arr1.sort((a, b) => a - b);

// console.log(r);

let strArr = ['a', 'ccc', 'bb', 'dddd'];

// let r = strArr.sort(function (a, b) {
//     return a.length - b.length;
// })

// let r = strArr.sort((a, b) => a.length - b.length);

// console.log(r);