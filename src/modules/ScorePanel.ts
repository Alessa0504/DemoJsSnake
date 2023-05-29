/**
 * 定义计分牌类
 */
class ScorePanel {
    //记录分数和等级
    score = 0;
    level = 1;
    //分数和等级所在的元素，在构造函数中初始化
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    //设置变量限制等级
    maxLevel: number;
    //设置多少分升一级变量
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    //设置加分的方法
    addScore() {
        this.score++;
        this.scoreEle.innerHTML = this.score + '';  //展示到元素上
        //每10分升一级
        if (this.score % this.upScore  === 0) {
            this.levelUp();
        }
    }

    //设置升级的方法
    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel;