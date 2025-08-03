
// Lấy thông tin, tìm kiếm sinh viên theo ID
export const getStudentByID = (studentList, id) => {
    const findStudent = studentList.find((student) => student.id === id);
    if (findStudent != null) {
        return `find Student: 
        id: ${findStudent.id}
        name: ${findStudent.name}
        age: ${findStudent.age}
        scores: ${findStudent.scores}`;
    } else {
        return `Khong tim thay!!`;
    }
}

export const getAverage = (student) => {
    let avg = (student.scores[0] + student.scores[1] + student.scores[2]) / 3;
    return avg;
}
// Tra ve sv co diem tb cao nhat
export const getTopStudent = (studentList) => {
    let avgList = [];
    studentList.forEach(student => {
        avgList.push(getAverage(student));
    });
    let topAvgIndex = avgList.findIndex((score) => score === Math.max(...avgList));
    let topStudent = studentList[topAvgIndex];
    return topStudent;
}

// Trả về điểm trung bình toàn bộ lớp
export const avgOfClass = (studentList) => {
    for (let i = 0; i < studentList.length; i++) {
        console.log(`Sinh viên ${i + 1}: ${getAverage(studentList[i])}\n`);
    }
};

// Lọc sinh viên có điểm trung bình trong khoảng [min, max]
export const filterListStudent = (studentList, min, max,) => {
    let filterStudent = studentList.filter((student) => {
        return min <= getAverage(student) && getAverage(student) <= max;
    })
    return filterStudent;
}

//  Sắp xếp sinh viên theo tên từ A-Z
export const sortStudentsByName = (array) => {
    let size = array.length;
    for (let i = 0; i < size - 1; i++) {
        for (let j = 0; j < size - 1; j++) {
            if (array[j + 1].name < array[j].name) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}