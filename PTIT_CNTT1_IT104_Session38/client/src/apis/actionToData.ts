import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import type { Book } from "../interfaces/types"

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8070/",
    timeout: 1000,
    headers: {
        "Content-Type": "application/json"
    },
})


export const getAllData = createAsyncThunk("books/getAllData", async () => {
    const response = await axiosInstance.get("books")
    console.log(response.data)
    return response.data
})

export const addNewData = createAsyncThunk("books/addNewData", async (newData: Book) => {
    const response = await axiosInstance.post("books", newData)
    console.log(response.data);
    return response.data
})

export const editBookInfo = createAsyncThunk("books/editBookInfo", async (data: {
    id?: string;
    title: string;
    author: string;
    year: number;
    category: string;
}) => {
    const response = await axiosInstance.patch(`books/${data.id}`, { ...data })
    return response.data
})


export const deleteBookInfor = createAsyncThunk("books/deleteBookInfor", async (idTarget: string) => {
    await axiosInstance.delete(`books/${idTarget}`)
    return idTarget
})

export const searchBook = createAsyncThunk("books/searchBook", async (keyword: string) => {
    // Lấy ra theo truy vấn với title cả author luôn
    const [byTitle, byAuthor] = await Promise.all([
        axiosInstance.get(`books?title_like=${keyword}`),
        axiosInstance.get(`books?author_like=${keyword}`)
    ])

    const merged = [...byTitle.data, ...byAuthor.data].filter(
        (v, i, arr) => arr.findIndex(x => x.id === v.id) === i
    )
    return merged
})


export const filterBookCategory = createAsyncThunk("books/filterBookCategory", async (keyCate: string) => {
    let query = "books"
    if (keyCate && keyCate !== "all") {
        query += `/?category_like=${keyCate}`
    }
    const response = await axiosInstance.get(query)
    return response.data
})


export const sortBook = createAsyncThunk("books/sortBook", async (sortOpt: string) => {
    const response = await axiosInstance.get("books")
    if (sortOpt === "title_up") {
        return response.data.sort((prev: Book, next: Book) => prev.title.localeCompare(next.title))

    }
    if (sortOpt === "title_down") {
        return response.data.sort((prev: Book, next: Book) => next.title.localeCompare(prev.title))
    } else if (sortOpt === "year_up") {
        return response.data.sort((prev: Book, next: Book) => prev.year - next.year)

    } else if (sortOpt === "year_down") {
        return response.data.sort((prev: Book, next: Book) => next.year - prev.year)
    }
})