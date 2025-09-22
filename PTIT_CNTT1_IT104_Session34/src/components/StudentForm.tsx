import {
  Button,
  MenuItem,
  Select,
  TextField,
  type SelectChangeEvent,
} from "@mui/material";

import React, { useEffect, useState } from "react";
import type { Student } from "../utils/types";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store/index.store";

interface StudentFormProps {
  onSubmit: (student: Student) => void;
}

type InputChangeEvent = React.ChangeEvent<
  HTMLInputElement | HTMLTextAreaElement
>;
type FormChangeEvent = InputChangeEvent | SelectChangeEvent;

const StudentForm: React.FC<StudentFormProps> = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const defaultValue: Student = {
    id: "",
    name: "",
    age: 0,
    gender: "Nam",
    birthday: "",
    hometown: "",
    address: "",
  };
  const {student, mode} = useSelector((state: RootState) => state.formInfo);
  const [statusSubmit, setStatusSubmit] = useState<string>("add");

  // const [statusSubmit, setStatusSubmit] = useState<string>(`${targetUpdate ? "edit" : "add"}`)
  const [form, setForm] = React.useState<Student>({
    id: "",
    name: "",
    age: 0,
    gender: "Nam",
    birthday: "",
    hometown: "",
    address: "",
  });
  useEffect(() => {
    if (student){
      if(mode === "edit"){
        setStatusSubmit("edit")
        setForm(student)
      }else if(mode === "detail"){
        setStatusSubmit("detail")
        setForm(student)
      }else{
        setForm(defaultValue)
      }
    }
  }, [student, mode]);

  const handleChange = (e: FormChangeEvent) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = () => {
    if (!form.id || !form.name) return;
    onSubmit(form);
    console.log(form);
    dispatch({ type: "ADD", payload: form });

    setForm({
      id: "",
      name: "",
      age: 0,
      gender: "Nam",
      birthday: "",
      hometown: "",
      address: "",
    });
  };

  const handleEdit = () => {
    console.log("new Edit: ", form);
    dispatch({ type: "EDIT", payload: form });
    setForm({
      id: "",
      name: "",
      age: 0,
      gender: "Nam",
      birthday: "",
      hometown: "",
      address: "",
    });
    setStatusSubmit("add");
  };

  return (
    <div className="w-1/3 p-4 border rounded-xl shadow">
      <h2 className="font-semibold mb-4">Thông Tin Sinh Viên</h2>
      <div className="flex flex-col gap-4">
        <TextField
          label="Mã sinh viên"
          name="id"
          value={form.id}
          onChange={handleChange}
          fullWidth
          // disabled = {Boolean(targetUpdate)}
        />
        <TextField
          label="Tên sinh viên"
          name="name"
          value={form.name}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Tuổi"
          name="age"
          type="number"
          value={form.age}
          onChange={handleChange}
          fullWidth
        />
        <Select
          name="gender"
          value={form.gender}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="Nam">Nam</MenuItem>
          <MenuItem value="Nữ">Nữ</MenuItem>
        </Select>
        <TextField
          type="date"
          label="Ngày sinh"
          name="birthday"
          value={form.birthday}
          onChange={handleChange}
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Nơi sinh"
          name="hometown"
          value={form.hometown}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          label="Địa chỉ"
          name="address"
          value={form.address}
          onChange={handleChange}
          fullWidth
        />
        <Button
          variant="contained"
          color="primary"
          onClick={
            statusSubmit === "edit"
              ? handleEdit
              : statusSubmit === "detail"
              ? () => dispatch({ type: "RESETFORM" }) // hoặc đóng modal
              : handleSubmit
          }
        >
          {statusSubmit === "edit"
            ? "Edit"
            : statusSubmit === "detail"
            ? "Close"
            : "Submit"}
        </Button>
      </div>
    </div>
  );
};

export default StudentForm;
