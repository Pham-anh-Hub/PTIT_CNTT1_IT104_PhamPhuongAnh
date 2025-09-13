const delayCallback = (callback : () => void, ms : number) => {
    setTimeout(()=>{
        callback();
    }, ms)
}

const delayedFunction = () => {
    console.log("Hàm được thực hiện sau 2s delay");
}

delayCallback(delayedFunction, 2000);