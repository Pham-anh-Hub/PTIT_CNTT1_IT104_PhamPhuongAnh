class Students {
    constructor(name, age, listMonHoc) {
        this.name = name;
        this.age = age;
        this.listMonHoc = listMonHoc;
    }
}
const students = new Students("Phanh", 19, [{ subject: "Math", score: 8.5 }, { subject: "English", score: 9 }, { subject: "Physics", score: 8 }, { subject: "Literature", score: 7.5 }]);
const listScore = students.listMonHoc.map((element) => element.score);

console.log(listScore);
const getAvg = (listSubject) => {
    let total = 0;
    listSubject.forEach(subject => {
        total += subject.score;
    });
    return (total / listSubject.length);
}
const getStudentSummary = (student) => {
    let bestSubject = students.listMonHoc.find((subject) => subject.score === Math.max(...listScore));
    let weakestSubject = student.listMonHoc.find((subject) => subject.score === Math.min(...listScore));
    let rank, avg = getAvg(students.listMonHoc);
    if (avg >= 8.5) {
        rank = "Học sinh giỏi";
    } else if (avg >= 7.5) {
        rank = "Học sinh khá";
    } else if (avg >= 5) {
        rank = "Học sinh trung bình";
    } else if (avg < 5) {
        rank = "Học sinh yếu";
    }
    return `
    ${students.name} is ${students.age} years old
    Average score: ${avg} -> ${rank}
    Best subject: ${bestSubject.subject} (${bestSubject.score})
    Weakest subject: ${weakestSubject.subject} (${weakestSubject.score})`
}

console.log(getStudentSummary(students));

