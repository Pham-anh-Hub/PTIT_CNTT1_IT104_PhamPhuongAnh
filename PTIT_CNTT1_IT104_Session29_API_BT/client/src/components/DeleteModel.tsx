import { Modal } from "antd";
import axios from "axios";
import React, { useState } from "react";

interface Student {
  id?: number;
  studentName: string;
  email: string;
  address: string;
  phone: string;
  status: boolean;
  createAt: string;
}

type PropType = {
  targetDelete: Student;
  isModalOpen: boolean;
  setIsModalOpen: (status: boolean) => void;
  getRenderList: () => void;
};

export default function DeleteModel({
  targetDelete,
  isModalOpen,
  setIsModalOpen,
  getRenderList,
}: PropType) {
  const handleOk = () => {
    axios
      .delete(`http://localhost:8080/students/${targetDelete.id}`)
      .then(() => console.log("Xóa sinh viên thành công"))
      .catch(() => console.log("Xóa sinh viên không thành công !!"))
      .finally(() => {
        setIsModalOpen(false);
        console.log("Hoàn thành xóa sinh viên");
        getRenderList();
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <Modal
        title="Basic Modal"
        closable={true}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Xóa"
        cancelText="Hủy"
      >
        <p>
          Bạn chắc chắn muốn xóa sinh viên {"<"}
          {targetDelete.studentName}
          {">"}
        </p>
      </Modal>
    </div>
  );
}
