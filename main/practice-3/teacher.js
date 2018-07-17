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
            if(student.clazz.number === this.clazzes[i].number){
                if(this.clazzes[i].invited === 1){
                    return true;
                }
            }
        }
        return false;
    }

    notifyStudentAppended(){

    }
}