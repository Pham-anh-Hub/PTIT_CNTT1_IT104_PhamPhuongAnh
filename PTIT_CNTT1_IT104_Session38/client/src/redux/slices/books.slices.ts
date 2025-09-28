import { createSlice } from "@reduxjs/toolkit"
import type { initialBooksType } from "../../interfaces/types"
import { addNewData, deleteBookInfor, editBookInfo, filterBookCategory, getAllData, searchBook, sortBook } from "../../apis/actionToData"


const initialState: initialBooksType = {
    status: "idle",
    data: [],
    error: null,
    filterData: []
}


const BooksListSlice = createSlice({
    name: "bookList",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllData.pending, (state) => {
            state.status = "pending"
        }).addCase(getAllData.fulfilled, (state, action) => {
            state.status = "success"
            state.data = action.payload
            state.filterData = action.payload
        }).addCase(addNewData.fulfilled, (state, action) => {
            state.filterData.push(action.payload)
        }).addCase(editBookInfo.fulfilled, (state, action) => {
            state.filterData = state.filterData.map((book) => book.id === action.payload.id ? { ...book, ...action.payload } : book)
        }).addCase(deleteBookInfor.fulfilled, (state, action) => {
            state.filterData = state.filterData.filter((book) => book.id !== action.payload)
            state.data = state.data.filter((book) => book.id !== action.payload)
        }).addCase(searchBook.fulfilled, (state, action) => {
            if (action.payload === null) {
                state.filterData = state.data; // reset lại dữ liệu gốc
            } else {
                state.filterData = action.payload;
            }
        }).addCase(filterBookCategory.fulfilled, (state, action) => {
            if (action.payload === null) {
                state.filterData = state.data; // reset lại dữ liệu gốc
            } else {
                state.filterData = action.payload;
            }
        }).addCase(sortBook.fulfilled, (state, action) => {
            state.filterData = action.payload
        })
    },
})
export default BooksListSlice.reducer