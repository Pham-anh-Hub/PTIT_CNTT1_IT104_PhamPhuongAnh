const merge = <T>(obj1 : T[][]) : T[] => {
    let newArr : T[] = [];
    for (let i = 0; i < obj1.length; i++) {
        newArr = newArr.concat([...obj1[i]]);
    }
    return newArr;
}
console.log(merge( [[1, 2], [3, 4], [5, 6]]));

