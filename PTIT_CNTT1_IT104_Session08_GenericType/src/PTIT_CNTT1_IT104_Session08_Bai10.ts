const isSame = <T>(str : T[]) : Boolean => {
    let checkStr : T[] = [];
    for (const item of str) {
        if(checkStr.includes(item)){
            return true;
        }else{
            checkStr.push(item);
        }
    }
    return false;
}


// Khai báo 1 hàm có kiểu dữ liệu T, và T được giới hạn có thuộc tính length kiểu dữ liệu number (VD: array, string)
const checkLongest = <T extends {length : number}> (str: T[]): T => {
    
    let longestStr : T = str[0];
    for (const item of str) {
        if(item.length > longestStr.length && !isSame(item as any)){
            longestStr = item;
        }
    }
    return longestStr;
}


const array = ["hello", "world", "apple", "banana", "orange", "pumpkin", "cucumber"];
console.log(checkLongest(array));
