import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: "light" }

const themeSlice = createSlice({
    name: "changeTheme",
    initialState,
    reducers: {
        changeTheme(state) {
            if (state.theme === "light") {
                state.theme = "dark"
            } else {
                state.theme = "light"

            }
        }
    }
})

export const { changeTheme } = themeSlice.actions
export default themeSlice.reducer