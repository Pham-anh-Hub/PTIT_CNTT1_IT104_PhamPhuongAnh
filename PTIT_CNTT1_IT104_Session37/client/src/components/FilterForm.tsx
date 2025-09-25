import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/reduxHook/useHook";
import { arrangeStudent, filterStudent, searchStudent } from "../apis/getData";

export default function FilterForm() {
  const [grade, setGrade] = React.useState("");
  const studentList = useAppSelector((state) => state.students.students);
  const dispatch = useAppDispatch();
  const [search, setSearch] = useState<string>("");
  const [filterOpt, setFilterOpt] = useState<string>("");
  const handleClear = () => {
    setSearch("");
    setFilterOpt("");
    setGrade("");
    window.location.reload()
  };

  const handleSearchStudent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    dispatch(searchStudent(e.target.value));
  };

  return (
    <div
      className="flex w-[100%] gap-2.5 border-1 p-3.5 border-gray-200 rounded-[16px] bg-white"
      style={{ boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px" }}
    >
      <TextField
        value={search}
        onChange={handleSearchStudent}
        fullWidth
        id="outlined-basic"
        label="Tìm theo tên"
        variant="outlined"
      />
      <FormControl className="flex flex-col gap-2.5" fullWidth>
        <InputLabel id="demo-simple-select-autowidth-label">Grade</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={grade}
          onChange={(e) => {
            const filterGrade = e.target.value;
            setGrade(filterGrade);
            dispatch(filterStudent(filterGrade));
          }}
          autoWidth
          label="Grade"
        >
          <MenuItem value="All">
            <em>All</em>
          </MenuItem>
          {studentList.map((student) => (
            <MenuItem value={student.grade.toLowerCase()}>
              {student.grade}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl className="flex flex-col gap-2.5" fullWidth>
        <InputLabel id="demo-simple-select-autowidth-label">Sắp xếp</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={filterOpt}
          onChange={(e) => {
            const option = e.target.value;
            setFilterOpt(option);
            dispatch(arrangeStudent(option));
          }}
          autoWidth
          label="Age"
        >
          <MenuItem value="">
            <em>All</em>
          </MenuItem>
          <MenuItem value={"nameAz"}>Name A → Z</MenuItem>
          <MenuItem value={"nameZa"}>Name Z → A</MenuItem>
          <MenuItem value={"ageUp"}>Age &#8593;</MenuItem>
          <MenuItem value={"ageDown"}>Age &#8595;</MenuItem>
        </Select>
      </FormControl>
      <Button onClick={handleClear} variant="outlined">
        CLEAR
      </Button>
    </div>
  );
}
