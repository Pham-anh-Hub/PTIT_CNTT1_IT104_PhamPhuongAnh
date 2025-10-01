import { createSlice } from "@reduxjs/toolkit";
import { addProduct, deleteProduct, editProductInfo, filterProductList, getAllProducts } from "../../apis/actionToProducts";
import type { initialProductType } from "../../interfaces/data.interfaces";


const initialStateProducts: initialProductType = {
    products: [],
    filterProducts: [],
    status: "idle",
    error: null
}

const productManagerSlice = createSlice({
    name: "products",
    initialState: initialStateProducts,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(getAllProducts.pending, (state) => {
            state.status = "pending"
        }).addCase(getAllProducts.fulfilled, (state, action) => {
            state.status = "success"
            state.products = action.payload
            state.filterProducts = action.payload
        }).addCase(addProduct.fulfilled, (state, action) => {
            state.filterProducts.push(action.payload)
            state.products.push(action.payload)
        }).addCase(editProductInfo.fulfilled, (state, action) => {
            state.filterProducts = state.filterProducts.map((product) => product.id === action.payload.id ? { ...product, ...action.payload } : product)
        }).addCase(deleteProduct.fulfilled, (state, action) => {
            state.filterProducts = state.filterProducts.filter((product) => product.id !== action.payload)
        }).addCase(filterProductList.fulfilled, (state, action) => {
            state.filterProducts = action.payload
        })
    },
})

export default productManagerSlice.reducer