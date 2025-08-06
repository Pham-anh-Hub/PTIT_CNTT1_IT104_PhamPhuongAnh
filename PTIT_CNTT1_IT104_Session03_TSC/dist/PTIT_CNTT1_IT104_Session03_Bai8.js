"use strict";
const sum = (num1, num2) => {
    if (Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))) {
        return `Giá trị không hợp lệ`;
    }
    else {
        return Number(num1) + Number(num2);
    }
};
const subtract = (num1, num2) => {
    if (Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))) {
        return `Giá trị không hợp lệ`;
    }
    else {
        return Number(num1) - Number(num2);
    }
};
const multi = (num1, num2) => {
    if (Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))) {
        return `Giá trị không hợp lệ`;
    }
    else {
        return Number(num1) * Number(num2);
    }
};
const divide = (num1, num2) => {
    if (Number.isNaN(Number(num1)) || Number.isNaN(Number(num2))) {
        return `Giá trị không hợp lệ`;
    }
    else {
        return Number(num1) / Number(num2);
    }
};
console.log("Sum: ", sum(12, "ab"));
console.log("Sum: ", sum(8, "10"));
console.log("\nSubtraction: ", subtract("abc", 26));
console.log("Subtraction: ", subtract("30", 26));
console.log("\nMulti: ", multi(2, 12));
console.log("Multi: ", multi("15", "a"));
console.log("\nDivide: ", divide(15, 5));
console.log("Divide: ", divide("15", "3"));
console.log("Divide: ", divide("15", "ba"));
