import { createSlice } from "@reduxjs/toolkit";
import type { UserAccount } from "../../utils/types";


const initialState: UserAccount = {
    id: "",
    email: "",
    password: ""
}


const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        loginAction(state) {
            if ()
        }
    }
})