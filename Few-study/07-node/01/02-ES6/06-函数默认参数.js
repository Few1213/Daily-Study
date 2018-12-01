// function add(n1, n2) {
//     n1 = n1 || 0;
//     n2 = n2 || 0;
//     console.log(n1 + n2);    
// }
//如果传递了参数，就去参数的值，不传参就去默认值 ， 本质上就是备胎

function add(n1 = 0, n2 = 0) {
    console.log(n1 + n2);    
}

// add(100, 1);
// add(100);
// add();