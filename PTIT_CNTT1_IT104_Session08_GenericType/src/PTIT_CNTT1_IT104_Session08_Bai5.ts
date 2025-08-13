const isGreaterZero = <T>(num : T) : Boolean => {
    if(Number(num) > 0){
        return true;
    }
    return false;
}

const isEven = <T>(arr: T[]): T | undefined => {
    return arr.find((num : T) => Number(num) % 2 === 0 && isGreaterZero(num));
} 

const numArr : Number[] = [3,5,2,1,4,6,];
console.log(isEven(numArr));
