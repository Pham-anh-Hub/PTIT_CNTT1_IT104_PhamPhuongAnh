"use strict";
const partialUpdate = (obj, updates) => {
    return Object.assign(Object.assign({}, obj), updates);
};
const object1 = { name: 'Nguyễn Văn A', age: 25, job: 'Dev' };
const updates1 = { age: 31 };
console.log("Object 1: ", partialUpdate(object1, updates1));
const object2 = { name: 'Nguyễn Văn B', age: 28, job: 'Business Analyse' };
const updates2 = { name: 'Trần Văn C', job: 'Designer' };
console.log("Object 2: ", partialUpdate(object2, updates2));
