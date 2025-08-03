const matchArray = (array1, array2) => {
    let newArr = [...array1, ...array2];
    newArr.sort((a, b) => a - b);
    return newArr;
}
console.log("Match2Array: ", matchArray([1, 11, 12, 5, 9], [4, 2, 7, 8]));
console.log("Match2Array: ", matchArray([1, 11, 2, 5, 9], [4, 2, 10, 8]));
