const Person = require('./person');

module.exports = class Teacher extends Person{
    constructor(name, age, classes){
        super(name, age);
        this.clazzes = classes;
    }

    introduce(){
        if(this.clazzes.length === 0){
            return super.introduce() + ' I am a Teacher. I teach No Class.'
        }
        else {
            return super.introduce() + ' I am a Teacher. I teach Class ' + this.clazzes[0].number + ',' + this.clazzes[1].number + '.';
        }
    }

    isTeaching(student){
        for (let i = 0; i < this.clazzes.length; i++) {
            if(this.clazzes[i].number === student.clazz.number){
                return true;
            }
        }
        return false;
    }

    notifyStudentAppended(){

    }
}