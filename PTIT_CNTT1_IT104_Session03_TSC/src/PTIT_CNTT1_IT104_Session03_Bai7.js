"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// let string : string = "banana";
let string = "hello world";
let newString = "";
for (let i = 0; i < string.length; i++) {
    if (newString.includes(string[i])) {
        continue;
    }
    else {
        newString += string[i];
    }
}
console.log("New string: ", newString);
//# sourceMappingURL=PTIT_CNTT1_IT104_Session03_Bai7.js.map