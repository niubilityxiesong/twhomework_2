const Person = require('./person');

module.exports = class Student extends Person{
    constructor(name, age, num){
        super(name, age);
        this.clazz = num;
    }

    introduce(){
        if(this.clazz.leader === -1){
            return super.introduce() + ' I am a Student. I am at Class ' + this.clazz.number + '.';
        }
        else {
            return super.introduce() + ' I am a Student. I am Leader of Class ' + this.clazz.number + '.';

        }
    }
}