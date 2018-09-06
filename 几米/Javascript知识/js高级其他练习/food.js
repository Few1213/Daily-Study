(function (window) {
    //食物: 食物有宽,高,背景颜色,left,top  这些食物的属性应该在食物的构造函数上存在 通过实例化对象创造出这个食物
    //食物要在地图上不断的显现 ,所以为了共享数据节省内存空间,让食物显现的方法应该在食物的原型对象上

    //食物的构造函数
    function Food(options) {
        //在这里的逻辑运算符的意思是如果真则返回真
        options = options || {};
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.color = options.color || "green";
        this.x = options.x || 0;
        this.y = options.y || 0;
    }
    //在食物的原型中添加让它显现的方法
    Food.prototype.init = function (target) {
        //食物要在地图上显示需要创建一个div并赋予它相应的属性
        var div = document.createElement("div");
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.style.backgroundColor = this.color;
        //因为食物的横纵坐标值是随机的,
        //在设置left和top之前必须要改变其定位属性
        div.style.position = "absolute";
        this.x = parseInt(Math.random() * (target.offsetWidth / this.width));
        this.y = parseInt(Math.random() * (target.offsetHeight / this.height));
        div.style.left = this.x * this.width + "px";
        div.style.top = this.y * this.height + "px";
        target.appendChild(div);
    };
    window.Food = Food;
})(window);