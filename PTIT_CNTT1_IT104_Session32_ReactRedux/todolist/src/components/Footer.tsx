import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Button, message, Modal } from "antd";

export default function Footer() {
  const [messageApi, contextHolder] = message.useMessage();
  const listTodo = useSelector((state: RootState) => state);
  const doneTasks = listTodo?.filter((item) => item.isDone);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [statusModal, setStatusModal] = useState<string>("");
  const dispatch = useDispatch();
  const handleDoneAll = () => {
    setStatusModal("complete");
    setOpenModal(true);
  };

  const handleDeleteAll = () => {
    setStatusModal("delete");
    setOpenModal(true);
  };

  const handleConfirm = () => {
    if (statusModal === "complete") {
      dispatch({ type: "DONEALL" });
      messageApi.open({
        type: "success",
        content: "Cập nhật thành công",
      });
    } else {
      const checkDone = listTodo.some((item) => item.isDone === false);
      if (checkDone) {
        messageApi.open({
          type: "error",
          content: "Tất cả công việc chưa hoàn thành",
        });
      } else {
        dispatch({ type: "DELETEALL" });
        messageApi.open({
          type: "success",
          content: "Xóa thành công",
        });
      }
    }
    setOpenModal(false);
  };
  const handleCancel = () => {
    setOpenModal(false);
  };

  return (
    <div className="flex justify-between">
      {doneTasks?.length === listTodo?.length ? (
        <p className="flex items-center">
          <span className="text-2xl">✅</span>
          <p> Hoàn thành công việc</p>
        </p>
      ) : (
        <>
          <div>
            Số công việc hoàn thành:{" "}
            <b>{listTodo?.filter((item) => item.isDone === true).length}</b>
          </div>
        </>
      )}

      <div className="flex gap-2">
        <Button onClick={handleDoneAll} type="primary">
          Hoàn thành tất cả
        </Button>
        <Button onClick={handleDeleteAll} color="danger" variant="outlined">
          Xóa tất cả
        </Button>
      </div>

      <Modal
        title={statusModal === "complete" ? "Hoàn thành tất cả" : "Xóa tất cả"}
        closable={{ "aria-label": "Custom Close Button" }}
        open={openModal}
        onOk={handleConfirm}
        onCancel={handleCancel}
      >
        <p>
          {statusModal === "complete"
            ? "Hoàn thành tất cả công việc"
            : "Xóa tất cả công việc"}
        </p>
      </Modal>
      {contextHolder}
    </div>
  );
}
