import type { Board, User } from "../interfaces/board.interface";
import { axiosInstance } from "../utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit"

export const getAllUser = createAsyncThunk("users/getAllUser", async () => {
    const response = await axiosInstance.get("/users")
    return response.data
})

export const addNewUser = createAsyncThunk("users/addNewUser", async (newUser: User) => {
    const response = await axiosInstance.post("/users", newUser)
    return response.data // trả về phần tử được thêm
})
export const addNewBoard = createAsyncThunk("users/addNewBoard", async ({ id, newBoard }: { id: string; newBoard: Board }) => {
    try {
        // Lấy user hiện tại
        const user = (await axiosInstance.get(`/users/${id}`)).data;

        // Tạo bản cập nhật mới
        const updatedUser: User = {
            ...user,
            boards: [...user.boards, newBoard],
        };

        // Gửi PUT để cập nhật toàn bộ user
        const response = await axiosInstance.put(`/users/${id}`, updatedUser);

        return response.data; // ✅ Trả về user đã cập nhật
    } catch (error) {
        return error
    }
}
);

export const editInfoBoard = createAsyncThunk("user/editInfoBoard", async ({id, editBoard} : {id : string, editBoard : Board}) => {
    try {
        // Lấy user hiện tại
        const user = (await axiosInstance.get(`/users/${id}`)).data;
        const updatedBoard = user.boards.map((board : Board) => board.id === editBoard.id ? {...board, ...editBoard} : board)

        // Tạo bản cập nhật mới
        const updatedUser: User = {
            ...user,
            boards: [...updatedBoard]
        };

        // Gửi PUT để cập nhật toàn bộ user
        const response = await axiosInstance.put(`/users/${id}`, updatedUser);

        return response.data; // ✅ Trả về user đã cập nhật
    } catch (error) {
        return error
    }



})

