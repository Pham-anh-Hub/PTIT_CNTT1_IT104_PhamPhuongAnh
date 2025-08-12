class Vehicle{
    protected id : string;
    protected name : string;
    protected speed : number;
    constructor(id : string, name : string, speed : number){
        this.id = id;
        this.name = name;
        this.speed = speed;
    }
    slowDown(amount : number) : void{
        this.speed -= amount;
    }
    speedUp(amount : number) : void{
        this.speed += amount;
    }
    showSpeed() : void{
        console.log("Tốc độ hiện tại: ", this.speed);
    }

    getId() : string{
        return this.id;
    }
    getName() : string{
        return this.name;
    }

    getSpeed() : number{
        return this.speed
    }
}

class Bicycle extends Vehicle{
    private gear : number;
    constructor(id : string, name : string, speed : number, gear : number){
        super(id, name, speed);
        this.gear = gear;
    }
    getGear() : number {
        return this.gear;
    }
}

const newBike = new Bicycle("001", "Xe đạp 1",30, 3);
newBike.slowDown(10);
newBike.showSpeed();
newBike.speedUp(20);
newBike.showSpeed();
console.log(`Thông tin xe: ID: ${newBike.getId()} - Tên: ${newBike.getName()} - Số bánh răng: ${newBike.getGear()}`);

