import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8070",
    timeout: 1000,
    headers:{
        "Content-Type" : "application/json"
    }
})