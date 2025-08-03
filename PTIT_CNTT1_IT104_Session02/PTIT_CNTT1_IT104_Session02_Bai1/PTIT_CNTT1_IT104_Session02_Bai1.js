const sum = (...array) => {
    let total = 0;
    for (const number of array) {
        if (number % 2 == 0) {
            total += number;
        }
    }
    return total;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
