"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const flatten = (arr) => {
    let result = [];
    arr.forEach(item => {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        }
        else {
            result.push(item);
        }
    });
    return result;
};
const arr = [[1, [2, [3, 4], 5], 7, 8], 9];
console.log(flatten(arr));
//# sourceMappingURL=PTIT_CNTT1_IT104_Session08_Bai9.js.map