abstract class Job {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
  // in ra loai cong viec
  printType(): void {
    console.log("Loại công việc: ", this.type);
  }
  // Tinh luong cua cong viec
  abstract calculateSalary(): number;
}

class PartimeJob extends Job {
  workingHour: number;
  constructor(workingHour: number) {
    super("Part-time");
    this.workingHour = workingHour;
  }
  calculateSalary(): number {
    return 30000 * this.workingHour;
  }
}

class FulltimeJob extends Job {
  constructor() {
    super("Fulltime");
  }
  calculateSalary(): number {
    return 10000000;
  }
}

const newPartimeJob = new PartimeJob(4);
const newFulltimeJob = new FulltimeJob();

newPartimeJob.printType();
console.log(`Lương: ${newPartimeJob.calculateSalary()}`);

newFulltimeJob.printType();
console.log(`Lương: ${newFulltimeJob.calculateSalary()}`);

