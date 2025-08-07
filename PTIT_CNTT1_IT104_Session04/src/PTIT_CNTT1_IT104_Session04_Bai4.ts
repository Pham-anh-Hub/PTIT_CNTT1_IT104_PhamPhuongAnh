const number1 = 12;
const number2 = "Số mười";
const number3 = 9;

const handleNumber = (number : number | string) => {
    if(typeof number === "string"){
        console.log(`${number.length} ký tự`);
    }else{
        if(number % 2 === 0){
            console.log(`${number} là số chẵn`);
        }else{
            console.log(`${number} là số lẻ`);
        }
    }
}

handleNumber(number1);
handleNumber(number2);
handleNumber(number3);
