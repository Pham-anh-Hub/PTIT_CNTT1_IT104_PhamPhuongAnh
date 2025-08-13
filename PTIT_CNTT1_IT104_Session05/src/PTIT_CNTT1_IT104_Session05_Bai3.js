"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    name;
    company;
    phone;
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`Nhân viên : ${this.name} Công ty : ${this.company} Số điện thoại : ${this.phone}`);
    }
}
const newEmployee = new Employee("Nguyễn Văn A", "Rikkei", "0987654321");
newEmployee.printInfo();
//# sourceMappingURL=PTIT_CNTT1_IT104_Session05_Bai3.js.map