// Với javascript
// let fullName = "Rikkei Education";
// fullName = 20; /// Lỗi không thể gán lại giá trị bằng kiểu dữ liệu khác
// cơ chế dự đoán kiểu dữ liệu


// Type annotation
let fullName : string = "Rikkei Education"
console.log(fullName);
let phone : number = 987654321;
console.log(phone);

let number : number[] = [1,2,3,4,5,6];
console.log(number)

let isTrue : boolean = true;
console.log(isTrue);

const user : null = null;

// Khai báo hàm 
const sum = (a : number, b : number) : number => {
    return a + b;
}

const logger = () : void => {
    console.log("logger");
}

// Khai báo kiểu enum
enum Gender{
    FEMALE = "Female",
    MALE = "Male",
    OTHER = "Other",
}

// Khai báo kiểu dữ liệu array, object
interface Student {
    id : number;
    name: string;
    age : number;
    score ?: number[]; // ?: mang tính optional
    gender ?: Gender;

}

const student : Student = {
    id: 1,
    name: "Nguyễn Văn A",
    age : 20,
    gender: Gender.MALE,
}
console.log(student);


const studentList : Student[] = [
    {
        id: 2,
        name: "Nguyen Van B",
        age : 19,
    },
    {
        id: 3,
        name: "Nguyen Van C",
        age : 19,
    }
]



