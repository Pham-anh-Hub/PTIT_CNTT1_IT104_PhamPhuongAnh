"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
    age;
    category;
    foodType;
    constructor(name, age, category, foodType) {
        this.name = name;
        this.category = category;
        this.age = age;
        this.foodType = foodType;
    }
    move() {
        throw new Error("Method not implemented.");
    }
    getDetails() {
        return `Name: ${this.name} Age: ${this.age} Category: ${this.category} FoodType: ${this.foodType}`;
    }
}
class Mammal extends Animal {
    furColor;
    constructor(name, age, furColor) {
        super(name, age, "mammal", "Mammal's foodType");
        this.furColor = furColor;
    }
    move() {
        console.log("Mammal moving..");
    }
    feed() {
        console.log(`${this.name} eating ${this.foodType}`);
    }
    ;
    sound() {
        return `Mammal sounding`;
    }
}
class Bird extends Animal {
    wingSpan;
    constructor(name, age, wingSpan) {
        super(name, age, "bird", "Bird Food");
        this.wingSpan = wingSpan;
    }
    move() {
        console.log("Flying...");
    }
    feed() {
        console.log(`${this.name} eating ${this.foodType}`);
    }
    ;
    sound() {
        return `Bird sounding ...`;
    }
    ;
}
class Reptile extends Animal {
    venomous;
    constructor(name, age, venomous) {
        super(name, age, "Reptile", "Reptile Food");
        this.venomous = venomous;
    }
    move() {
        console.log("Reptile moving...");
    }
    feed() {
        console.log(`${this.name} eating ${this.foodType}`);
    }
    sound() {
        return `Reptile sounding...`;
    }
}
const animals = [
    new Mammal("Lion", 5, "Brown"),
    new Bird("Chicken", 1, 2),
    new Reptile("Snake", 2, true),
];
animals.forEach((animal) => {
    console.log(animal.getDetails());
    animal.move();
});
//# sourceMappingURL=PTIT_CNTT1_IT104_Session06_BTTH.js.map