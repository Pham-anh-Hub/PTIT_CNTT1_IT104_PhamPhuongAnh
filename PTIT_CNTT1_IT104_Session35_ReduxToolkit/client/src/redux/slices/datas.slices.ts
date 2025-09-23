// Tạo slice cho data

import { createSlice } from "@reduxjs/toolkit";
import getAllData from "../../apis/getData";
import type { initialStateType } from "../../utils/types";


// Khai báo giá trị khởi tạo chi state
const initialState: initialStateType = {
  status: "idle", // Trạng thái ban đầu (chưa thao tác gì cả)
  data: [], // Dữ liệu nhận về
  error: null,  // Lỗi báo (nếu có)
};

const dataSlice = createSlice({
  name: "data", // Phân biệt từng loại slice
  initialState,
  reducers: {},
  // Xử lý các tác vụ bất đồng bộ
  extraReducers(builder) {
    builder.addCase(getAllData.pending, (state) => {
      // Cập nhật trạng thái dữ liệu, đang lấy về
      state.status = "pending"
    }).addCase(getAllData.fulfilled, (state, action) => {
      state.status = "success" // Lấy dữ liệu về thành công
      console.log(action.payload);

      state.data = action.payload
    }).addCase(getAllData.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message
    })
  },

});

export default dataSlice.reducer;
// Cần export như trên để store hiểu đây là 1 reducer
