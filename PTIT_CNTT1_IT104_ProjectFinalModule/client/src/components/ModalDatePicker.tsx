import { Input, Modal, notification } from "antd";
import React, { useEffect, useState } from "react";
import CloseModal from "/images/ClosedModalGray.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import type {
  Board,
  ListOfBoard,
  Task,
  User,
} from "../interfaces/board.interface";
import { useAppDispatch, useAppSelector } from "../redux/reducHook/useHooks";
import { useParams } from "react-router-dom";
import {
  getAllUser,
  removeTaskDueDate,
  updateTaskDueDate,
} from "../apis/user.data";
import { Button } from "@mui/material";
import type { NotificationPlacement } from "antd/es/notification/interface";

type Prop = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  currentTask?: Task;
  currentList?: ListOfBoard;
};

export default function ModalDatePicker({
  isModalOpen,
  setIsModalOpen,
  currentTask,
  currentList,
}: Prop) {
  const dispatch = useAppDispatch();
  const { userId, boardId } = useParams();
  // Lấy danh sách user từ Redux
  const users: User[] = useAppSelector((state) => state.users.filterUser);
  // Tìm user hiện tại theo userId từ URL
  const currentUser = users.find((user) => user.id === userId);
  // Lấy danh sách boards của user hiện tại
  const workBoards: Board[] = currentUser?.boards ?? [];
  const [currentBoard, setCurrentBoard] = useState<Board | undefined>(
    undefined
  );
  const [selected, setSelected] = useState<Date>();
  const [timeSelected, setTimeSelected] = useState("");
  const [dateSelected, setDateSelected] = useState("");
  type NotificationType = "success" | "info" | "warning" | "error";
  const [api, contextHolder] = notification.useNotification();

  const handleOk = () => {
    setIsModalOpen(false);
    if (userId && currentBoard && workBoards && currentList && currentTask) {
      const setDuedate = new Date(`${dateSelected}T${timeSelected}`);
      const updatedTasks = currentList?.tasks.map((task: Task) =>
        task.id === currentTask?.id
          ? { ...task, due_date: setDuedate.toISOString() }
          : task
      );
      const updatedLists = currentBoard?.lists.map((list: ListOfBoard) =>
        list.id === currentList?.id ? { ...list, tasks: updatedTasks } : list
      );
      const updateBoards: Board[] = workBoards.map((board: Board) =>
        board.id === currentBoard?.id
          ? { ...board, lists: updatedLists }
          : board
      );
      dispatch(updateTaskDueDate({ userId, updatedBoardsTask: updateBoards }));
      showAlert("topRight", "success", ["Thêm ngày hạn cho task thành công"]);
    }
  };

  const showAlert = (
    placement: NotificationPlacement,
    inType: NotificationType,
    inform: string[]
  ) => {
    api[inType]({
      message: `${inType.toUpperCase()}`,
      description: (
        <>
          {inform.map((p) => (
            <p>{p}</p>
          ))}
        </>
      ),
      placement,
      style:
        inType === "error"
          ? {
              backgroundColor: "#FFF2F0",
              border: "1px solid #FF0000",
              borderRadius: "8px",
            }
          : {
              backgroundColor: "#F6FFED",
              border: "1px solid #B7EB8F",
              borderRadius: "8px",
            },
    });
  };

  const removeDueDate = () => {
    if (userId && currentBoard && workBoards && currentList && currentTask) {
      const updatedTasks = currentList?.tasks.map((task: Task) =>
        task.id === currentTask?.id ? { ...task, due_date: "" } : task
      );
      const updatedLists = currentBoard?.lists.map((list: ListOfBoard) =>
        list.id === currentList?.id ? { ...list, tasks: updatedTasks } : list
      );
      const updateBoards: Board[] = workBoards.map((board: Board) =>
        board.id === currentBoard?.id
          ? { ...board, lists: updatedLists }
          : board
      );
      dispatch(removeTaskDueDate({ userId, updatedBoardsTask: updateBoards }));
    }
    showAlert("topRight", "success", ["Xóa bỏ hạn công việc thành công"]);
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  useEffect(() => {
    const current = workBoards.find((board) => board.id === String(boardId));
    if (current) {
      setCurrentBoard(current);
    }
  }, [boardId, workBoards, selected, currentBoard]);

  useEffect(() => {
    const date = currentTask?.due_date
      ? new Date(currentTask.due_date)
      : new Date();

    setSelected(date);
    setDateSelected(date.toLocaleDateString("en-CA")); // yyyy-mm-dd
    setTimeSelected(date.toTimeString().slice(0, 5)); // hh:mm
  }, [currentTask]);

  // Format time cho start date
  const formatDateTimeLocal = (date: Date) => {
    const pad = (n: number) => n.toString().padStart(2, "0");

    const yyyy = date.getFullYear();
    const mm = pad(date.getMonth() + 1);
    const dd = pad(date.getDate());
    const hh = pad(date.getHours());
    const min = pad(date.getMinutes());

    return `${yyyy}-${mm}-${dd}T${hh}:${min}`; // ✅ đúng format cho input
  };
  return (
    <>
      <Modal
        style={{ position: "fixed", top: "3vw", left: "38%" }}
        width={"fit-content"}
        title={
          <p className="text-[#44546F] text-[15px] font-semibold text-center">
            Dates
          </p>
        }
        closable={true}
        closeIcon={
          <>
            <img
              onClick={handleCancel}
              className="w-4 h-4"
              src={CloseModal}
              alt=""
            />
          </>
        }
        open={isModalOpen}
        footer={
          <div className="flex flex-col gap-2">
            <Button onClick={handleOk} className="w-full" variant="contained">
              Save
            </Button>
            <Button
              onClick={removeDueDate}
              className="w-full"
              variant="contained"
              color="inherit"
            >
              Remove
            </Button>
          </div>
        }
      >
        <DayPicker
          animate
          mode="single"
          selected={selected}
          onSelect={(date) => {
            if (date) {
              setSelected(date);
              setDateSelected(date.toLocaleDateString("en-CA")); // yyyy-mm-dd
            }
          }}
        />
        <p className="pt-4 pb-1 text-[#44546F] font-bold">Start date</p>
        <div className="flex gap-2">
          <Input
            disabled
            value={
              currentTask?.create_at
                ? formatDateTimeLocal(new Date(currentTask.create_at))
                : ""
            }
            style={{ width: "70%" }}
            type="datetime-local"
          />
        </div>

        <p className="pt-4 pb-1 text-[#44546F] font-bold">Due date</p>
        <div className="flex gap-2">
          <Input
            value={dateSelected}
            style={{ width: "70%" }}
            onChange={(e) => {
              const newDate = new Date(
                `${e.target.value}T${timeSelected || "00:00"}`
              );
              setDateSelected(e.target.value);
              setSelected(newDate);
            }}
            type="date"
          />
          <Input
            value={timeSelected}
            style={{ width: "30%" }}
            onChange={(e) => setTimeSelected(e.target.value)}
            type="time"
          />
        </div>
      </Modal>
      {contextHolder}
    </>
  );
}
