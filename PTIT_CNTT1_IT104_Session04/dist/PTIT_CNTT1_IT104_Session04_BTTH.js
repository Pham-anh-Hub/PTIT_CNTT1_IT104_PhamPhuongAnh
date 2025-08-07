"use strict";
let studentList = [];
const addStudent = (newStudent) => {
    studentList.push(newStudent);
};
const updateStudent = (id, newStudent) => {
    const indexToUpdate = studentList.findIndex((student) => student.id === id);
    if (indexToUpdate === -1) {
        console.log("Không tìm thấy sinh viên");
    }
    else {
        studentList[indexToUpdate].name = newStudent.name;
        studentList[indexToUpdate].age = newStudent.age;
        studentList[indexToUpdate].subjects = newStudent.subjects;
    }
};
//Hàm xóa sinh viên
const deleteStudent = (id) => {
    const indexToDelete = studentList.findIndex((student) => student.id === id);
    if (indexToDelete === -1) {
        console.log("Không tìm thấy sinh viên cần xóa");
    }
    else {
        studentList.splice(indexToDelete, 1);
    }
};
// Tính điểm trung bình của sinh viên
// kiểm tra điểm là số hay chuỗi
const isNumber = (score) => {
    return typeof score === "number";
};
const convertScoreToNumber = (score) => {
    const scoreMap = {
        "A": 10,
        "B": 8,
        "C": 6,
        "D": 4,
    };
    return scoreMap[score];
};
const calcuAvg = (student) => {
    const total = student.subjects.reduce((sum, subject) => {
        if (isNumber(subject.score)) {
            return sum + subject.score;
        }
        else {
            return sum + convertScoreToNumber(subject.score);
        }
    }, 0);
    const avg = total / student.subjects.length;
    return avg;
};
const ranking = (student) => {
    const avg = calcuAvg(student);
    if (avg >= 8.5) {
        return `Học sinh giỏi`;
    }
    else if (avg < 8.5 && avg >= 6.5) {
        return `Học sinh khá`;
    }
    else if (avg >= 5 && avg < 6.5) {
        return `Học sinh TB`;
    }
    else if (avg >= 0 && avg < 5) {
        return `Học sinh yếu`;
    }
};
const newStudents = {
    id: 1,
    name: "Nguyễn Văn A",
    age: 19,
    subjects: [
        {
            subjectName: "HTML",
            score: "A"
        },
        {
            subjectName: "CSS",
            score: 7,
        }
    ]
};
addStudent(newStudents);
console.log("Điểm trung bình: ", calcuAvg(newStudents));
console.log("Rank: ", ranking(newStudents));
