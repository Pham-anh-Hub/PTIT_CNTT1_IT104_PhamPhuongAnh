class Employee{
    public name : string;
    protected company : string;
    private phone : string;
    constructor(name : string, company : string, phone : string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(): void{
        console.log(`Nhân viên : ${this.name} Công ty : ${this.company} Số điện thoại : ${this.phone}`);   
    }
}

const newEmployee = new Employee("Nguyễn Văn A", "Rikkei", "0987654321");
newEmployee.printInfo();