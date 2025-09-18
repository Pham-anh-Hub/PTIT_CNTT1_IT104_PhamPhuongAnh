import type { AccountType } from "./register.reducer";



const loginReducer = (state: AccountType = {
    id: 0,
    email: "",
    password: ""
}, action: { type: string, payload: AccountType }) => {
    switch (action.type) {
        case "LOGIN":
            return action.payload
        default:
            return state
    }
}

export default loginReducer