var Student = /** @class */ (function () {
    function Student(name, rollNo) {
        this.name = name;
        this.rollNo = rollNo;
    }
    Student.prototype.showRollNo = function () {
        console.log("Roll No:", this.rollNo);
    };
    return Student;
}());
var s2 = new Student("suma", 101);
console.log("Name:", s2.name);
s2.showRollNo();
