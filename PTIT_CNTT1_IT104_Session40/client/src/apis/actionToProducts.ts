import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "./axiosInstance";
import type { ProductRow, ProductStatus } from "../interfaces/data.interfaces";

export const getAllProducts = createAsyncThunk("products/getAllProducts", async () => {
    const response = await axiosInstance.get("products")
    console.log(response.data);
    return response.data
})

export const addProduct = createAsyncThunk("products/addProducts", async (newProduct: ProductRow) => {
    const response = await axiosInstance.post("products", newProduct);
    return response.data
})

export const editProductInfo = createAsyncThunk("products/editProductInfo", async (editProduct: ProductRow) => {
    const response = await axiosInstance.patch(`products/${editProduct.id}`, { ...editProduct })
    return response.data
})

export const deleteProduct = createAsyncThunk("products/deleteProduct", async (targetId: string) => {
    const response = await axiosInstance.delete(`products/${targetId}`)
    console.log(response.data);
    return targetId
})

export const filterProductList = createAsyncThunk("products/filterProductList", async ({ targetFilter, keyword }: { targetFilter: ProductStatus | string; keyword: string }) => {
    let query = "products";
    if (targetFilter && targetFilter !== "all") {
        query += `?status_like=${targetFilter}`;
    }
    const filterResponse = await axiosInstance.get(query)
    const products: ProductRow[] = filterResponse.data;

    if (keyword?.trim()) {
        const lowerKeyword = keyword.toLowerCase().trim();
        return products.filter(
            (p) =>
                p.name.toLowerCase().includes(lowerKeyword) ||
                p.code.toLowerCase().includes(lowerKeyword)
        );
    }

    return products;
})
