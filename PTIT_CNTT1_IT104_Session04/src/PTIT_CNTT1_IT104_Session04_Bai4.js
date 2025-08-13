"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const number1 = 12;
const number2 = "Số mười";
const number3 = 9;
const handleNumber = (number) => {
    if (typeof number === "string") {
        console.log(`${number.length} ký tự`);
    }
    else {
        if (number % 2 === 0) {
            console.log(`${number} là số chẵn`);
        }
        else {
            console.log(`${number} là số lẻ`);
        }
    }
};
handleNumber(number1);
handleNumber(number2);
handleNumber(number3);
//# sourceMappingURL=PTIT_CNTT1_IT104_Session04_Bai4.js.map