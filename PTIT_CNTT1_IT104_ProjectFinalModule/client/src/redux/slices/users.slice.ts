import { createSlice } from "@reduxjs/toolkit";
import { addNewBoard, addNewUser, editInfoBoard, getAllUser } from "../../apis/user.data";
import type { User } from "../../interfaces/board.interface";


type initialUserState = {
    status: "idle" | "pending" | "success" | "failed",
    users: User[],
    filterUser: User[],
    error: null | string
}

const initialState: initialUserState = {
    status: "idle",
    users: [],
    filterUser: [],
    error: null
}


const userDataSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllUser.pending, (state) => {
            state.status = "pending"
        }).addCase(getAllUser.fulfilled, (state, action) => {
            state.status = "success"
            state.filterUser = action.payload
            state.users = action.payload
        }).addCase(addNewUser.fulfilled, (state, action) => {
            state.filterUser.push(action.payload)
        }).addCase(addNewBoard.fulfilled, (state, action) => {
            const updatedUser = action.payload;
            state.filterUser = state.filterUser.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            );
        }).addCase(addNewBoard.rejected, (state, action) => {
            state.error = String(action.payload);
        }).addCase(editInfoBoard.fulfilled, (state, action) => {
            const updatedUser = action.payload;
            state.filterUser = state.filterUser.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            );
        })
    },
})

export default userDataSlice.reducer