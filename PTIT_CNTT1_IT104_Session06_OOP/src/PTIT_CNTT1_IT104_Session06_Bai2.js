"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Job {
    type;
    constructor(type) {
        this.type = type;
    }
    // in ra loai cong viec
    printType() {
        console.log("Loại công việc: ", this.type);
    }
}
class PartimeJob extends Job {
    workingHour;
    constructor(workingHour) {
        super("Part-time");
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor() {
        super("Fulltime");
    }
    calculateSalary() {
        return 10000000;
    }
}
const newPartimeJob = new PartimeJob(4);
const newFulltimeJob = new FulltimeJob();
newPartimeJob.printType();
console.log(`Lương: ${newPartimeJob.calculateSalary()}`);
newFulltimeJob.printType();
console.log(`Lương: ${newFulltimeJob.calculateSalary()}`);
//# sourceMappingURL=PTIT_CNTT1_IT104_Session06_Bai2.js.map