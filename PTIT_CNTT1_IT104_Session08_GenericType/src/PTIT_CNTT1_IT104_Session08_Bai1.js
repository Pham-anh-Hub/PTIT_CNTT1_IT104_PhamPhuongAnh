"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var weekDays;
(function (weekDays) {
    weekDays["MONDAY"] = "Th\u1EE9 hai";
    weekDays["TUESDAY"] = "Th\u1EE9 ba";
    weekDays["WEDNESDAY"] = "Th\u1EE9 t\u01B0";
    weekDays["THURSDAY"] = "Th\u1EE9 n\u0103m";
    weekDays["FRIDAY"] = "Th\u1EE9 s\u00E1u";
    weekDays["SARTURDAY"] = "Th\u1EE9 b\u1EA3y";
    weekDays["SUNDAY"] = "Ch\u1EE7 nh\u1EADt";
})(weekDays || (weekDays = {}));
const daysOfWeek = Object.values(weekDays);
daysOfWeek.forEach(day => {
    console.log(day);
});
// for (const day in weekDays) {
//     console.log(weekDays[day as keyof typeof weekDays]);
// }
//# sourceMappingURL=PTIT_CNTT1_IT104_Session08_Bai1.js.map