const number = [1, 2, 3, 4, 5];


// Copy cac phan tu sang 1 mang moi
//Thông thường
const numberCopy1 = number.slice(); // Sử dụng phương thức slice
// Sử dụng spread operator để sao chép mảng
const numberCopy2 = [...number];

console.log("NumberCopy: ", numberCopy1);
console.log("NumberCopy2: ", numberCopy2);
