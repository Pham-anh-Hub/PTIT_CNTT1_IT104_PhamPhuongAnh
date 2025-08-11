"use strict";
class Job {
    constructor(type) {
        this.type = type;
    }
    // in ra loai cong viec
    printType() {
        console.log("Loại công việc: ", this.type);
    }
}
class PartimeJob extends Job {
    constructor(type = "Part-time", workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 30000 * this.workingHour;
    }
}
class FulltimeJob extends Job {
    constructor(type = "Fulltime", workingHour) {
        super(type);
        this.workingHour = workingHour;
    }
    calculateSalary() {
        return 10000000;
    }
}
const newPartimeJob = new PartimeJob("Part-time", 4);
const newFulltimeJob = new FulltimeJob("Fulltime", 5);
newPartimeJob.printType();
console.log(`Lương: ${newPartimeJob.calculateSalary()}`);
newFulltimeJob.printType();
console.log(`Lương: ${newFulltimeJob.calculateSalary()}`);
