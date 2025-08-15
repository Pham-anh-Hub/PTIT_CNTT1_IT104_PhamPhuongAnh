const isGreat = <T extends boolean>(value : T) : void => {
    if(value === true){
        console.log("Xin chào");
    }else{
        console.log("Tạm biệt");
    }
}

const newGreat = true
isGreat(newGreat);