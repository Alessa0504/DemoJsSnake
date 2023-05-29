// 引入样式
import './style/index.less';
//定义食物类Food
class Food {
    constructor() {
        this.element = document.getElementById('food'); //直接通过html中的div id获取到对象赋值给element；后面加!表示该div id的元素一定能获取到，不会为空，不加!会报错
    }
    //定义获取食物x轴坐标方法
    get X() {
        return this.element.offsetLeft;
    }
    //定义获取食物y轴坐标方法
    get Y() {
        return this.element.offsetTop;
    }
    //修改食物的位置
    change() {
    }
}
//test代码
const food = new Food();
console.log(food.X, food.Y);
