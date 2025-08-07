// kiểm tra chuỗi có phải toàn số không
const isFullNumber = (target : string) : boolean => {
    let check = Number(target);
    if(Number.isNaN(check)){
        return false;
    }else{
        return true;
    }
}

const isPrime = (number : number) : boolean  => {
    let count = 0;
    for (let i = 1; i < number; i++) {
        if(number % i ===  0){
            count++;
        }
    }
    if(count === 1){
        return true;
    }else{
        return false;
    }
}


const processInput = (input : string | number | boolean) => {
    if(typeof input === "string"){
        if(isFullNumber(input)){
            let targetInput = Number(input);
            console.log(targetInput ** 2);
        }else{
            let count = 0;
            for (let i = 0; i < input.length; i++) {
               if(Number.isNaN(Number(input[i]))){
                    count++;
               }
            }
            console.log(`Có ${count} ký tự chữ cái`);
        }
    }else if(typeof input === "number"){
        if(isPrime(input)){
            console.log("Là số nguyên tố");
        }else{
            console.log("Không phải số nguyên tố");
        }
    }else if(typeof input === "boolean"){
        if(input){
            console.log("Giá trị là true - Tiến hành xử lý");
        }else{
            console.log("Giá trị là false - dừng xử lý");

        }
    }
}


console.log("Thử với chuỗi: ");
processInput("123BCD");
processInput("125");

console.log("Thử với số: ");
processInput(7);
processInput(8);

console.log("Thử với boolean: ");
processInput(true);