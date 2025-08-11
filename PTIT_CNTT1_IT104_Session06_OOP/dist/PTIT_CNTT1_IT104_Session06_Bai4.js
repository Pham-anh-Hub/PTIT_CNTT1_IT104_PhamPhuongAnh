"use strict";
class Circle {
    constructor(radious) {
        this.radious = radious;
    }
    getRadious() {
        return this.radious;
    }
    setRadious(newRadious) {
        if (newRadious > 0) {
            this.radious = newRadious;
        }
    }
    calculateArea() {
        return Math.PI * (Math.pow(this.radious, 2));
    }
    calculatePerimeter() {
        return Math.PI * this.radious * 2;
    }
}
class rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getHeight() {
        return this.height;
    }
    getWidth() {
        return this.width;
    }
    setHeight(newHeight) {
        if (newHeight > 0) {
            this.height = newHeight;
        }
    }
    setWidth(newWidth) {
        if (newWidth > 0) {
            this.height = newWidth;
        }
    }
    calculateArea() {
        return this.width * this.height;
    }
    calculatePerimeter() {
        return (this.height * this.width) * 2;
    }
}
const newCircle = new Circle(2.5);
const newRectangle = new rectangle(5, 12);
console.log(`Chu vi hình tròn: ${newCircle.calculatePerimeter()} - Diện tích: ${newCircle.calculateArea()}`);
console.log(`Chu vi hình chữ nhật: ${newRectangle.calculatePerimeter()} - Diện tích: ${newCircle.calculateArea()}`);
