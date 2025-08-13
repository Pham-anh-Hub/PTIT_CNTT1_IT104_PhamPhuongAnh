"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    id;
    constructor(id, name) {
        super(name);
        this.id = id;
    }
    displayInfo() {
        console.log(`MSV: ${this.id} - Tên: ${this.name}`);
    }
}
class Teacher extends Person {
    subject;
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
//# sourceMappingURL=PTIT_CNTT1_IT104_Session07_Bai4.js.map