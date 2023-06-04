// 引入样式
import './style/index.less';
// 引入需要用到的模块 -模块化
// import Food from './modules/Food';

//test代码
// const food = new Food();
// food.change();
// console.log(food.X, food.Y);

// import ScorePanel from './modules/ScorePanel';

import GameControl from "./modules/GameControl";

const gameControl= new GameControl()
//定时执行函数
// setInterval(()=> {
//     console.log(gameControl.direction);
// }, 1000)
