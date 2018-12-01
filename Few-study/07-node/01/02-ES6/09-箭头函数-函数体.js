// 函数体简化：
// 如果函数体只有一行代码，可以省略{} 和 return 

// function big(num) {
//     console.log('我是big方法')
//     console.log(num * 2);    
// }

// function big1(num) {   
//     console.log(num * 2);    
// }

let big = num => {
    console.log('我是big方法');
    console.log(num * 2); 
}
//最终结果
let big1 = num => console.log(num * 2);  

big1(100);





// function add(n1, n2) {
//     console.log('我是add方法');    
//     return n1 + n2;   
// }

// function add1(n1, n2) {
//     return n1 + n2;   
// }

let add = (n1, n2) => {
    console.log('我是add方法');
    return n1 + n2;
};

// let add1 = (n1, n2) => {
//     return n1 + n2;   
// }

let add1 = (n1, n2) => n1 + n2; 
console.log(add1(100, 300));

