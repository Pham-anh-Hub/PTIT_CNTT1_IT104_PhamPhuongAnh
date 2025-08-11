"use strict";
class Student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    setName(newName) {
        if (newName !== undefined || "") {
            this.name = newName;
        }
    }
}
class Classroom {
    constructor(students) {
        this.students = students;
    }
    showStudent() {
        if (this.students.length > 0) {
            this.students.forEach(student => {
                console.log(`${student.getId()} - ${student.getName()}`);
            });
        }
        else {
            console.log("Danh sách lớp trống");
        }
    }
    addStudent(student) {
        this.students.push(student);
    }
    // lọc học sinh theo id
    filterStudent(id) {
        const filter = this.students.filter((student) => student.getId() === id);
        return filter;
    }
    addStudentInClass(changeStu, newClass) {
        const targetIndex = this.students.findIndex((student) => student.getId() === changeStu.getId());
        const targetStudent = this.students[targetIndex];
        newClass.push(targetStudent);
        this.students.splice(targetIndex, 1);
    }
    editStudent(id, newName) {
        const targetStudent = this.students.find((student) => student.getId() === id);
        if (targetStudent !== undefined) {
            targetStudent.setName(newName);
        }
    }
}
const mainClass = new Classroom([]);
const newClassroom1 = new Classroom([]);
const newClassroom2 = new Classroom([]);
mainClass.addStudent(new Student(1, "Nguyễn Văn A"));
mainClass.addStudent(new Student(2, "Nguyễn Thị B"));
mainClass.addStudent(new Student(3, "Lê Văn C"));
mainClass.addStudent(new Student(4, "Nguyễn Văn D"));
mainClass.addStudent(new Student(5, "Trần Văn E"));
mainClass.addStudent(new Student(6, "Nguyễn Văn F"));
// Test bài 6
console.log("MainClass: ");
mainClass.showStudent();
console.log("\tClass 1");
for (let i = 0; i < 3; i++) {
    mainClass.addStudentInClass(mainClass.students[0], newClassroom1.students);
}
newClassroom1.showStudent();
console.log("\tClass 2");
for (let i = 0; i < 3; i++) {
    mainClass.addStudentInClass(mainClass.students[0], newClassroom2.students);
}
newClassroom2.showStudent();
// Test bài 7
newClassroom1.addStudentInClass(newClassroom1.students[0], mainClass.students);
newClassroom1.addStudentInClass(newClassroom1.students[0], mainClass.students);
newClassroom2.addStudentInClass(newClassroom2.students[0], mainClass.students);
newClassroom2.addStudentInClass(newClassroom2.students[0], mainClass.students);
console.log("Class - 1 (after)");
newClassroom1.showStudent();
console.log("Class - 2 (after)");
newClassroom2.showStudent();
console.log("\tMain Class");
mainClass.showStudent();
