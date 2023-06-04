//引入其他类
import Snake from "./Snake";
import Food from "./Food";
import ScorePanel from "./ScorePanel";

/**
 * 游戏控制器类，控制其他所有类
 */
class GameControl {
    //定义3个属性
    snake: Snake  //蛇
    food: Food  //食物
    scorePanel: ScorePanel  //记分牌
    //创建一个属性来存储蛇的移动方向，也就是按键的方向
    direction: string = ''

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
    }

    /**
     * 键盘按下的响应函数
     * ArrowUp
     * ArrowDown
     * ArrowLeft
     * ArrowRight
     */
    keydownHandler(event: KeyboardEvent) {
        // console.log(event.key);
        //需要检查event.key是否合法，也就是用户是否按了正确的按键(上/下/左/右)

        //修改direction属性
        this.direction = event.key  //这里的this默认是调用方document，所以需要用bind(this)

    }
}

export default GameControl