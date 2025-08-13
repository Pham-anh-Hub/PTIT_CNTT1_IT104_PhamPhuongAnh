"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let aString = "hello world apple banana orange pumpkin cucumber";
let strings = aString.split(" ");
let maxString = "";
// Hàm check ký tự nếu có trùng
const duplicate = (str) => {
    let checkStr = "";
    for (let i = 0; i < str.length; i++) {
        if (checkStr.includes(str[i])) {
            return true;
        }
        checkStr += str[i];
    }
    return false;
};
strings.forEach(str => {
    if (str.length > maxString.length && !duplicate(str)) {
        maxString = str;
    }
});
console.log("Max string: ", maxString);
//# sourceMappingURL=PTIT_CNTT1_IT104_Session03_Bai10.js.map