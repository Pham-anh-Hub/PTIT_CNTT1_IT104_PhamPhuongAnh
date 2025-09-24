import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { UserAccount } from "../../utils/types";

const initialState: UserAccount = {
    id: 0,
    userName: "",
    email: "",
    password: ""
}

const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        loginAccount(state, action: PayloadAction<{ targetAccount?: UserAccount }>) {
            if (action.payload.targetAccount) {
                console.log({...action.payload.targetAccount});
                console.log(state);
                return state = {...action.payload.targetAccount}
            }else{
                return state
            }
        }
    }
})

export const { loginAccount } = homeSlice.actions

export default homeSlice.reducer