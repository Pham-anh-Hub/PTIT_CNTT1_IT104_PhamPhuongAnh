// Tạo slice cho data

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FavourUser, initialDataType } from "../../utils/types";
import { getAllList } from "../../apis/getUserList";


// Khai báo giá trị khởi tạo chi state
const initialState: initialDataType = {
    status: "idle", // Trạng thái ban đầu (chưa thao tác gì cả)
    data: [], // Dữ liệu nhận về
    error: null,  // Lỗi báo (nếu có)
};

const favourUserSlice = createSlice({
    name: "favourUserList", // Phân biệt từng loại slice
    initialState,
    reducers: {
        toggleFavourUser(state, action: PayloadAction<{ userId: string }>) {
            const cloneState = [...state.data]
            state.data = [...cloneState.map((user) => user.id === action.payload.userId ? { ...user, favour: user.favour === "liked" ? "unlike" : "liked" } : user)]
        }
    },
    // Xử lý các tác vụ bất đồng bộ
    extraReducers(builder) {
        builder.addCase(getAllList.pending, (state) => {
            // Cập nhật trạng thái dữ liệu, đang lấy về
            state.status = "pending"
        }).addCase(getAllList.fulfilled, (state, action) => {
            state.status = "success" // Lấy dữ liệu về thành công
            console.log(action.payload);

            state.data = action.payload
        }).addCase(getAllList.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message
        })
    },

});

export const { toggleFavourUser } = favourUserSlice.actions
export default favourUserSlice.reducer;
// Cần export như trên để store hiểu đây là 1 reducer
