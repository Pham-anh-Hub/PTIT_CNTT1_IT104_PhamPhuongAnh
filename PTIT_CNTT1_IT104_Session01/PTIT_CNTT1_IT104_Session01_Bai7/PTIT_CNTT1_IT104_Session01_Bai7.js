const array = [[1, 2], [5, 4], [3, 9]];

let sumArr = [];
for (let i = 0; i < array.length; i++) {
    let total = array[i].reduce((total, currValue) => {
        return total + currValue;
    });
    sumArr.push(total);
}
console.log(sumArr);
