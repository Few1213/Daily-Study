// 变量 =  (参数列表) => { 函数体 }
// 在箭头函数中，如果参数列表只有一个参数，小括号（）可以省略
// function say() {
//     console.log('你好，春哥');    
// }

// function big(num) {
//     console.log(num * 2);    
// }

// function add(n1, n2) {
//     console.log(n1 * n2 );    
// }

let say = () => {
    console.log('你好，春哥'); 
}
 
// let big = (num) => {
//     console.log(num * 2);    
// }

let big = num => {
    console.log(num * 2);    
}

let add = (n1, n2) => {
    console.log(n1 * n2);    
}

say();
big(100);
add(5, 6);