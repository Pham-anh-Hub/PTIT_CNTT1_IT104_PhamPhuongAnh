// Cách 1
const checkSame = (array) => {
    let map = [];
    // Duyet qua mang ban dau
    array.forEach(string => {
        // Duyet qua va bien doi tung (tach - sap xep - ghép lại)
        const present = string.split("").sort().join("");
        // kiểm tra xem nhóm từ chứa các ký tự đó đã tồn tại hya chưa
        if (!map[present]) {
            map[present] = []; // Tạo nhóm từ cùng chứa các ký tự mới
        }
        map[present].push(string);
    });
    return map;
};
console.log("Mang: ", checkSame(["eat", "tea", "tan", "ate", "nat", "bat"]));

// Cách 2
const checkSame2 = (array) => {
    let groupWord = {};
    for (const word of array) {
        const convertWord = word.split("").sort().join("");
        if (!groupWord[convertWord]) {
            groupWord[convertWord] = [];
        }
        groupWord[convertWord].push(word);
    }
    return Object.values(groupWord);
}
console.log(checkSame(["eat", "tea", "tan", "ate", "nat", "bat"]));


// Đặc điểm của function declaration
// hoisting
function sum(a, b) {
    return a + b;
}

// ! Lỗi already declared
const sum = (a, b) => {
    return a + b + 10;
}

console.log("sum: ", sum(10, 20));
