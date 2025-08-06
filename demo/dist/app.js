"use strict";
// Với javascript
// let fullName = "Rikkei Education";
// fullName = 20; /// Lỗi không thể gán lại giá trị bằng kiểu dữ liệu khác
// cơ chế dự đoán kiểu dữ liệu
Object.defineProperty(exports, "__esModule", { value: true });
// Type annotation
let fullName = "Rikkei Education";
console.log(fullName);
let phone = 987654321;
console.log(phone);
let number = [1, 2, 3, 4, 5, 6];
console.log(number);
let isTrue = true;
console.log(isTrue);
const user = null;
// Khai báo hàm 
const sum = (a, b) => {
    return a + b;
};
const logger = () => {
    console.log("logger");
};
// Khai báo kiểu enum
var Gender;
(function (Gender) {
    Gender["FEMALE"] = "Female";
    Gender["MALE"] = "Male";
    Gender["OTHER"] = "Other";
})(Gender || (Gender = {}));
const student = {
    id: 1,
    name: "Nguyễn Văn A",
    age: 20,
    gender: Gender.MALE,
};
console.log(student);
const studentList = [
    {
        id: 2,
        name: "Nguyen Van B",
        age: 19,
    },
    {
        id: 3,
        name: "Nguyen Van C",
        age: 19,
    }
];
//# sourceMappingURL=app.js.map