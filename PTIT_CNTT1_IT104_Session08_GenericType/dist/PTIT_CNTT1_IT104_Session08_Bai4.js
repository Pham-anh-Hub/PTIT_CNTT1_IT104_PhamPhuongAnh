"use strict";
const mergeObj = (a, b) => {
    return Object.assign(Object.assign({}, a), b);
};
const newObj = mergeObj({ id: "001", name: "Nguyễn Văn A" }, { age: 19 });
console.log(newObj);
