import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getUserAccounts = createAsyncThunk("accounts/getUserAccounts", async () => {
    const response = await axios.get("http://localhost:3000/useAccounts")
    console.log(response.data);

    return response.data
})
