const changeThemeReducer = (state : string = "light", action:{type : string}) => {
    switch(action.type){
        case "CHANGETHEME":
            return state === "light" ? "dark" : "light"
        default:
            return state
    }
}

export default changeThemeReducer