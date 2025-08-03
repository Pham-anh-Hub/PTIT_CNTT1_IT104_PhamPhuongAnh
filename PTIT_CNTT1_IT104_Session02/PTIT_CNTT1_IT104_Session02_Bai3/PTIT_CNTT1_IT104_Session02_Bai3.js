const typeConsole = (type = "log") => {
    return `Đây là type: ${type}`;
}

console.log(typeConsole());
console.log(typeConsole("error"));
console.log(typeConsole("warn"));
