type Student = {
    name : string;
    age :number;
    email : string;
};

let newStudent : Student = {
    name : "Nguyễn Văn A",
    age : 19,
    email : "nva@gmail.com",
}

const greetStudent = (student : Student) => {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} và email của tôi là ${student.email}`);
}

greetStudent(newStudent);
