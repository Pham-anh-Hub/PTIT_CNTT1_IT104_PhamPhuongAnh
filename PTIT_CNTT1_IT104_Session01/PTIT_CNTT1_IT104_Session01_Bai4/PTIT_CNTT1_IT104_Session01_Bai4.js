// Viết 1 arrow function kiểm tra một số là số chẵn hay lẻ 

const checkParity = (number) => {
    if (Number.isNaN(number)) {
        console.log(`${number} is not a number`);
    } else {
        // là 1 số
        if (number % 2 === 0) {
            console.log(`${number} is even number`);
        } else {
            console.log(`${number} is odd number`);
        }
    }
}

checkParity(1969);
checkParity(1968);
checkParity(a);

