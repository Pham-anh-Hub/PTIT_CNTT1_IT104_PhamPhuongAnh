class Employee {
    public name : string;
    protected company : string;
    private phone : string;
    constructor(name: string, company : string , phone : string){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    getPhone() : string{
        return this.phone;
    }

    printInfo() : void{
        console.log(`${this.name} - ${this.company} - ${this.phone}`);     
    }
}

class Manager extends Employee{
    teamSize : number;
    constructor(name: string, company : string , phone : string, teamSize : number){
        super(name, company, phone);
        this.teamSize = teamSize;
    }
}