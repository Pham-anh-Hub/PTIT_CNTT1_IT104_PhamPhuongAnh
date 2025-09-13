const checkCondition = (display : (check : boolean) => void, condition : boolean) => {
    display(condition);
}
const displayFunction = (condition : boolean) => {
    setTimeout(()=>{
        console.log("Điều kiện trả về: ", condition);
    },1500)
}

checkCondition(displayFunction, true)