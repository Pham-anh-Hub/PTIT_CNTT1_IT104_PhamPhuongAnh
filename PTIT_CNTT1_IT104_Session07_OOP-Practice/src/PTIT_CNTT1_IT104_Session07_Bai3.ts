abstract class Animal {
    name : string;
    constructor(name: string){
        this.name = name;
    }

    abstract makeNoise() : void;
    printName() : void{
        console.log(this.name);
    }
}

class Cat extends Animal{
    constructor(name : string){
        super(name);
    }
    makeNoise(): void {
        console.log(`meo meoooo`);
    }
}

class Dog extends Animal{
    constructor(name : string){
        super(name);
    }
    makeNoise(): void {
        console.log(`grauu gauu`);
    }
}

const newCat = new Cat("Miu");
const newDog = new Dog("Bun");

newCat.printName()
newCat.makeNoise();

newDog.printName();
newDog.makeNoise()