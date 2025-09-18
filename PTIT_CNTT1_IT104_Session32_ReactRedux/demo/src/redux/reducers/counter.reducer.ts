const counterReducer = (state = 0, action: { type: string }) => {
    switch (action.type) {
        case "INCREASE":
            return state + 1
        case "DECREASE":
            return state - 1
        default:
            return state
    }
}

export default counterReducer