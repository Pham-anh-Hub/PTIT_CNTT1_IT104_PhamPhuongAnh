import { createSlice } from "@reduxjs/toolkit";
import {
  addStudent,
  arrangeStudent,
  deleteStudent,
  editStudentInfo,
  filterStudent,
  getAllList,
  searchStudent,
} from "../../apis/getData";

export interface Student {
  id?: number;
  name: string;
  age: number;
  grade: string;
}

interface initialStateType {
  status: "idle" | "pending" | "success" | "failed";
  students: Student[];
  studentFilter: Student[];
  error: null | undefined | string;
}

const initialState: initialStateType = {
  status: "idle",
  students: [],
  studentFilter: [],
  error: null,
};

const studentListSlice = createSlice({
  name: "students",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getAllList.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getAllList.fulfilled, (state, action) => {
        state.status = "success";
        state.students = action.payload;
        state.studentFilter = action.payload;
      })
      .addCase(addStudent.fulfilled, (state, action) => {
        state.studentFilter.push(action.payload);
      })
      .addCase(deleteStudent.fulfilled, (state, action) => {
        state.studentFilter = state.students.filter(
          (student) => student.id !== action.payload
        );
        // Cách 2: tìm index -> dùng splice
      })
      .addCase(editStudentInfo.fulfilled, (state, action) => {
        console.log(action.payload);
        state.studentFilter = state.students.map((student) =>
          student.id === action.payload.id
            ? { ...student, ...action.payload }
            : student
        );
      })
      .addCase(searchStudent.fulfilled, (state, action) => {
        if (action.payload === null) {
          state.studentFilter = state.students; // input rỗng
        } else {
          state.studentFilter = action.payload; // kết quả từ server
        }
      })
      .addCase(filterStudent.fulfilled, (state, action) => {
        state.studentFilter = action.payload;
      })
      .addCase(arrangeStudent.fulfilled, (state, action) => {
        state.studentFilter = action.payload
      });
  },
});

export default studentListSlice.reducer;
