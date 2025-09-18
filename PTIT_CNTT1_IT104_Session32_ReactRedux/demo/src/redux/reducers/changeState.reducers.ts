const changeStateString = (state : string = "Rikkei Academy", action:{type: string}) => {
    switch(action.type){
        case "CHANGE":
            return state === "Rikkei Academy" ? "RikkeiSoft" : "Rikkei Academy"
        default :
            return state
    }
}
export default changeStateString