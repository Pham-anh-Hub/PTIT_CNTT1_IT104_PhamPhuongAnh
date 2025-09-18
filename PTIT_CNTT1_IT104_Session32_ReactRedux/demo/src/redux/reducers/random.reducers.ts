const randomReducer = (state: number[] = [], action: { type: string }) => {
    switch (action.type) {
        case "RANDOM":
            return [...state, Math.round(Math.random() * 100)]
        default:
            return state
    }
}

export default randomReducer