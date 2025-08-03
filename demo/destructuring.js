// Truy xuất các phần tử của mảng
const colors = ["Red", "Green", "Blue", "Yellow"];
// truy xuat phan tu thong thuong
console.log("Phan tu so 1: ", colors[0]);
console.log("Phan tu so 2: ", colors[1]);
// truy xuat theo destructuring 
const [red, green, blue, yellow, black] = colors;

console.log(red, green, blue, yellow, black);


// Lấy giá trị của key trong object
const user = {
    id: 1,
    name: "Phanh",
    age: 19,
}

console.log("Ten: ", user.name);
console.log("tuoi: ", name);
console.log("Ten: ");
