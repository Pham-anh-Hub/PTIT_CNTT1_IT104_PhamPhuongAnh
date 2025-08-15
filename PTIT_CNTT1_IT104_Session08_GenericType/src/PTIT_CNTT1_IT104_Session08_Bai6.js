"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
//# sourceMappingURL=PTIT_CNTT1_IT104_Session08_Bai6.js.map