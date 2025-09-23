import { createSlice } from "@reduxjs/toolkit";

const initialState: number[] = []


const randomSlice = createSlice({
    name: "random",
    initialState,
    reducers: {
        random(state) {
            state.push(Math.round(Math.random() * 100))
        }
    }
})

export const { random } = randomSlice.actions
export default randomSlice.reducer