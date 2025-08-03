import * as helper from "./helpers.js";
// Khoi tao doi tuong
class Student {
    constructor(id, name, age, scores) {
        // this đại diện cho lớp cha chứa this
        this.id = id;
        this.name = name;
        this.age = age;
        this.scores = scores;
    }
}

// Khởi tạo 5 đối tượng Student
const student1 = new Student(1, "Nguyễn Văn D", 19, [5, 8, 9]);
const student2 = new Student(2, "Nguyễn Văn F", 20, [6, 8, 9]);
const student3 = new Student(3, "Nguyễn Văn E", 18, [7, 8, 9]);
const student4 = new Student(4, "Nguyễn Văn A", 20, [2, 8, 9]);
const student5 = new Student(5, "Nguyễn Văn B", 19, [10, 8, 9]);

// Tạo mảng chứa 5 sinh viên vừa tạo
const studentList = [student1, student2, student3, student4, student5];
// Mảng chứa điểm trung bình toàn bộ lớp

// Trả về thông tin sv dạng chuỗi
console.log("Sinh viên có id ", Math.floor(Math.random() * 5) + 1);
console.log(helper.getStudentByID(studentList, Math.floor(Math.random() * 5) + 1))

console.log("Sinh viên có id ", Math.floor(Math.random() * 5) + 1);
console.log(helper.getStudentByID(studentList, Math.floor(Math.random() * 5) + 1));

// Trả về sinh viên có điểm trung bình cao nhất
console.log("Top student: ", helper.getTopStudent(studentList));

// Trả về điểm trung bình của cả lớp
helper.avgOfClass(studentList);

// Trả về các sinh viên có điểm trung bình trong khoảng [min, max]
console.log(helper.filterListStudent(studentList, 8, 10));

// Trả về danh sách sinh viên sắp xếp theo Alphabet
console.log(helper.sortStudentsByName(studentList));
