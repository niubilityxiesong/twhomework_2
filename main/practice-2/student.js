const Person = require('./person');
const Class = require('../../main/practice-2/class');

module.exports = class Student extends Person{
    constructor(name, age, num){
        super(name, age);
        this.klass = num;
    }

    introduce(){
        if(this.klass.leader === -1){
            return super.introduce() + ' I am a Student. I am at Class ' + this.klass.number + '.';
        }
        else {
            return super.introduce() + ' I am a Student. I am Leader of Class ' + this.klass.number + '.';

        }
    }
}
