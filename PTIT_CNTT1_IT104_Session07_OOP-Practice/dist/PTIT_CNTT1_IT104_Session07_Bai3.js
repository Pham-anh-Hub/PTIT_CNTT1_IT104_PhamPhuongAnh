"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log(this.name);
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log(`meo meoooo`);
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeNoise() {
        console.log(`grauu gauu`);
    }
}
const newCat = new Cat("Miu");
const newDog = new Dog("Bun");
newCat.printName();
newCat.makeNoise();
newDog.printName();
newDog.makeNoise();
