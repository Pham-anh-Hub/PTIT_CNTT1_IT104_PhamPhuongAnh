import { Modal } from "antd";
import "../App.css";
import type { ListOfBoard, Task } from "../interfaces/board.interface";
import EditorTask from "./EditorTask";

type ModalProp = {
  currenListTask?: ListOfBoard;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  lists?: ListOfBoard[];
  targetDetailTask?: Task;
};

export default function ModalDetailTask({
  currenListTask,
  isModalOpen,
  setIsModalOpen,
  targetDetailTask,
}: ModalProp) {

  return (
    <div style={{ fontFamily: `"Roboto", sans-serif` }}>
      <Modal
        closeIcon={false}
        open={isModalOpen}
        width={800}
        style={{
          top: 60,
          height: "80vh",
          overflowY: "auto",
          padding: "16px 24px",
          display: "flex",
          flexDirection: "column",
        }}
      footer={false}
      >
        <EditorTask isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} targetTask={targetDetailTask} currenListTask={currenListTask}/>
      </Modal>
    </div>
  );
}
