import React from "react";

const Calculation = () => {
  const number1 = 10;
  const number2 = 15;
  return (
    <>
      <div>
        <li key={1}>
          {number1} + {number2} = {sum(number1, number2)}
        </li>
        <li key={2}>
          {number1} - {number2} = {substract(number1, number2)}
        </li>
        <li key={3}>
          {number1} * {number2} = {multi(number1, number2)}
        </li>
        <li key={4}>
          {number1} / {number2} = {divide(number1, number2)}
        </li>
      </div>
    </>
  );
};

const sum = (a: number, b: number) => {
  return a + b;
};
const substract = (a: number, b: number) => {
  return a - b;
};
const multi = (a: number, b: number) => {
  return a * b;
};
const divide = (a: number, b: number) => {
  if (a > b && a !== 0) {
    return a / b;
  }
  return 0;
};

export default Calculation;
