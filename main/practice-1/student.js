const Person = require('./person');

module.exports = class Student extends Person{
    constructor(name, age, num){
        super(name, age);
        this.klass = num;
    }

    introduce(){
       return super.introduce() + ' I am a Student. I am at Class ' + this.klass + '.';
    }
}