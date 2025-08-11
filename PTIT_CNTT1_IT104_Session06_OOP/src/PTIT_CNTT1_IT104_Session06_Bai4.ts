interface Geometry{
    calculateArea() : number;
    calculatePerimeter() : number;
}

class Circle implements Geometry{
    private radious : number;
    constructor(radious : number){
        this.radious = radious;
    }
    
    getRadious() : number{
        return this.radious;
    }
    
    setRadious(newRadious : number) : void {
        if(newRadious > 0 ){
            this.radious = newRadious;
        }
    }
    calculateArea(): number {
        return Math.PI * (this.radious ** 2);
    }
    calculatePerimeter(): number {
        return Math.PI * this.radious * 2;
    }
}
class rectangle implements Geometry{
    private height : number;
    private width : number;
    constructor(height : number, width : number){
        this.height = height;
        this.width = width;
    }

    getHeight(){
        return this.height;
    }
    getWidth(){
        return this.width;
    }
    setHeight(newHeight : number) : void {
        if(newHeight > 0 ){
            this.height = newHeight;
        }
    }

    setWidth(newWidth : number) : void {
        if(newWidth > 0 ){
            this.height = newWidth;
        }
    }

    
    
    calculateArea(): number {
        return this.width * this.height;
    }
    calculatePerimeter(): number {
        return (this.height * this.width) * 2
    }
}



const newCircle = new Circle(2.5);
const newRectangle = new rectangle(5,12);

console.log(`Chu vi hình tròn: ${newCircle.calculatePerimeter()} - Diện tích: ${newCircle.calculateArea()}`);
console.log(`Chu vi hình chữ nhật: ${newRectangle.calculatePerimeter()} - Diện tích: ${newCircle.calculateArea()}`);
