"use strict";
const mergeObject = (a, b) => {
    return Object.assign(Object.assign({}, a), b);
};
const person = { name: "John" };
const age = { age: 19 };
console.log("Object: ", mergeObject(person, age));
