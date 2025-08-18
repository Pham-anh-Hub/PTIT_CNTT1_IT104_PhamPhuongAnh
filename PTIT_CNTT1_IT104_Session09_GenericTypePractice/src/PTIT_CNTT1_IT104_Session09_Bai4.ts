const withDefault = <T>(arg?: T): T | "default" => {
    if (arg) {
        return arg;
    }
    return "default";
}

console.log(withDefault());
console.log(withDefault(87));
console.log(withDefault(true));

