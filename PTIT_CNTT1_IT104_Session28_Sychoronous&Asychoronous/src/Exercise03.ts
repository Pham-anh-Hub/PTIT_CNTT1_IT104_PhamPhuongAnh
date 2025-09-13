const numbers : number[] = [1,2,3,4,5,6,7]
const processArray = (callback : (item:number) =>void, array : number[]) => {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}
const callbackFunction = (item : number) => {
    setTimeout(()=>{
        console.log(`Phần tử thứ: ${item}`);
    },1000)
    // Bất đồng bộ -> thực hiện với tất cả các phần tử mảng -> sau 1s in ra tất cả 
}

processArray(callbackFunction, numbers)