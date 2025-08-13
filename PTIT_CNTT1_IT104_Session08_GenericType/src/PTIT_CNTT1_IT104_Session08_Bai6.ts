const findElement = <T>(nums : T[], value : T) : T |undefined => {
    return nums.find((number : T) => number === value);
}

const input : string | null = prompt("Nhập vào 1 mảng hoa quả: ");
if (input) {
    const arr = input.split(" ").map((item) => item.trim());
    const value = prompt("Nhập vào loại quả cần tìm: ");
    const target = findElement(arr, value);
    if (target) {
        console.log(`Giá trị cần tìm: ${target}`);
    }
}


