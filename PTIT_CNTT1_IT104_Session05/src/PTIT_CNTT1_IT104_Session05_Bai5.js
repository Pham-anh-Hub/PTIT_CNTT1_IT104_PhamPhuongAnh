"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Rectangle {
    width;
    height;
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getWidth() {
        return this.width;
    }
    getHeigth() {
        return this.height;
    }
    setWidth(newWidth) {
        if (newWidth > 0) {
            this.width = newWidth;
        }
    }
    setHeight(newHeight) {
        if (newHeight > 0 && newHeight > this.width) {
            this.width = newHeight;
        }
    }
    square() {
        return this.width * this.height;
    }
    cicruit() {
        return (this.height + this.width) * 2;
    }
}
const newRect = new Rectangle(5, 8);
console.log("Chiều dài: ", newRect.getHeigth());
console.log("Chiều rộng: ", newRect.getWidth());
console.log("Chu vi: ", newRect.cicruit());
console.log("Diện tích: ", newRect.square());
newRect.setWidth(12);
newRect.setHeight(10);
console.log("Chu vi sau cập nhật: ", newRect.cicruit());
console.log("Diện tích sau cập nhật:/ ", newRect.square());
//# sourceMappingURL=PTIT_CNTT1_IT104_Session05_Bai5.js.map