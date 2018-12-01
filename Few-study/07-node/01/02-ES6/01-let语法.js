//之前定义变量用var   
//  1-全局作用域
//  2-函数作用域  
//  变量会提升


// var num = 100; 

// function num() {
//     console.log('黑黑');
// }

// num(); 

//定义变量3中方式
//  var  let  const 
// let定义变量
// 块级作用域  { }
// 变量不会被提升
// 变量不能被重复定义 


// let num = 100; 
// let age = 100; 
// let sex = 100; 
// let test = 100; 

// let num = 1;  //变量不能被重复定义  
// console.log(num);


if (true) {
    // var num = 100; 
    let num = 100;
    console.log(num);    
}
 
console.log(num);





