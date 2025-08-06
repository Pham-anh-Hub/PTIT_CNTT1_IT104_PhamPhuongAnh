"use strict";
let number1 = document.getElementById("input1");
let number2 = document.getElementById("input2");
let result = document.getElementById("result");
// Lấy ra các nút phép tính
const sumBtn = document.getElementById("sum");
const subtractBtn = document.getElementById("subtract");
const multiBtn = document.getElementById("multi");
const divideBtn = document.getElementById("divide");
const powBtn = document.getElementById("pow");
const sqrtBtn = document.getElementById("sqrt");
const facBtn = document.getElementById("fac");
sumBtn.addEventListener("click", () => {
    let a = Number(number1.value);
    let b = Number(number2.value);
    console.log(a, b);
    result.value = (a + b).toString();
});
subtractBtn.addEventListener("click", () => {
    let a = Number(number1.value);
    let b = Number(number2.value);
    console.log(a, b);
    result.value = (a - b).toString();
});
multiBtn.addEventListener("click", () => {
    let a = Number(number1.value);
    let b = Number(number2.value);
    console.log(a, b);
    result.value = (a * b).toString();
});
divideBtn.addEventListener("click", () => {
    let a = Number(number1.value);
    let b = Number(number2.value);
    console.log(a, b);
    result.value = (a / b).toString();
});
powBtn.addEventListener("click", () => {
    let a = Number(number1.value);
    let b = Number(number2.value);
    console.log(a, b);
    result.value = (Math.pow(a, b)).toString();
});
sqrtBtn.addEventListener("click", () => {
    let a = Number(number1.value);
    let b = Number(number2.value);
    console.log(a, b);
    result.value = (Math.pow(a, (1 / b))).toString();
});
facBtn.addEventListener("click", () => {
    let a = Number(number1.value);
    // let b = Number(number2.value);
    let count = 1;
    for (let i = 1; i <= a; i++) {
        count *= i;
    }
    console.log(a);
    result.value = (count).toString();
});
