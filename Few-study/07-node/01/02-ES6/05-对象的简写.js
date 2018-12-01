// 1- 在对象中，如果属性名和变量名相同的话，可以省略一个
// 2- 在对象中，方法也可以简写， 不写function 


let name = '大春哥';
let age = 19;
let gender = '男'; 

let obj = {
    name: name, 
    age: age, 
    gender: gender, 
    hobby: 'bug',
    say: function () {
        console.log('hi, 你们代码三遍敲完了吗?');        
    },
    hi: function () {
        console.log('hi');        
    }
}


let obj1 = {
    name, 
    age, 
    gender, 
    hobby: 'code', 
    say() {
        console.log('hi, 你们代码三遍敲完了吗?');  
    }, 
    hi() {
        console.log('hi');        
    }
}
