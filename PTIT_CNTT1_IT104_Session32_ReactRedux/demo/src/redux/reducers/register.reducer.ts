
export type AccountType = {
    id: number,
    email: string,
    password: string
}

const defaultAccount = {
    id: 0,
    email: "",
    password: ""
}


const registerReducer = (state: AccountType = defaultAccount, action: { type: string, payload: AccountType }) => {
    switch (action.type) {
        case "REGISTER":
            console.log(action.payload);
            // break
            return action.payload;
        default:
            return state
    }
}


export default registerReducer