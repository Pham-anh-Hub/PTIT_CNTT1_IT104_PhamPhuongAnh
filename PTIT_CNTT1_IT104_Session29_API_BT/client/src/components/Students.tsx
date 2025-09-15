import axios from "axios";
import React, { useEffect, useState } from "react";
import StudentList from "./StudentList";
import DeleteModel from "./DeleteModel";

interface Student {
  id?: number;
  studentName: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  createAt: string;
}

export default function Students() {
  const [students, setStudents] = useState<Student[]>([]);
  const [isOpenModel, setIsOpenModel] = useState<boolean>(false);
  const [studentDelete, setStudenDelete] = useState<Student | undefined>(
    undefined
  );
  const [inputID, setInputId] = useState<number | undefined>(undefined);
  const [student, setStudent] = useState<Student>({
    studentName: "",
    email: "",
    address: "",
    phone: "",
    status: false,
    createAt: "",
  });
  // Bài 3 - cấu hình ở db.json
  // bài 4 - hàm getAllStudent
  const getAllStudent = () => {
    axios
      .get("http://localhost:8080/students")
      .then((response) => {
        console.log("Danh sách học sinh: ", response.data);
        setStudents(response.data);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getAllStudent();
  }, []);

  //   Bài 5 - hàm tìm kiếm sinh viên theo id
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputId(Number(e.target.value));
  };

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    axios
      .get(`http://localhost:8080/students/${inputID}`)
      .then((response) => console.log("Sinh viên cần tìm: ", response.data))
      .catch(() => console.error("Không tìm thấy bản ghi"))
      .finally(() => {
        console.log("Hoàn thành tìm kiếm");
        setInputId(undefined);
      });
  };

  //    Bài 6 -
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setStudent({ ...student, [name]: name === "status" ? true : value });
  };
  const handleAddStudent = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("student: ", student);
    axios
      .post("http://localhost:8080/students", student)
      .then(() => {
        console.log("students sau khi add: ");
        getAllStudent();
        // reset form thêm mới
        setStudent({
          studentName: "",
          email: "",
          address: "",
          phone: "",
          status: false,
          createAt: "",
        });
      })
      .catch(() => {
        console.log("Thêm không thành công");
      });
  };

  const handleDeleteStudent = (id: number) => {
    setIsOpenModel(true);
    console.log(id);
    const cloneTargetStudent = students.find(
      (student: Student) => student.id === id
    );
    if (cloneTargetStudent) {
      console.log(cloneTargetStudent);

      setStudenDelete(cloneTargetStudent);
    }
  };

  return (
    <>
      <div className="students">
        <h2>Students</h2>
        <form className="form-search" onSubmit={handleSearch} action="">
          <input
            className="border-1 p-1.5 rounded-md"
            onChange={handleInput}
            value={inputID ? inputID : ""}
            type="text"
            placeholder="Tìm sinh viên theo id"
          />
          <button
            className="border-1 p-1.5 rounded-md bg-blue-400 text-amber-50"
            onClick={handleSearch}
            type="submit"
          >
            Tìm kiếm
          </button>
        </form>
        <form
          onSubmit={handleAddStudent}
          className="form-add flex items-center"
          action=""
        >
          <input
            className="border-1"
            onChange={handleChange}
            name="studentName"
            type="text"
            placeholder="Tên sinh viên"
          />
          <input
            className="border-1"
            onChange={handleChange}
            name="email"
            type="text"
            placeholder="Email sinh viên"
          />
          <input
            className="border-1"
            onChange={handleChange}
            name="address"
            type="text"
            placeholder="Địa chỉ"
          />
          <input
            className="border-1"
            onChange={handleChange}
            name="phone"
            type="text"
            placeholder="Liên hệ"
          />
          <div className="flex justify-center items-center">
            <label htmlFor="">Status: </label>
            <input
              name="status"
              checked={student?.status ? true : false}
              onChange={handleChange}
              type="radio"
            />
          </div>
          <input
            className="border-1"
            onChange={handleChange}
            name="createAt"
            type="date"
          />
          <button
            className="border-1 bg-blue-200 border-blue-600 rounded-md"
            type="submit"
          >
            Thêm
          </button>
        </form>
      </div>
      <div>
        <div className="p-2.5 flex items-center justify-between bg-blue-950">
          <h2 className="text-3xl text-white">Quản lý sinh viên</h2>
          <button className="bg-blue-200 text-xl text-blue-800 border-1 rounded-md p-2 cursor-pointer hover:bg-blue-300 opacity-70">
            ➕ Thêm mới sinh viên
          </button>
        </div>
        <div>
          <StudentList
            onDeleteStudent={handleDeleteStudent}
            students={students}
          />
        </div>
      </div>
      {isOpenModel && studentDelete ? (
        <DeleteModel
          targetDelete={studentDelete}
          isModalOpen={isOpenModel}
          setIsModalOpen={setIsOpenModel}
          getRenderList={getAllStudent}
        />
      ) : (
        <></>
      )}
    </>
  );
}
