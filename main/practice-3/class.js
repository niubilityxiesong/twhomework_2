// Write your code here
module.exports = class Class {
    constructor(number){
        this.number = number;
        this.leader = -1;
        this.invited = -1;
    }

    assignLeader(student){
        student.clazz.leader = 1;
        if(student.clazz.invited === 1){
            return 'Assign team leader successfully.';
        }
        else {
            return 'It is not one of us.';
        }
    }

    appendMember(student){

        student.clazz.invited = 1;
    }

}