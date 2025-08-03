const checkSame = (array) => {
    let map = [];
    array.forEach(string => {
        const temp = string.split("").sort().join("");
        // kiểm tra xem nhóm từ chứa các ký tự đó đã tồn tại hya chưa
        if (!map[temp]) {
            map[temp] = []; // Tạo nhóm từ cùng chứa các ký kự giống nhau mới
        }
        map[temp].push(string);
    });
    return map;
};
console.log(checkSame(["eat", "tea", "tan", "ate", "nat", "bat"]));
