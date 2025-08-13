const mergeObj = <T, U>(a : T, b: U) : T & U => {
    return {...a, ...b};
}

const newObj = mergeObj({id : "001", name : "Nguyễn Văn A"},{age : 19});
console.log(newObj);
