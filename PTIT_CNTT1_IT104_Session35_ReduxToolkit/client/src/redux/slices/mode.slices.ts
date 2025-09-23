import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    displayMode: "flex"
}

const changeModeSlice = createSlice({
    name: "mode",
    initialState,
    reducers:{
        changeMode(state) {
            if(state.displayMode === "flex"){
                state.displayMode = "grid"
            }else{
                state.displayMode = "flex"
            }
        }
    }
})

export const {changeMode} = changeModeSlice.actions
export default changeModeSlice.reducer