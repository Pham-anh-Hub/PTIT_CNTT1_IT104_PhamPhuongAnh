import { createSlice } from "@reduxjs/toolkit";
import type { UserAccount } from "../../utils/types";


const initialState: UserAccount[] = [{
    id: 1,
    userName: "john_doe",
    email: "john@example.com",
    password: "123456"
},
{
    id: 2,
    userName: "jane_smith",
    email: "jane@example.com",
    password: "12345678"
},
{
    id: 3,
    userName: "alice_wonder",
    email: "alice@example.com",
    password: "alice@2025"
},
{
    id: 4,
    userName: "bob_builder",
    email: "bob@example.com",
    password: "bob12345"
}]

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {}
})
export default loginSlice.reducer