
const flatten = <T>(arr : T[]) : T[] => {
    let result : T[] = [];
    arr.forEach(item => {
        if(Array.isArray(item)){
            result = result.concat(flatten(item));
        }else{
            result.push(item)
        }
    });
    return result;
}

const arr  = [[1, [2, [3, 4], 5], 7, 8], 9];
console.log(flatten(arr));
