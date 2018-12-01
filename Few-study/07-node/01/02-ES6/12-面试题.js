//用for循环加定时器 setTimeout 每秒输出一个i值 

for (let i = 0; i < 10; i++) {
    (function (i) { 
        setTimeout(function (i) { 
            console.log(i);     
        },i*1000)
     })(i);
}













// for (var i = 0; i < 10; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }

// for (var i = 0; i < 10; i++) {
//     (function (i) {
//         setTimeout(function () {
//             console.log(i);
//         }, i * 1000);
//     })(i); 
// }

for (let i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, i * 1000); //i = 0;
}{
    setTimeout(function () {
        console.log(i);
    }, i * 1000); // i = 1
}{
    setTimeout(function () {
        console.log(i);
    }, i * 1000);  // i = 2 
}{
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}{
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}

