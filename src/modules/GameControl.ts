//引入其他类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";
import snake from "./Snake";

/**
 * 游戏控制器类，控制其他所有类
 */
class GameControl {
    //定义3个属性
    snake: Snake  //蛇
    food: Food  //食物
    scorePanel: ScorePanel  //记分牌
    //创建一个属性来存储蛇的移动方向，也就是按键的方向
    direction: string = 'ArrowRight'  //初始化是'ArrowRight'方向
    //创建一个属性用来记录游戏是否结束
    isLive = true  //true代表蛇还活着，游戏没结束

    constructor() {
        this.snake = new Snake()
        this.food = new Food()
        this.scorePanel = new ScorePanel()
        this.init()
    }

    /**
     * 游戏的初始化方法，调用后即游戏开始
     */
    init() {
        //绑定键盘按下的事件
        //!注意：js中的this是调用方，这里是document调用了keydownHandler，所以keydownHandler中的this是document
        //解决：bind(this)，创建一个新函数，绑定成全局this
        document.addEventListener('keydown', this.keydownHandler.bind(this))  //keydownHandler是键盘按下的事件的回调函数
        //调用run方法使蛇移动
        this.run()
    }

    /**
     * 键盘按下的响应函数
     * event.key:
     *   ArrowUp
     *   ArrowDown
     *   ArrowLeft
     *   ArrowRight
     */
    keydownHandler(event: KeyboardEvent) {
        // console.log(event.key);
        //需要检查event.key是否合法，也就是用户是否按了正确的按键(上/下/左/右)

        //修改direction属性
        this.direction = event.key  //这里的this默认是调用方document，所以需要用bind(this)

    }

    /**
     * 根据方向(this.direction)来使蛇的位置改变
     * 向上：top减少
     * 向下：top增加
     * 向左：left减少
     * 向右：left增加
     */
    run() {
        //获取蛇现在的坐标
        let X = this.snake.X
        let Y = this.snake.Y
        switch (this.direction) {
            case "ArrowUp":
                Y -= 10   //移动一格
                break
            case "ArrowDown":
                Y += 10
                break
            case "ArrowLeft":
                X -= 10
                break
            case "ArrowRight":
                X += 10
                break
        }
        //修改蛇的X和Y值
        this.snake.X = X
        this.snake.Y = Y

        //防止按键按一次蛇才动一次，需要开启定时调用
        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30)  //xxms后再调用run方法，这里随着等级会加快移动速度
    }
}

export default GameControl