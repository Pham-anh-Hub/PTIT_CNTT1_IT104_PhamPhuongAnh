"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    name;
    year;
    company;
    constructor(name, year, company) {
        (this.name = name), (this.year = year), (this.company = company);
    }
    getInfo() {
        return `Tên xe: ${this.name} - Năm sản xuất: ${this.year} - Hãng sản xuất: ${this.company}`;
    }
    setName(name) {
        this.name = name;
    }
    setYear(year) {
        if (year > 0 && year <= 2025) {
            this.year = year;
        }
    }
    setCompany(company) {
        this.company = company;
    }
}
class Motor extends Vehicle {
    constructor(name, year, company) {
        super(name, year, company);
    }
}
class Car extends Vehicle {
    constructor(name, year, company) {
        super(name, year, company);
    }
}
const motor = new Motor("Wave", 2020, "Honda");
console.log(`Thông tin xe máy: ${motor.getInfo()}`);
const car = new Motor("Innova", 2018, "Toyota");
console.log(`Thông tin ô tô: ${car.getInfo()}`);
//# sourceMappingURL=PTIT_CNTT1_IT104_Session05_Bai1.js.map