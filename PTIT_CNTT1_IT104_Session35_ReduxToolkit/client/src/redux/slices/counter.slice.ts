import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        // Nơi khai báo các hàm và xử lý các tac vụ
        increase(state) {
            state.value += 1
        },

        decrease(state) {
            state.value -= 1
        },
        reset(state){
            state.value = 0
        }

    }
})

export const {increase, decrease, reset} = counterSlice.actions

export default counterSlice.reducer