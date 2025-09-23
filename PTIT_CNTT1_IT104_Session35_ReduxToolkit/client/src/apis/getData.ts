import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


/**
 * Phương thức createAsyncThunk (được tích hợp từ thư viện toolkit ) -> tạo ra 1 async action (xử lý actions bất đồng bộ)
 * * Thường được dùng khi gọi API, fetch (gọi về) dữ liệu server, hoặc làm việc với promise
 * * * Vì sẽ: Không phải viết quá nhiều boilerplate code
 *             Tự động tạo 3 loại action tương ứng tiến trình gọi API (pending, fulfilled, rejected)
*/
// ( Tên đối tượng đang làm việc / tên hàm  ) bắt buộc phải khác nhau
const getAllData = createAsyncThunk("data/getAllData", async () => {
    const response = await axios.get("http://localhost:3000/data")

    return response.data // trả về dữ liệu
});

export default getAllData