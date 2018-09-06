(function (window) {
    //封装一个游戏函数 用来进行游戏的初始化和控制小蛇前进的方向
    function Game(target) {
        // 食物和小蛇的初始化
        this.food = new Food();
        this.snake = new Snakes();
        this.map = target;

    }
    //初始化蛇,将蛇渲染到地图上
    Game.prototype.init = function () {
        this.food.init(this.map);
        this.snake.init(this.map);
    }
    //小蛇移动和停止
    Game.prototype.start = function () {
        var that = this;

        var timeId = setInterval(function () {
            that.snake.move(that.map, that.food);
            //判断游戏停止的条件,撞到墙和撞到自己
            var flag = that.gameOver();
            if (flag) {
                alert("你这个辣鸡");
                clearInterval(timeId)
            }


        }, 200);
    }

    //添加游戏的键盘判断事件
    Game.prototype.bindEvent = function () {
        var that = this;
        document.addEventListener("keyup", function (e) {

            switch (e.keyCode) {
                case 37: //左
                    //判断不能返回掉头

                    if (that.snake.direction === "right") {
                        return
                    }
                    that.snake.direction = "left";
                    break;
                case 38: //上
                    //判断不能返回掉头
                    if (that.snake.direction === "down") {
                        return
                    }
                    that.snake.direction = "up";
                    break;
                case 39: //右
                    //判断不能返回掉头
                    if (that.snake.direction === "left") {
                        return
                    }
                    that.snake.direction = "right";
                    break;
                case 40: //下
                    //判断不能返回掉头
                    if (that.snake.direction === "up") {
                        return
                    }
                    that.snake.direction = "down";
                    break;
            }

        })
    }
    //游戏的停止条件
    Game.prototype.gameOver = function () {

        var isOver = false;
        var that = this;

        var head = that.snake.body[0];
        if (head.x < 0 || head.y < 0 || head.x > map.offsetWidth / that.snake.width - 1 || head.y > map.offsetHeight / that.snake.height - 1) {
            isOver = true;
        }

        for (var i = 4; i < that.snake.body.length; i++) {
            if (head.x === that.snake.body[i].x && head.y === that.snake.body[i].y) {
                isOver = true;
            }
        }
        return isOver;
    }
    // 游戏开始的封装
    Game.prototype.startGame = function () {
        this.init();
        this.start()
        this.bindEvent();
    }

    window.Game = Game;
})(window);