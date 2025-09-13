"use strict";
const delayCallback = (callback, ms) => {
    setTimeout(() => {
        callback();
    }, ms);
};
const delayedFunction = () => {
    console.log("Hàm được thực hiện sau 2s delay");
};
delayCallback(delayedFunction, 2000);
