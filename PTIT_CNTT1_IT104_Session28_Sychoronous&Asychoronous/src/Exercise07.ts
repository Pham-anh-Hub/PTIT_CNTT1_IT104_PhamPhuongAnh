const myForEach = <T>(callBack : (currValue:T, index:number, array: T[]) => void, array : T[]) => {
    for (let i = 0; i < array.length; i++) {
        callBack(array[i], i, array)
    }
}

const display = <T>(currValue:T, index:number, array: T[]) => {
    console.log(`Phần tử: ${currValue}  | Vị trí: ${index}  | Array: [${array}]`);
}

myForEach(display,[1,2,3,4,5,6,7,8])