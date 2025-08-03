// Sử dụng vòng lặp for với biến đếm i được khai báo bằng từ khóa let.
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log(i); // báo lỗi i is not defined tại dòng này 
// --> vì i được khai báo bằng let (phạm vi khối)
// do đó i chỉ được sử dụng trong vòng lặp for


