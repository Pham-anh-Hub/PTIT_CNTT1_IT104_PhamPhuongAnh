import { createSlice } from "@reduxjs/toolkit";
import { addListToBoard, addNewBoard, addNewUser, closeTheBoard, deleteListInBoard, editInfoBoard, onEditListTitle, getAllUser, starredTheBoard, addNewTaskToList, deleteTaskInList, moveTaskToAnotherList, onTickTask, toggleLabelTask, addNewTaskLabel, deleteTaskLabel, updateDetailLabel, updateTaskDueDate, removeTaskDueDate, reOpenBoard, updateTaskTitleDescription, deleteBoard } from "../../apis/user.data";
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
        }).addCase(closeTheBoard.fulfilled, (state, action) => {
            const updatedUser = action.payload;
            state.filterUser = state.filterUser.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            );
        }).addCase(starredTheBoard.fulfilled, (state, action) => {
            const updatedUser = action.payload;
            state.filterUser = state.filterUser.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            );
        }).addCase(addListToBoard.fulfilled, (state, action) => {
            const updatedUser = action.payload;
            state.filterUser = state.filterUser.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            );
        }).addCase(deleteListInBoard.fulfilled, (state, action) => {
            const updatedUser = action.payload;
            state.filterUser = state.filterUser.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            );
        }).addCase(onEditListTitle.fulfilled, (state, action) => {
            const updatedUser = action.payload;
            state.filterUser = state.filterUser.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            );
        }).addCase(addNewTaskToList.fulfilled, (state, action) => {
            const updatedUser = action.payload;
            state.filterUser = state.filterUser.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            );
        }).addCase(deleteTaskInList.fulfilled, (state, action) => {
            const updatedUser = action.payload;
            state.filterUser = state.filterUser.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            );
        }).addCase(moveTaskToAnotherList.fulfilled, (state, action) => {
            const updatedUser = action.payload;
            state.filterUser = state.filterUser.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            );
        }).addCase(onTickTask.fulfilled, (state, action) => {
            const updatedUser = action.payload;
            state.filterUser = state.filterUser.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            );
        }).addCase(toggleLabelTask.fulfilled, (state, action) => {
            const updatedUser = action.payload;
            state.filterUser = state.filterUser.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            );
        }).addCase(addNewTaskLabel.fulfilled, (state, action) => {
            console.log("action.payload: ", action.payload);
            const updatedUser = action.payload;
            state.filterUser = state.filterUser.map((user) =>
                user.id === updatedUser.id ? updatedUser : user
            );
        }).addCase(deleteTaskLabel.fulfilled, (state, action) => {
            const updatedUser = action.payload
            state.filterUser = state.filterUser.map((user) => user.id === updatedUser ? updatedUser : user)
        }).addCase(updateDetailLabel.fulfilled, (state, action) => {
            const updatedUser = action.payload
            state.filterUser = state.filterUser.map((user) => user.id === updatedUser ? updatedUser : user)
        }).addCase(updateTaskDueDate.fulfilled, (state, action) => {
            const updatedUser = action.payload
            state.filterUser = state.filterUser.map((user) => user.id === updatedUser.id ? { ...updatedUser } : user)
        }).addCase(removeTaskDueDate.fulfilled, (state, action) => {
            const updatedUser = action.payload
            state.filterUser = state.filterUser.map((user) => user.id === updatedUser.id ? { ...updatedUser } : user)
        }).addCase(updateTaskTitleDescription.fulfilled, (state, action) => {
            const updatedUser = action.payload
            state.filterUser = state.filterUser.map((user) => user.id === updatedUser.id ? {...updatedUser} : user)
        }).addCase(reOpenBoard.fulfilled, (state, action) => {
            const updatedUser = action.payload
            state.filterUser = state.filterUser.map((user: User) => user.id === updatedUser.id ? {...updatedUser} : user)
        }).addCase(deleteBoard.fulfilled, (state, action) => {
            const updatedUser = action.payload
            state.filterUser = state.filterUser.map((user: User) => user.id === updatedUser.id ? {...updatedUser} : user)
        })
    },
})

export default userDataSlice.reducer