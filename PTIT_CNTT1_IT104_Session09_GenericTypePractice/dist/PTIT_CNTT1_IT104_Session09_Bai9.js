"use strict";
const filterByType = (array, check) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        check.forEach(type => {
            if (typeof array[i] === type && array[i] !== null) {
                result.push(array[i]);
            }
        });
    }
    return result;
};
const mixedArray = [1, 'hello', 3, 'world', 5, 'typescript', true, null, undefined, { name: 'Alice' }];
console.log(filterByType(mixedArray, ["number", "string"]));
console.log(filterByType(mixedArray, ["object"]));
