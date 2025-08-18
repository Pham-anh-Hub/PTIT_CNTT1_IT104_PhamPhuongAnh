const mergeObject = <T, U>(a: T, b: U): T & U => {
    return { ...a, ...b };
}

const person = { name: "John" }
const age = { age: 19 };
console.log("Object: ", mergeObject(person, age));
