import type { User } from "../interfaces/board.interface";
import { axiosInstance } from "../utils/axiosInstance";
import {createAsyncThunk} from "@reduxjs/toolkit"

export const getAllUser = createAsyncThunk("users/getAllUser", async () => {
    const response = await axiosInstance.get("users")
    return response.data
})

export const addNewUser = createAsyncThunk("users/addNewUser", async (newUser : User) => {
    const response = await axiosInstance.post("users", newUser)
    return response.data // trả về phần tử được thêm
})