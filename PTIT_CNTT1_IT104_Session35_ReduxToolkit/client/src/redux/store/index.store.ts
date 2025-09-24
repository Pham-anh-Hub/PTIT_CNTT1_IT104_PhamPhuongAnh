import { configureStore } from "@reduxjs/toolkit"
import dataSlice from "../slices/datas.slices"
import counterSlice from "../slices/counter.slice"
import randomSlice from "../slices/random.slices"
import themeSlice from "../slices/theme.slices"
import changeModeSlice from "../slices/mode.slices"
import menuModeSlice from "../slices/menu.slices"
import languageSlice from "../slices/language.slices"
import favourUserSlice from "../slices/likedUse.slices"
import loginSlice from "../slices/login.slices"
import homeSlice from "../slices/home.slices"


const store = configureStore({
  // Truyền vào danh sách các option
  reducer: {
    // Truyền vào danh sách các reducer - import từ slices
    data : dataSlice,
    counter : counterSlice,
    random : randomSlice,
    changeTheme : themeSlice,
    changeMode : changeModeSlice,
    menuMode : menuModeSlice,
    languageMode: languageSlice,
    favouritUser: favourUserSlice,
    login: loginSlice,
    userInfor: homeSlice
  },
})
export default store

// Định nghĩa type cho dispatch và selector
export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']