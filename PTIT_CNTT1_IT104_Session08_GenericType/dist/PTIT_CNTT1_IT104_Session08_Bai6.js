"use strict";
const findElement = (nums, value) => {
    return nums.find((number) => number === value);
};
const input = prompt("Nhập vào 1 mảng hoa quả: ");
if (input) {
    const arr = input.split(" ").map((item) => item.trim());
    const value = prompt("Nhập vào loại quả cần tìm: ");
    const target = findElement(arr, value);
    if (target) {
        console.log(`Giá trị cần tìm: ${target}`);
    }
}
