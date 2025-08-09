class Rectangle{
    private width : number;
    private height : number;
    constructor(width : number, height : number) {
        this.width = width;
        this.height = height;
    }
    getWidth(){
        return this.width;
    }
    getHeigth(){
        return this.height;
    }

    setWidth(newWidth : number){
        if (newWidth > 0) {
            this.width = newWidth;
        }
    }
    setHeight(newHeight : number){
        if (newHeight > 0 && newHeight > this.width) {
            this.width = newHeight;
        }
    }
    square(){
        return this.width * this.height;
    }
    cicruit(){
        return (this.height + this.width) * 2
    }
}

const newRect = new Rectangle(5 , 8);
console.log("Chiều dài: ", newRect.getHeigth());
console.log("Chiều rộng: ", newRect.getWidth());
console.log("Chu vi: ", newRect.cicruit());
console.log("Diện tích: ", newRect.square());
newRect.setWidth(12);
newRect.setHeight(10);
console.log("Chu vi sau cập nhật: ", newRect.cicruit());
console.log("Diện tích sau cập nhật:/ ", newRect.square());
