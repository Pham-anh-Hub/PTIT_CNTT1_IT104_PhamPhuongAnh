import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: "http://localhost:8070", // Netlify tự động route tới folder functions
    timeout: 5000,
    headers: {
        "Content-Type": "application/json"
    }
})
