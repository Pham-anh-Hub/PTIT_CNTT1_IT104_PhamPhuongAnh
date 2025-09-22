import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import React, { useState } from "react";
import type { Student } from "../utils/types";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store/index.store";
import {Modal} from "antd"

interface StudentListProps {
  students: Student[];
}

const StudentList: React.FC<StudentListProps> = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [targetDelete, setTargetDelete] = useState<Student | undefined>(undefined)
  const students = useSelector((state: RootState) => state.students);
  const dispatch = useDispatch()
  const handleDelete = (id: string) => {
    const cloneTarget = students.find((student) => student.id === id)
    if(cloneTarget){
      setIsModalOpen(true)
      setTargetDelete(cloneTarget)
    }
  };

  const handleConfirmDelete = () => {
    dispatch({type:"DELETE", payload:targetDelete})
    setIsModalOpen(false)
  }
  const handleCancelDelete = () => {
    setIsModalOpen(false)
  }

  const handleEditStudent = (id : string) => {
    const targetEdit = students.find((student) => student.id === id)
    if(targetEdit){
      dispatch({type: "UPDATE", payload : targetEdit, mode: "add"})
    }
  }
  const handleDetailStudent = (id : string) => {
    const targetDetail = students.find((student) => student.id === id)
    if(targetDetail){
      dispatch({type: "DETAIL", payload : targetDetail, mode: "detail"})
    }
  }

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Mã sinh viên</TableCell>
              <TableCell>Tên sinh viên</TableCell>
              <TableCell>Tuổi</TableCell>
              <TableCell>Giới tính</TableCell>
              <TableCell>Hành động</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((s, i) => (
              <TableRow key={s.id}>
                <TableCell>{i + 1}</TableCell>
                <TableCell>{s.id}</TableCell>
                <TableCell>{s.name}</TableCell>
                <TableCell>{s.age}</TableCell>
                <TableCell>{s.gender}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <Button  onClick={() => handleDetailStudent(s.id)} variant="contained" color="error">
                      Xem
                    </Button>
                    <Button onClick={() => handleEditStudent(s.id)} variant="contained" color="warning">
                      Sửa
                    </Button>
                    <Button
                      onClick={() => handleDelete(s.id)}
                      variant="contained"
                      color="success"
                    >
                      Xóa
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Modal
        title="Xác nhận"
        closable={{ 'aria-label': 'Custom Close Button' }}
        open={isModalOpen}
        onOk={handleConfirmDelete}
        onCancel={handleCancelDelete}
      >
        <p>Xác nhận xóa sinh viên {`<${targetDelete?.name}>`} ?</p>
      </Modal>
    </>
  );
};

export default StudentList;
