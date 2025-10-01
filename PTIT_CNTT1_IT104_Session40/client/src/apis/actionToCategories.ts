import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";
import type { CategoryRow, CategoryStatus } from "../interfaces/data.interfaces";


export const getAllCategory = createAsyncThunk("categories/getAllCategory", async () => {
    const response = await axiosInstance.get("categories")
    return response.data
})

export const addNewCategory = createAsyncThunk("categories/addNewCategory", async (newCategory: CategoryRow) => {
    const response = await axiosInstance.post("categories", newCategory)
    return response.data
})


export const editCategory = createAsyncThunk("categories/editCategory", async (editCategory: CategoryRow) => {
    const response = await axiosInstance.patch(`categories/${editCategory.id}`, { ...editCategory })
    return response.data
})

export const deleteCategory = createAsyncThunk("categories/deleteCategory", async (target: string) => {
    const response = await axiosInstance.delete(`categories/${target}`)
    console.log(response.data);
    return target
})


export const filterCategoryList = createAsyncThunk("Categories/filterCategoryList", async ({ targetFilter, keyword }: { targetFilter: CategoryStatus | string, keyword: string }) => {
    let query = "categories";
    console.log(targetFilter);

    if (targetFilter && targetFilter !== "all") {
        query += `?status_like=${targetFilter}`;
    }
    const response = await axiosInstance.get(query)
    const categoryFilter: CategoryRow[] = response.data
    if (keyword?.trim()) {
        return categoryFilter.filter((c) => c.name.toLowerCase().includes(keyword.toLowerCase().trim()))
    }
    console.log(categoryFilter);

    return categoryFilter
})
