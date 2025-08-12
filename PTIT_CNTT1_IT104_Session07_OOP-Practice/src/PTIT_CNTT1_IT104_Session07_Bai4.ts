abstract class Person {
    name : string;
    constructor(name : string){
        this.name = name;
    }
    abstract displayInfo() : void;
}

class Student extends Person {
    id : string;
    constructor(id : string, name : string) {
        super(name);
        this.id = id;
    }
    displayInfo(): void {
        console.log(`MSV: ${this.id} - Tên: ${this.name}`);
    }
}

class Teacher extends Person{
    subject : string;
    constructor(name: string, subject : string){
        super(name);
        this.subject = subject;
    }
    displayInfo(): void {
        console.log(`Tên GV: ${this.name} - môn: ${this.subject}`);
    }
}


const newStudent = new Student("001", "Nguyễn Văn A");
const newTeacher = new Teacher("Lê Thị B", "English");
newStudent.displayInfo();
newTeacher.displayInfo();