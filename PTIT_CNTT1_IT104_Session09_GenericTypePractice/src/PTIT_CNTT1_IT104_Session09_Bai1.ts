const identity = <T>(arg: T): T => {
    return arg;
}

console.log(identity(5));
console.log(identity("hello"));
console.log(identity({ a: 1 }));

