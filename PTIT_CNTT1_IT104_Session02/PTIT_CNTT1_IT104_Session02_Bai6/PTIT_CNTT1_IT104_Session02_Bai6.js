const checkEndString = (str1, str2) => {
    if (str1.endsWith(str2)) {
        return true;
    } else {
        return false;
    }
}

console.log(checkEndString(("Hello, World!", "Hello")));
console.log(checkEndString("Hi there!", "there!"));
