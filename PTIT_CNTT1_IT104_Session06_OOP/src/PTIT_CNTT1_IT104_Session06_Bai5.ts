interface changeSpeed{
    speedUp() : void;
    slowDown() : void;
    stop(): void;
}

class Vehicle implements changeSpeed{
    private speed : number;
    constructor(speed : number){
        this.speed = speed;
    }

    speedUp(): void {
        this.speed+=5;
    }
    slowDown(): void {
        this.speed -= 5;
    }
    stop(): void {
        this.speed = 0;
    }
    showStatus() : void{
        console.log("Vận tốc hiện tại: ", this.speed);
    }
    
}

const newVehicle = new Vehicle(100);
newVehicle.showStatus();
newVehicle.slowDown();
newVehicle.slowDown();
newVehicle.speedUp()
newVehicle.showStatus();
newVehicle.stop();
newVehicle.showStatus();