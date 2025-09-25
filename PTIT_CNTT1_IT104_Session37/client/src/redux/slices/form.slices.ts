import { createSlice } from "@reduxjs/toolkit";
import type { Student } from "./students.slices";


interface initialEditState {
    mode: string,
    editInfor: Student
}


const initialState: initialEditState = {
    mode: "",
    editInfor: {
        name: "",
        age: 0,
        grade: ""
    }
}


const formActionSlice = createSlice({
    name: "formAction",
    initialState,
    reducers: {
        setEditInfor(state, action) {
            if (action.payload) {
                console.log(action.payload); 
                return action.payload
            }
        }
    }
})

export const { setEditInfor } = formActionSlice.actions
export default formActionSlice.reducer