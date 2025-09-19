import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Button, Input, message, Modal, Radio } from "antd";
import { Priority, type Task } from "../redux/reducers/todo.reducers";

export default function ListTodo() {
  const listTodo = useSelector((state: RootState) => state);
  const [openConfirmModel, setOpenConfirmModel] = useState<boolean>(false);
  const [targetDelete, setTargetDelete] = useState<Task | undefined>(undefined);

  const [openUpdateModal, setOpenUpdateModal] = useState<boolean>(false);
  const [targetUpdate, setTargetUpdate] = useState<Task | undefined>(undefined);

  const [messageApi, contextHolder] = message.useMessage();
  const [inputTitleTask, setInputTitleTask] = useState<string>("");
  const [inputPriority, setInputPriority] = useState<
    keyof typeof Priority | undefined
  >(undefined);

  const dispatch = useDispatch();

  /** Thao tác đánh dấu công việc */
  const handleToggleTask = (id: number) => {
    const cloneTask = listTodo?.find((item) => item.id === id);
    if (cloneTask) {
      dispatch({ type: "TOGGLE", payload: cloneTask.id });
    }
  };
  /** Thao tác và xác nhận xóa */
  const handleDeleteTask = (id: number) => {
    const cloneDeleteTask = listTodo?.find((item) => item.id === id);
    if (cloneDeleteTask) {
      setTargetDelete(cloneDeleteTask);
      setOpenConfirmModel(true);
    }
  };
  const handleConfirmDelete = () => {
    dispatch({ type: "DELETE", payload: targetDelete?.id });
    setOpenConfirmModel(false);
  };
  const handleCancelDelete = () => {
    setOpenConfirmModel(false);
  };

  /** Thao tác update thông tin công việc  */
  const handleUpdateTask = (id: number) => {
    setOpenUpdateModal(true);
    const cloneUpdate = listTodo.find((item) => item.id === id);
    if (cloneUpdate) {
      setTargetUpdate(cloneUpdate);
      setInputPriority(cloneUpdate.levelPriority);
      setInputTitleTask(cloneUpdate.title);
    }
  };
  const handleConfirmUpdate = () => {
    if (!inputPriority || !inputTitleTask) {
      messageApi.open({
        type: "error",
        content: "Thông tin không được để trống",
      });
      return;
    }
    if (listTodo.find((item) => item.title === inputTitleTask)) {
      messageApi.open({
        type: "error",
        content: "Tên nhiệm vụ không được phép trùng",
      });
    } else {
      dispatch({
        type: "UPDATE",
        payload: {
          ...targetUpdate,
          title: inputTitleTask,
          levelPriority: inputPriority,
        },
      });
      messageApi.open({
        type: "success",
        content: "Cập nhật nhiệm vụ thành công",
      });
      setInputPriority(undefined);
      setInputTitleTask("");
      setOpenUpdateModal(false);
    }
  };

  const handleCancelUpdate = () => {
    setOpenUpdateModal(false);
  };

  return (
    <>
      <div className="flex flex-col gap-2">
        {listTodo?.map((item) => (
          <div
            style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", padding: 8 }}
            className="flex justify-between items-center border-1 border-gray-200 rounded-md"
          >
            <div className="flex gap-2.5 items-center">
              <input
                onChange={() => handleToggleTask(item.id)}
                className="w-4 h-4"
                type="checkbox"
                name=""
                checked = {item.isDone ? true : false}
              />
              {item.isDone ? <s>{item.title}</s> : <p>{item.title}</p>}
              <span className={item.levelPriority}>
                {Priority[item.levelPriority]}
              </span>
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => handleUpdateTask(item.id)}
                style={{
                  color: "#E08B36",
                  borderColor: "#E08B36",
                  backgroundColor: "#FFF7E6",
                }}
              >
                Sửa
              </Button>
              <Button
                onClick={() => handleDeleteTask(item.id)}
                style={{
                  color: "#E1685A",
                  borderColor: "#E1685A",
                  backgroundColor: "#FFF1F0",
                }}
              >
                Xóa
              </Button>
            </div>
          </div>
        ))}
      </div>
      {/* Modal xác nhận xóa công việc*/}
      <Modal
        title="Xác nhận"
        closable={true}
        open={openConfirmModel}
        okText="Xóa"
        cancelText="Hủy"
        footer={
          <>
            <Button
              onClick={handleCancelDelete}
              color="default"
              variant="outlined"
            >
              Hủy
            </Button>
            <Button
              onClick={handleConfirmDelete}
              color="danger"
              variant="solid"
            >
              Xóa
            </Button>
          </>
        }
      >
        <p>Xác nhận xóa nhiệm vụ {`<${targetDelete?.title}>`}</p>
      </Modal>

      {/* Modal sửa thông tin công việc */}
      <Modal
        title="Cập nhật công việc"
        closable={true}
        open={openUpdateModal}
        onOk={handleConfirmUpdate}
        okText="Cập nhật"
        cancelText="Hủy"
        onCancel={handleCancelUpdate}
        destroyOnHidden={true}
      >
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="">Tên công việc</label>
            <Input
              value={inputTitleTask}
              onChange={(e) => {
                setInputTitleTask(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="">Cấp độ</label>
            <Radio.Group
              className="flex justify-center gap-6 mt-2"
              onChange={(e) => setInputPriority(e.target.value)}
              value={inputPriority}
            >
              <Radio value="pressing">Khẩn cấp</Radio>
              <Radio value="vital">Quan trọng</Radio>
              <Radio value="normal">Bình thường</Radio>
              <Radio value="imnormal">Không quan trọng</Radio>
            </Radio.Group>
          </div>
        </div>
      </Modal>
      {contextHolder}
    </>
  );
}
