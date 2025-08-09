class Vehicles {
  readonly id: number;
  public name: string;
  protected year: number;
  private company: string;
  constructor(id: number, name: string, year: number, company: string) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.company = company;
  }
  getInfo(): string {
    return `ID: ${this.id} - Tên xe: ${this.name} - Năm sản xuất: ${this.year} - Hãng sản xuất: ${this.company}`;
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

const newCar:Vehicles = new Vehicles(1, "Innova", 2020, "Toyota");
console.log(newCar.getInfo());