class Vehicle {
  protected name: string;
  protected year: number;
  protected company: string;
  constructor(name: string, year: number, company: string) {
    (this.name = name), (this.year = year), (this.company = company);
  }
  getInfo() : string {
    return `Tên xe: ${this.name} - Năm sản xuất: ${this.year} - Hãng sản xuất: ${this.company}`;
  }

  setName(name: string) {
    this.name = name;
  }
  setYear(year: number) {
    if (year > 0 && year <= 2025) {
      this.year = year;
    }
  }
  setCompany(company: string) {
    this.company = company;
  }
}

class Motor extends Vehicle {
  constructor(name: string, year: number, company: string) {
    super(name, year, company);
  }
}

class Car extends Vehicle {
  constructor(name: string, year: number, company: string) {
    super(name, year, company);
  }
}

const motor: Vehicle = new Motor("Wave", 2020, "Honda");
console.log(`Thông tin xe máy: ${motor.getInfo()}`);

const car: Vehicle = new Motor("Innova", 2018, "Toyota");
console.log(`Thông tin ô tô: ${car.getInfo()}`);
