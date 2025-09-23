import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    mode: "full"
}
const menuModeSlice = createSlice({
    name: "menuMode",
    initialState,
    reducers:{
        changeMenuMode(state){
            if(state.mode === "full"){
                state.mode = "short"
            }else{
                state.mode = "full"
            }
        }
    }
})

export const {changeMenuMode} = menuModeSlice.actions
export default menuModeSlice.reducer