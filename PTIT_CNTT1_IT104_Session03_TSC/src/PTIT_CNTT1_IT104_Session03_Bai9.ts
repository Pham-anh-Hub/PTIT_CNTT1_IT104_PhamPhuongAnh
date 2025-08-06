let number1 = document.getElementById("input1") as HTMLInputElement;
let number2 = document.getElementById("input2") as HTMLInputElement;
let result = document.getElementById("result") as HTMLInputElement;

// Lấy ra các nút phép tính
const sumBtn = document.getElementById("sum") as HTMLElement;
const subtractBtn = document.getElementById("subtract") as HTMLElement;
const multiBtn = document.getElementById("multi") as HTMLElement;
const divideBtn = document.getElementById("divide") as HTMLElement;
const powBtn = document.getElementById("pow") as HTMLElement;
const sqrtBtn = document.getElementById("sqrt") as HTMLElement;
const facBtn = document.getElementById("fac") as HTMLElement;

sumBtn.addEventListener("click", () => {
    let a  = Number(number1.value);
    let b = Number(number2.value);
    console.log(a, b);
    result.value = (a+b).toString();
})

subtractBtn.addEventListener("click", () => {
    let a  = Number(number1.value);
    let b = Number(number2.value);
    console.log(a, b);
    result.value = (a-b).toString();
})
multiBtn.addEventListener("click", () => {
    let a  = Number(number1.value);
    let b = Number(number2.value);
    console.log(a, b);
    result.value = (a * b).toString();
})
divideBtn.addEventListener("click", () => {
    let a  = Number(number1.value);
    let b = Number(number2.value);
    console.log(a, b);
    result.value = (a / b).toString();
})

powBtn.addEventListener("click", () => {
    let a  = Number(number1.value);
    let b = Number(number2.value);
    console.log(a, b);
    result.value = (a ** b).toString();
})

sqrtBtn.addEventListener("click", () => {
    let a  = Number(number1.value);
    let b = Number(number2.value);
    console.log(a, b);
    result.value = (a ** (1/b)).toString();
})

facBtn.addEventListener("click", () => {
    let a  = Number(number1.value);
    // let b = Number(number2.value);
    let count:number = 1;
    for (let i = 1; i <= a; i++) {
        count *= i;
    }
    console.log(a);
    result.value = (count).toString();
})