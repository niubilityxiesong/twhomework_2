// Write your code here
module.exports = class Class {
    constructor(number){
        this.number = number;
        this.leader = -1;
        this.invited = -1;
        this.teacher = [];
        this.students = [];
    }

    assignLeader(student){
        student.clazz.leader = 1;
        if(student.clazz.invited === 1){
            for (let i = 0; i < this.teacher.length; i++) {
                this.teacher[i].notifyLeaderAssigned(student.name + ' become Leader of Class ' + this.number);
            }
            return 'Assign team leader successfully.';
        }
        else {
            return 'It is not one of us.';
        }
    }

    appendMember(student){
        this.students.push(student);
        for (let i = 0; i < this.teacher.length; i++) {
            this.teacher[i].notifyStudentAppended(student.name + ' has joined Class ' + student.clazz.number);
        }
        student.clazz.invited = 1;
    }

}