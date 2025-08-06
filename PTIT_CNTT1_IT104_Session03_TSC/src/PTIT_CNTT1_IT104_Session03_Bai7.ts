// let string : string = "banana";
let string : string = "hello world";

let newString = "";

for (let i = 0; i < string.length; i++) {
    if(newString.includes(string[i])){
        continue;
    }else{
        newString += string[i];
    }
}
console.log("New string: ", newString);
