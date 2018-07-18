// Write your code here
// 1，代码逻辑有点混乱； 2，bool型数据以is或has开头 3，命名规范
module.exports = class Class {
    constructor(number){
        this.number = number;
        this.leader = -1;
    }

    assignLeader(student){
        student.klass.leader = 1;
    }
}