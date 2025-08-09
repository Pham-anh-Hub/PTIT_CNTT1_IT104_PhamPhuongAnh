"use strict";
class Vehicles {
    constructor(id, name, year, company) {
        this.id = id;
        this.name = name;
        this.year = year;
        this.company = company;
    }
    getInfo() {
        return `ID: ${this.id} - Tên xe: ${this.name} - Năm sản xuất: ${this.year} - Hãng sản xuất: ${this.company}`;
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
const newCar = new Vehicles(1, "Innova", 2020, "Toyota");
console.log(newCar.getInfo());
