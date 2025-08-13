// Generic voi mang
const numbers : number[] =[];
const stuName : Array<string> = [];
    
    // Record <K, T> : đối tượng với key kiểu K, value kiểu T
const user : Record<string, string | number> = {
            // Key sẽ có kiểu string value sẽ mang kiểu string hoặc number
    id : 1 ,
    name: "A",
    age : 19
}


interface createUserDto{
    id : string
    name : string;
    age : number;
}

const partialCreateUser : Partial<createUserDto> = {};

// Phương thức readonly
interface Point {
    x : number,
    y : number,
}

const points : Readonly <Point> = {
    x : 10, y : 20,
}