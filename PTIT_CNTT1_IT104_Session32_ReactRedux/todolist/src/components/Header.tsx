import { Button, Input, message, Modal, Radio, Select } from "antd";
import React, { useState } from "react";
import { Priority, type Task } from "../redux/reducers/todo.reducers";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export default function Header() {
  const listTodo = useSelector((state: RootState) => state);
  const [messageApi, contextHolder] = message.useMessage();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [inputTitleTask, setInputTitleTask] = useState<string>("");
  const [inputPriority, setInputPriority] = useState<
    keyof typeof Priority | undefined
  >(undefined);
  const dispatch = useDispatch();

  /**
   * Thao tác cùng modal thêm mới
   * Các hàm set đóng mở
   */
  const handleConfirmAdd = () => {
    if (!inputPriority || !inputTitleTask) {
      messageApi.open({
        type: "error",
        content: "Thông tin không được để trống",
      });
      return;
    }
    if (listTodo?.find((item) => item.title === inputTitleTask)) {
      messageApi.open({
        type: "error",
        content: "Tên nhiệm vụ không được trùng nhau",
      });
    } else {
      const newTask: Task = {
        id: Math.round(Math.random() * 100000),
        title: inputTitleTask,
        isDone: false,
        levelPriority: inputPriority,
      };
      console.log("NewTask: ", newTask);
      dispatch({ type: "ADD", payload: newTask });
      setIsModalOpen(false);
      messageApi.open({
        type: "success",
        content: "Thêm mới nhiệm vụ thành công",
      });
      setInputPriority(undefined)
      setInputTitleTask("")
    }
  };

  const handleCancelAdd = () => {
    setIsModalOpen(false);
  };

  const handleFilterChange = (value : string) => {
    console.log(value);
    dispatch({type:"FILTER", payload: value})
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-gray-800 text-3xl">Danh sách công việc</h1>
      <div className="flex items-center gap-2 self-end">
        <Select
          defaultValue=""
          style={{ width: "fit-content" }}
          onChange={handleFilterChange}
          options={[
            { value: "", label: "Lọc theo cấp độ" },
            { value: "pressing", label: "Khẩn cấp" },
            { value: "vital", label: "Quan trọng" },
            { value: "normal", label: "Bình thường" },
            { value: "imnormal", label: "Không quan trọng" },
          ]}
        />
        <Button onClick={() => setIsModalOpen(true)} type="primary">
          Thêm
        </Button>
      </div>
      <Modal
        title="Thêm mới công việc"
        closable={true}
        open={isModalOpen}
        onOk={handleConfirmAdd}
        okText="Thêm"
        cancelText="Hủy"
        onCancel={handleCancelAdd}
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
    </div>
  );
}
