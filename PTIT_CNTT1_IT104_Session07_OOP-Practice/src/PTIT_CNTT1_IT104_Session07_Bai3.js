"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    name;
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
//# sourceMappingURL=PTIT_CNTT1_IT104_Session07_Bai3.js.map