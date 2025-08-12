"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(id, name) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`MSV: ${this.id} - Tên: ${this.name}`);
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.subject = subject;
    }
    displayInfo() {
        console.log(`Tên GV: ${this.name} - môn: ${this.subject}`);
    }
}
const newStudent = new Student("001", "Nguyễn Văn A");
const newTeacher = new Teacher("Lê Thị B", "English");
newStudent.displayInfo();
newTeacher.displayInfo();
