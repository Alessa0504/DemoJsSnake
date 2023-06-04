class Snake {
    // 表示蛇头的元素
    head: HTMLElement
    // 表示蛇的身体(包括蛇头)
    bodies: HTMLCollection
    // 表示蛇容器
    element: HTMLElement

    constructor() {
        //querySelector('#snake > div'):获取snake元素中的第一个div
        this.head = document.querySelector('#snake > div')!
        this.element = document.getElementById('snake')!
        this.bodies = this.element.getElementsByTagName('div')
    }

    /**
     * 获取蛇头坐标
     */
    get X() {
        return this.head.offsetLeft
    }

    get Y() {
        return this.head.offsetTop
    }

    /**
     * 设置蛇头坐标
     * @param value
     * @constructor
     */
    set X(value) {
        this.head.style.left = value + 'px'
    }

    set Y(value) {
        this.head.style.top = value + 'px'
    }

    /**
     * 增加蛇身体方法 --即往蛇容器的元素中添加一个div
     */
    addBody() {
        //向element中添加一个div
        //insertAdjacentHTML:添加一段html代码; beforeend:在element的结束标签的前面加一个<div></div>标签，即添加在element最后
        this.element.insertAdjacentHTML('beforeend', "<div></div>")
    }
}

export default Snake