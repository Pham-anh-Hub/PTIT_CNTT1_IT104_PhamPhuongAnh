let i = 1;
const displayNumber = (callback : (num : number) => void, ms : number ) => {
    setInterval(()=> {
        callback(i);
        i++;
    }, ms)
}

const logNumber = (num : number) => {
    console.log("Phần tử thứ: ", num);
    // num++;
}

displayNumber(logNumber, 1000)