"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Vehicle {
    speed;
    constructor(speed) {
        this.speed = speed;
    }
    speedUp() {
        this.speed += 5;
    }
    slowDown() {
        this.speed -= 5;
    }
    stop() {
        this.speed = 0;
    }
    showStatus() {
        console.log("Vận tốc hiện tại: ", this.speed);
    }
}
const newVehicle = new Vehicle(100);
newVehicle.showStatus();
newVehicle.slowDown();
newVehicle.slowDown();
newVehicle.speedUp();
newVehicle.showStatus();
newVehicle.stop();
newVehicle.showStatus();
//# sourceMappingURL=PTIT_CNTT1_IT104_Session06_Bai5.js.map