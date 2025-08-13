"use strict";
const isGreaterZero = (num) => {
    if (Number(num) > 0) {
        return true;
    }
    return false;
};
const isEven = (arr) => {
    return arr.find((num) => Number(num) % 2 === 0 && isGreaterZero(num));
};
const numArr = [3, 5, 2, 1, 4, 6,];
console.log(isEven(numArr));
