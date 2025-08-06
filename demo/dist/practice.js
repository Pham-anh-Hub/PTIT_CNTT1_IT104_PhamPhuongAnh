"use strict";
// Object.defineProperty(exports, "__esModule", { value: true });
// Khai báo kiểu dữ liệu enum
var SystemMode;
(function (SystemMode) {
    SystemMode["AUTO"] = "AUTO";
    SystemMode["MANUAL"] = "MANUAL";
})(SystemMode || (SystemMode = {}));
// hàm logMovement
const logMovement = (direction) => {
    console.log("🔁 Moving: ", direction);
};
const logMode = (systemMode) => {
    console.log(" 🔗System set to ", systemMode, "mode");
};
const processInput = (value) => {
    console.log("Receive input: ", value);
};
const validateInput = (target) => {
    if (typeof (target) == "number") {
        console.log("✅ Input: ", target);
    }
    else {
        console.log(`❌ Invalid input type`);
    }
};
const crash = (massage) => {
    throw new Error(massage);
};
logMovement("forward");
logMovement("left");
logMode(SystemMode.AUTO);
logMode(SystemMode.MANUAL);
processInput("Hello robot!");
validateInput(12);
processInput(876002);
validateInput("string");
try {
    crash("💥 SYSTEM CRASHED: Overheat detected!");
}
catch (error) {
    console.log(error);
}
//# sourceMappingURL=practice.js.map