"use strict";
const myForEach = (callBack, array) => {
    for (let i = 0; i < array.length; i++) {
        callBack(array[i], i, array);
    }
};
const display = (currValue, index, array) => {
    console.log(`Phần tử: ${currValue}  | Vị trí: ${index}  | Array: [${array}]`);
};
myForEach(display, [1, 2, 3, 4, 5, 6, 7, 8]);
