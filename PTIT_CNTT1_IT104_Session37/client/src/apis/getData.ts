import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Student } from "../redux/slices/students.slices";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8080/",
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});

export const getAllList = createAsyncThunk("students/getAllList", async () => {
    const response = await axiosInstance.get("students");
    return response.data;
});

export const addStudent = createAsyncThunk(
    "students/addStudent",
    async (newStudent: Student) => {
        const response = await axiosInstance.post("students", newStudent);
        return response.data;
    }
);

export const deleteStudent = createAsyncThunk(
    "students/deleteStudent",
    async (id: number) => {
        await axiosInstance.delete(`students/${id}`);
        return id;
    }
);

export const editStudentInfo = createAsyncThunk(
    "students/editStudentInfo",
    async (newUpdate: Student) => {
        const response = await axiosInstance.patch(`students/${newUpdate.id}`, {
            name: newUpdate.name,
            age: newUpdate.age,
            grade: newUpdate.grade,
        });
        return response.data
    }
);

export const searchStudent = createAsyncThunk("students/searchStudent", async (keyword: string) => {
    if (!keyword.trim()) return null; // rỗng thì trả về null
    const response = await axiosInstance.get(
        `students?name_like=${keyword.toLowerCase().trim()}`
    );
    return response.data;
})

export const filterStudent = createAsyncThunk("students/filterStudent",
    async (grade: string) => {
        let query = "students?";

        // lọc theo trạng thái
        if (grade !== "All") {
            query += `grade_like=${grade}`;
        }

        const response = await axiosInstance.get(query);
        console.log(response.data);
        return response.data; // luôn trả về [] thay vì null
    })

export const arrangeStudent = createAsyncThunk("students/arrangeStudent",
    async (arrOption: string) => {
        const response = await axiosInstance.get("students")
        if (arrOption === "nameAz") {
            return [...response.data].sort((a: Student, b: Student) => (a.name.split(" ")[2]).localeCompare(b.name.split(" ")[2]))
        } else if (arrOption === "nameZa") {
            return [...response.data].sort((a: Student, b: Student) => (b.name.split(" ")[2]).localeCompare(a.name.split(" ")[2]))
        } else if (arrOption === "ageUp") {
            return [...response.data].sort((a: Student, b: Student) => a.age - b.age)
        } else if (arrOption === "ageDown") {
            return [...response.data].sort((a: Student, b: Student) => b.age - a.age)
        }else{
            return [...response.data]
        }
    }
)