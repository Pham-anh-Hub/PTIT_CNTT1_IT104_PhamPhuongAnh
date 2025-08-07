"use strict";
let newStudent = {
    name: "Nguyễn Văn A",
    age: 19,
    email: "nva@gmail.com",
};
const greetStudent = (student) => {
    console.log(`Tên tôi là ${student.name}, tôi ${student.age} và email của tôi là ${student.email}`);
};
greetStudent(newStudent);
