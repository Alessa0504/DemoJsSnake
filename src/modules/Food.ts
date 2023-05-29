/**
 * 定义食物类Food
 */
class Food {
    //定义一个属性表示食物所对应的元素
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('food')!;  //直接通过html中的div id获取到对象赋值给element；后面加!表示该div id的元素一定能获取到，不会为空，不加!会报错
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
        //生成随机位置
        //食物的位置最小是0，最大是290(舞台300-10食物自身)，蛇移动一次就是一格(10)，所以要求食物坐标必须是10的倍数
        let top = Math.round(Math.random() * 29) * 10;    // Math.round四舍五入，目的是为了包含0和29
        let left = Math.round(Math.random() * 29) * 10;
        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

//test代码
// const food = new Food();
// food.change();
// console.log(food.X, food.Y);

export default Food;  //Food类作为默认模块暴露出去