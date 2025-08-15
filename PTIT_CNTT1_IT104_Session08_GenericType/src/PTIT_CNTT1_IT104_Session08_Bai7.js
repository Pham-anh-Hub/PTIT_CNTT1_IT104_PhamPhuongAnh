"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge = (obj1) => {
    let newArr = [];
    for (let i = 0; i < obj1.length; i++) {
        newArr = newArr.concat([...obj1[i]]);
    }
    return newArr;
};
console.log(merge([[1, 2], [3, 4], [5, 6]]));
//# sourceMappingURL=PTIT_CNTT1_IT104_Session08_Bai7.js.map