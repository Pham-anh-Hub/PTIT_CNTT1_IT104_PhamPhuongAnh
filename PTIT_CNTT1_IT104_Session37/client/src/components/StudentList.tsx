import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/reduxHook/useHook";
import { deleteStudent, getAllList } from "../apis/getData";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { Modal } from "antd";
import type { Student } from "../redux/slices/students.slices";
import { setEditInfor } from "../redux/slices/form.slices";
export default function StudentList() {
  const dispatch = useAppDispatch();
  const [isConfirm, setIsConfirm] = useState<boolean>(false);
  const [targetDelete, setTargetDelete] = useState<Student | undefined>(
    undefined
  );
  const studentList = useAppSelector((state) => state.students.studentFilter);
  console.log(studentList);

  const openConfirmDelete = (id: number) => {
    const target = studentList.find((student) => student.id === id);
    if (target) {
      setIsConfirm(true)
      setTargetDelete(target);
    }
  };
  const handleConfirm = () => {
    if(targetDelete){
      dispatch(deleteStudent(Number(targetDelete?.id)))
      setIsConfirm(false)
    }

  }
  const handleCancelDelete = () => {
    setIsConfirm(false)
  }

  const handleEditInfor = (id : number) => {
    const target = studentList.find((student) => student.id === id)
    if(target){
      dispatch(setEditInfor({mode: "edit", editInfor: target}))
    }
  }

  useEffect(() => {
    dispatch(getAllList());
  }, [dispatch]);

  return (
    <>
      <div className="grid grid-cols-2 gap-2 justify-center">
        {studentList.map((student) => (
          <div key={student.id}
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
            className="flex items-center w-[calc(100%-8px)] justify-between border-1 border-gray-200 rounded-md p-2.5 bg-white"
          >
            <div>
              <h2 className="text-gray-900 text-xl">{student.name}</h2>
              <div className="flex gap-2 text-gray-400 text-[12px]">
                <p className="">Age: {student.age}</p> &#8226;{" "}
                <p>Grade: {student.grade}</p>
              </div>
            </div>
            <div>
              <CreateIcon onClick={() => handleEditInfor(Number(student.id))} className="text-gray-600" />
              <DeleteIcon
                className="text-gray-600 cursor-pointer"
                onClick={() => openConfirmDelete(Number(student.id))}
              />
            </div>
          </div>
        ))}
      </div>
      <Modal
        title="Xác nhận"
        closable={true}
        open={isConfirm}
        onOk={handleConfirm}
        onCancel={handleCancelDelete}
      >
        <p>Bạn xác nhận xóa sinh viên <b>{`<${targetDelete?.name}>`}</b> ?</p>
      </Modal>
    </>
  );
}
