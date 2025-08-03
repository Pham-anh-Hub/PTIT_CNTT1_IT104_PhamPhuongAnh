class Student {
    constructor(id, name, yOb) {
        this.id = id;
        this.name = name;
        this.yOb = yOb;
    }
    age() {
        const date = new Date();
        return date.getFullYear() - this.yOb;
    }
}
const student = new Student(1, "Phanh", 2006);
console.log(student.age());

// Lớp con 
class ItStudent extends Student {
    constructor(id, name, yOb, email) {
        super(id, name, yOb);
        this.email = email;
    }
}
const itStudent = new ItStudent(2, "Ph Anh", 2006, "ppanh@gmail.com");
console.log(itStudent);

