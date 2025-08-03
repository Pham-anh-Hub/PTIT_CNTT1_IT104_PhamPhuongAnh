// Khai báo hai biến bằng từ khóa const:
const number = 8;
const arr = [1, 2, 3];

// Gán lại
number = 6;
arr[2] = 4;

// output trống --> vì number và arr là 2 biến được khai báo bằng const (không thể thay đổi)
// ==> khi gán lại output sẽ báo lỗi ngay từ dòng 6
console.log("number: ", number);
console.log("arr: ", arr);

