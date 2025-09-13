"use strict";
let i = 1;
const displayNumber = (callback, ms) => {
    setInterval(() => {
        callback(i);
        i++;
    }, ms);
};
const logNumber = (num) => {
    console.log("Phần tử thứ: ", num);
    // num++;
};
displayNumber(logNumber, 1000);
