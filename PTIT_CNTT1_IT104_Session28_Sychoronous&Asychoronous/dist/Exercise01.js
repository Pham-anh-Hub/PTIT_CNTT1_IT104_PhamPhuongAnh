"use strict";
const calculate = (a, b, callBack) => {
    const result = a + b;
    callBack(result);
};
const handleLogTotal = (result) => {
    console.log("Tổng: ", result);
};
calculate(2, 1, handleLogTotal);
