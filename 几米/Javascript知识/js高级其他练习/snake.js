(function (window) {
    //小蛇身体的每个部分有宽,高,颜色,left的值,top的值,小蛇整体为多个span或者div组成的整体,可以用一个有序的数组表示
    //小蛇的构造函数
    function Snakes(options) {
        //不能用this.options
        options = options || {};
        this.width = options.width || 20;
        this.height = options.height || 20;
        this.headColor = options.headColor || "red";
        this.bodyColor = options.bodyColor || "orange";
        this.direction = options.direction || "right";
        this.body = options.body || [{
                x: 2,
                y: 0
            },
            {
                x: 1,
                y: 0
            },
            {
                x: 0,
                y: 0
            }
        ];
    };
    //为小蛇的原型添加初始化的方法
    Snakes.prototype.init = function (target) {
        for (var i = 0; i < this.body.length; i++) {
            var span = document.createElement("span");
            span.style.width = this.width + "px";
            span.style.height = this.height + "px";
            span.style.backgroundColor = i === 0 ? this.headColor : this.bodyColor;
            span.style.position = "absolute";
            span.style.left = this.body[i].x * this.width + "px";
            span.style.top = this.body[i].y * this.height + "px";
            target.appendChild(span);
        }
    }
    //现在小蛇已经在地图上显示了 ,之后需要为小蛇添加移动的方法
    Snakes.prototype.move = function (target, food) {
        //小蛇移动的方法其实是改变每个身体的left和top值
        //具体的方法是复制头部的坐标 x+1 或者 y+1 删除尾部的左边
        // 判断小蛇前进的方向
        var newHead = {
            x: this.body[0].x,
            y: this.body[0].y
        };
        switch (this.direction) {
            case "up":
                newHead.y--;
                break;
            case "down":
                newHead.y++;
                break;
            case "left":
                newHead.x--;
                break;
            case "right":
                newHead.x++;
                break;
        };
        // console.log(newHead.x,newHead.y);
        // console.log(food.x, food.y);


        //在这里判断小蛇有没有吃到食物,又吃到食物就不删除最后的蛇尾,当小蛇头的x,y坐标 和食物的x,y坐标相同的时候
        if (newHead.x === food.x && newHead.y === food.y) {
            // console.log("撞到了");

            //如果小蛇吃到食物,就删除食物这个div并重新创建一个食物的div
            var dv = target.querySelector("div");
            target.removeChild(dv)
            food.init(target);
        } else {
            //如果没有吃到就删除最后一个部分的身体
            this.body.pop();
        }

        this.body.unshift(newHead);
        var spans = map.querySelectorAll("span");
        // console.log(spans);

        for (var i = 0; i < spans.length; i++) {
            map.removeChild(spans[i]);

        }

        //这里的this
        this.init(target);

    }
    window.Snakes = Snakes;
})(window);