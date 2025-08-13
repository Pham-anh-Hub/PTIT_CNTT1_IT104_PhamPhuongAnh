"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const scores = [8.5, 7.2, 9.0, 6.8, 7.5, 8.0, 6.9, 9.2, 7.8, 8.3];
let total = scores.reduce((a, b) => {
    return a + b;
});
console.log("Điểm trung bình: ", (total / 10).toFixed(2));
// C2
// let sum = 0;
// scores.forEach(score => {
//     sum += score;
// });
// console.log("Điểm trung bình: ", (sum/10).toFixed(2));
//# sourceMappingURL=PTIT_CNTT1_IT104_Session04_Bai2.js.map