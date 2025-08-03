const insertArr = (array1, array2, index) => {
    array1.splice(index, 0, ...array2);
    return array1;
}
console.log(insertArr([1, 2, 3, 7, 8], [4, 5, 6], 3));
console.log(insertArr(["a", "b", "e", "f"], ["c", "d"], 2));
