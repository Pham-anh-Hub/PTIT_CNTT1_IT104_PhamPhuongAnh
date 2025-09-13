const myFilter = <T>(callBack : (item : T[]) => void, targetValue : T, array : T[] ) => {
    const filterArr : T[] = []
    for (let i = 0; i < array.length; i++) {
        if(array[i] === targetValue){
            filterArr.push(array[i])
        }
    }
    callBack(filterArr)
    
}

const displayValue = <T>(items : T[]) => {
    console.log(`[${items}]`);
    
}

myFilter(displayValue, 3, [2,5,4,7,6,1,5,2,1,2])