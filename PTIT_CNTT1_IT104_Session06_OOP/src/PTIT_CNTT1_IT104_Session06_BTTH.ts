interface IAnimal {
  name: string;
  age: number;
  category: string;

  sound(): string;
  getDetails(): string;
  move(): void; // Hoặc string
  feed(): void;
}

abstract class Animal implements IAnimal {
  name: string;
  age: number;
  category: string;
  foodType: string;
  constructor(name: string, age: number, category: string, foodType: string) {
    this.name = name;
    this.category = category;
    this.age = age;
    this.foodType = foodType;
  }
    move(): void {
        throw new Error("Method not implemented.");
    }
  getDetails(): string {
    return `Name: ${this.name} Age: ${this.age} Category: ${this.category} FoodType: ${this.foodType}`;
  }
  abstract sound(): string;
  abstract feed(): void;
}

class Mammal extends Animal {
  furColor: string;
  constructor(name: string, age: number, furColor: string) {
    super(name, age, "mammal", "Mammal's foodType");
    this.furColor = furColor;
  }

  move(): void {
    console.log("Mammal moving..");
  }
  feed(): void{
      console.log(`${this.name} eating ${this.foodType}`);
  };
  sound(): string {
    return `Mammal sounding`;      
  }

}

class Bird extends Animal {
  wingSpan: number;
  constructor(name: string, age: number, wingSpan: number) {
    super(name, age, "bird", "Bird Food");
    this.wingSpan = wingSpan;
  }
  move(): void {
    console.log("Flying...");
  }
  feed(): void{
      console.log(`${this.name} eating ${this.foodType}`);
  };
  sound(): string {
      return `Bird sounding ...`;
  };
}

class Reptile extends Animal {
  venomous: boolean;
  constructor(name: string, age: number, venomous: boolean) {
    super(name, age, "Reptile", "Reptile Food");
    this.venomous = venomous;
  }
  move(): void {
    console.log("Reptile moving...");
  }
  feed(): void {
      console.log(`${this.name} eating ${this.foodType}`);
  }
  sound(): string {
      return `Reptile sounding...`
  }
}

const animals: Animal[] = [
  new Mammal("Lion", 5, "Brown"),
  new Bird("Chicken", 1, 2),
  new Reptile("Snake", 2, true),
];

animals.forEach((animal) => {
    console.log(animal.getDetails());
    animal.move();
})
