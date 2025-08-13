"use strict";
const isSame = (str) => {
    let checkStr = [];
    for (const item of str) {
        if (checkStr.includes(item)) {
            return true;
        }
        else {
            checkStr.push(item);
        }
    }
    return false;
};
// Khai báo 1 hàm có kiểu dữ liệu T, và T được giới hạn có thuộc tính length kiểu dữ liệu number (VD: array, string)
const checkLongest = (str) => {
    let longestStr = str[0];
    for (const item of str) {
        if (item.length > longestStr.length && !isSame(item)) {
            longestStr = item;
        }
    }
    return longestStr;
};
const array = ["hello", "world", "apple", "banana", "orange", "pumpkin", "cucumber"];
console.log(checkLongest(array));
