interface Subject {
    subjectName : string;
    score : number | string;
}

interface Students {
    id : number
    name : string;
    age : number;
    subjects : Subject[];
}

let studentList : Students[] = [];

const addStudent = (newStudent : Students) : void => {
    studentList.push(newStudent);
}

const updateStudent = (id: number, newStudent : Students) => {
    const indexToUpdate = studentList.findIndex((student) => student.id === id);
    if (indexToUpdate === -1) {
        console.log("Không tìm thấy sinh viên");
    } else {
        studentList[indexToUpdate].name = newStudent.name;
        studentList[indexToUpdate].age = newStudent.age;
        studentList[indexToUpdate].subjects = newStudent.subjects;
    
    }
};

//Hàm xóa sinh viên
const deleteStudent = (id : number) => {
    const indexToDelete = studentList.findIndex((student) => student.id === id);
    if(indexToDelete === -1){
        console.log("Không tìm thấy sinh viên cần xóa");
    }else{
        studentList.splice(indexToDelete,1);
    }
}


// Tính điểm trung bình của sinh viên

// kiểm tra điểm là số hay chuỗi

const isNumber = (score : number | string) => {
    return typeof score  === "number";
}

const convertScoreToNumber = (score : string) => {
    const scoreMap : {[key: string] : number} = {
        "A" : 10,
        "B" : 8,
        "C" : 6,
        "D" : 4,
    }
    return scoreMap[score];
}

const calcuAvg = (student : Students) : number  => {
    const total = student.subjects.reduce((sum, subject) => {
        if(isNumber(subject.score)){
            return sum + subject.score;
        }else{
            return sum + convertScoreToNumber(subject.score);
        }
    },0);
    const avg =  total/student.subjects.length;
    return avg;
}

const ranking = (student : Students) => {
    const avg = calcuAvg(student);
    if (avg >=8.5) {
        return `Học sinh giỏi`;
    }else if(avg <8.5 && avg >= 6.5){
        return `Học sinh khá`
    }else if(avg >= 5 && avg <6.5){
        return `Học sinh TB`
    }else if(avg >=0 && avg < 5){
        return `Học sinh yếu`
    }
}

const newStudents : Students = {
    id : 1,
    name : "Nguyễn Văn A",
    age : 19,
    subjects : [
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
console.log("Điểm trung bình: ",calcuAvg(newStudents));
console.log("Rank: ", ranking(newStudents));




