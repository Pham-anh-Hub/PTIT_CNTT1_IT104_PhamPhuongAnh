import { createSlice } from "@reduxjs/toolkit";
import type { initialCategoryType } from "../../interfaces/data.interfaces";
import { addNewCategory, deleteCategory, editCategory, filterCategoryList, getAllCategory } from "../../apis/actionToCategories";
import { act } from "react";

const initialCategories: initialCategoryType = {
    categories: [],
    filterCategories: [],
    error: null,
    status: "idle"
}



const categorySlice = createSlice({
    name: "categories",
    initialState: initialCategories,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllCategory.pending, (state) => {
            state.status = "pending"
        }).addCase(getAllCategory.fulfilled, (state, action) => {
            state.status = "success"
            state.categories = action.payload
            state.filterCategories = action.payload
        }).addCase(addNewCategory.fulfilled, (state, action) => {
            state.filterCategories.push(action.payload)
            state.categories.push(action.payload)
        }).addCase(editCategory.fulfilled, (state, action) => {
            state.filterCategories = state.filterCategories.map((category) => category.id === action.payload.id ? { ...category, ...action.payload } : category)
        }).addCase(deleteCategory.fulfilled, (state, action) => {
            state.filterCategories = state.filterCategories.filter((category) => category.id !== action.payload)
        }).addCase(filterCategoryList.fulfilled, (state, action) => {
            state.filterCategories = action.payload
        })
    },

})

export default categorySlice.reducer