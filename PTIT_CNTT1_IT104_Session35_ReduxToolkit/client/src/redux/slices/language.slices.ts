import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


const initialState = {
    mode: "vi",
    text: "Học viện Rikkei"
}

const languageSlice = createSlice({
    name: "language",
    initialState,
    reducers:{
        changeLanguage(state, action: PayloadAction<"en" | "vi">){
            if(state.mode == "vi"){
                state.text = "Rikkei Academy"
                state.mode = action.payload === "vi" ? "en" : "vi"
            }else{
                state.text = "Học viện Rikkei"
                state.mode = action.payload === "vi" ? "en" : "vi"
            }
        }
    }
})

export const {changeLanguage} = languageSlice.actions
export default languageSlice.reducer