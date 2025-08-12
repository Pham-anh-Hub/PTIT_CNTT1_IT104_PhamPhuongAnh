"use strict";
class Vehicle {
    constructor(id, name, speed) {
        this.id = id;
        this.name = name;
        this.speed = speed;
    }
    slowDown(amount) {
        this.speed -= amount;
    }
    speedUp(amount) {
        this.speed += amount;
    }
    showSpeed() {
        console.log("Tốc độ hiện tại: ", this.speed);
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getSpeed() {
        return this.speed;
    }
}
class Bicycle extends Vehicle {
    constructor(id, name, speed, gear) {
        super(id, name, speed);
        this.gear = gear;
    }
    getGear() {
        return this.gear;
    }
}
const newBike = new Bicycle("001", "Xe đạp 1", 30, 3);
newBike.slowDown(10);
newBike.showSpeed();
newBike.speedUp(20);
newBike.showSpeed();
console.log(`Thông tin xe: ID: ${newBike.getId()} - Tên: ${newBike.getName()} - Số bánh răng: ${newBike.getGear()}`);
