"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mergeObj = (a, b) => {
    return { ...a, ...b };
};
const newObj = mergeObj({ id: "001", name: "Nguyễn Văn A" }, { age: 19 });
console.log(newObj);
//# sourceMappingURL=PTIT_CNTT1_IT104_Session08_Bai4.js.map