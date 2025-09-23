import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllList = createAsyncThunk("list/getAllList", async () => {
    const response =  axios.get("http://localhost:3000/favouriteUser")
    
    return (await response).data
})