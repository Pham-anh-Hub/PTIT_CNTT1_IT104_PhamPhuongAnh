"use strict";
class User {
    getName() {
        console.log("Nguyễn Văn A");
    }
}
// const newUser : User = new User;  không thể khởi tạo trực tiếp đối tượng mới bằng abstract class
class Employee extends User {
    run() {
        throw new Error("Method not implemented.");
    }
    walk() {
        throw new Error("Method not implemented.");
    }
    // Ghi đè lại các phương thức có sẵn trong User
    getName() {
        console.log("Employee name");
    }
}
class Dog {
    constructor(name, age, category, foodType) {
        this.name = name;
        this.age = age;
        this.category = category;
        this.foodType = foodType;
    }
    move() {
        throw new Error("Method not implemented.");
    }
    getDetails() {
        throw new Error("Method not implemented.");
    }
    sound() {
        throw new Error("Method not implemented.");
    }
    feed() {
        throw new Error("Method not implemented.");
    }
    // Ghi đè 
    makeSound() {
        console.log("Woof");
    }
}
