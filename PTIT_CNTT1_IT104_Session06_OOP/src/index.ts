abstract class User{
    abstract run() : void;
    abstract walk() : void;
    getName(): void{
        console.log("Nguyễn Văn A");
    }
}

// const newUser : User = new User;  không thể khởi tạo trực tiếp đối tượng mới bằng abstract class

class Employee extends User{
     run(): void {
         throw new Error("Method not implemented.");
     }
     walk(): void {
         throw new Error("Method not implemented.");
     }
    // Ghi đè lại các phương thức có sẵn trong User
     getName() : void {
        console.log("Employee name");
     }
}



interface Animal{
    name : string;
    makeSound() : void;
}

class Dog  implements Animal{
    name : string;
    age: number;
    category: string;
    foodType: string;
    constructor(name : string,  age: number, category: string, foodType: string,){
        this.name = name;
        this.age = age;
        this.category = category;
        this.foodType = foodType;
    }
    move(): void {
        throw new Error("Method not implemented.");
    }
    getDetails(): string {
        throw new Error("Method not implemented.");
    }
    sound(): string {
        throw new Error("Method not implemented.");
    }
    feed(): void {
        throw new Error("Method not implemented.");
    }
    // Ghi đè 
    makeSound(): void {
        console.log("Woof");
    }
}

