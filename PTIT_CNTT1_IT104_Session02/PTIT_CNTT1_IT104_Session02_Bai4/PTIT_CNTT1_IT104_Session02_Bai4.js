const checkElement = (arr, number) => {
    if (arr.includes(number)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkElement([1, 2, 3, 4, 5], 3));
console.log(checkElement([1, 2, 3, 4, 5], 6));
