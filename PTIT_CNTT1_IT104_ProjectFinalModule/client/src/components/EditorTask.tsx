import React, { useEffect, useState } from "react";
import DoneTask from "/images/doneTickIcon.png";
import TickTask from "/images/tickIcon.png";
import LabelIcon from "/images/Label.png";
import ArrowDown from "/images/arrowDown.png";
import Description from "/images/description.png";
import Clock from "/images/Timer.png";
import Diver from "/images/diver.png";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";

import FroalaEditorComponent from "react-froala-wysiwyg";
import type {
  Board,
  ListOfBoard,
  Task,
  User,
} from "../interfaces/board.interface";
import { Button } from "@mui/material";
import Swal from "sweetalert2";
import { Input, message } from "antd";
import { useAppDispatch, useAppSelector } from "../redux/reducHook/useHooks";
import { useParams } from "react-router-dom";
import {
  deleteTaskInList,
  getAllUser,
  onTickTask,
  updateTaskTitleDescription,
} from "../apis/user.data";
import ModalMoveTask from "./ModalMoveTask";
import ModalTaskLabel from "./ModalTaskLabel";
import ModalDatePicker from "./ModalDatePicker";
import { axiosInstance } from "../utils/axiosInstance";
// import FroalaEditor from "react-froala-wysiwyg";

type taskProp = {
  currenListTask?: ListOfBoard;
  targetTask?: Task;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
};

export default function EditorTask({
  targetTask,
  currenListTask,
  // isModalOpen,
  setIsModalOpen,
}: taskProp) {
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
  const [messageApi, contextHolder] = message.useMessage();
  const [currentTask, setCurrentTask] = useState<Task | undefined>(undefined);
  const [modelError, setModelError] = useState(false);
  const [takeDueDate, setTakeDueDate] = useState(false);
  const [error, setError] = useState(false);
  const [isMoveCard, setIsMoveCard] = useState(false);
  const [openTaskLabels, setOpenTaskLabels] = useState(false);
  const [content, setContent] = useState<string>("");
  const [currentList, setCurrentList] = useState(currenListTask?.title);
  const [editTaskTitle, setEditTaskTitle] = useState<string | undefined>("");
  const [inputTaskTitle, setInputTaskTitle] = useState("");
  const [taskStatus, setTaskStatus] = useState<"pending" | "completed">(
    "pending"
  );
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  useEffect(() => {
    const current = workBoards.find((board) => board.id === String(boardId));
    if (current) {
      setCurrentBoard(current);
    }
  }, [boardId, workBoards, currenListTask, currentBoard]);
  const handleModelChange = (newContent: string) => {
    setModelError(false);
    setContent(newContent);
  };

  const handleOk = async () => {
    if (!content) {
      setModelError(true);
      messageApi.open({
        type: "error",
        content: "Mô tả nhiệm vụ không được để trống",
      });
      return;
    } else if (!inputTaskTitle) {
      setError(true);
      messageApi.open({
        type: "error",
        content: "Tên công việc không được để trống",
      });
      return;
    }
    // dispatch gồm userId, boardId, listId, taskId vaf description của task
    const cloneCurrUser: User = await (
      await axiosInstance.get(`/users/${userId}`)
    ).data;
    console.log(cloneCurrUser);
    const currBoard = cloneCurrUser.boards.find(
      (board) => board.id === currentBoard?.id
    );
    const currList = currBoard?.lists.find(
      (list) => list.id === currenListTask?.id
    );
    const currTask = currList?.tasks.find((task) => task.id === targetTask?.id);

    if (userId && boardId && currTask && currBoard && currList) {
      const updatedTasks = currList.tasks.map((task: Task) =>
        task.id === currTask.id
          ? { ...currTask, title: inputTaskTitle, description: content }
          : task
      );
      const updateListsBoard = currBoard?.lists.map((list: ListOfBoard) =>
        list.id === currList.id ? { ...list, tasks: updatedTasks } : list
      );
      const updatedBoards: Board[] = workBoards.map((board: Board) =>
        board.id === currentBoard?.id
          ? { ...board, lists: updateListsBoard }
          : board
      );
      console.log(updatedBoards);

      dispatch(
        updateTaskTitleDescription({
          userId,
          updatedTaskBoard: updatedBoards,
        })
      );
    }
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleDeleteTask = () => {
    Swal.fire({
      title: "Delete this task?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (userId && boardId && currenListTask && targetTask) {
          dispatch(
            deleteTaskInList({
              userId,
              boardId,
              listId: currenListTask?.id,
              taskId: targetTask.id,
            })
          );
          Swal.fire({
            title: "Deleted!",
            text: "Your task has been deleted.",
            icon: "success",
          });
          setIsModalOpen(false);
        }
      }
    });
  };
  const handleMoveTask = () => {
    setIsMoveCard(true);
  };

  const onCancelMove = () => {
    setIsMoveCard(false);
  };

  const handleTickTask = () => {
    setTaskStatus(taskStatus === "pending" ? "completed" : "pending");

    if (userId && boardId && currenListTask && targetTask) {
      dispatch(
        onTickTask({
          userId,
          boardId,
          listId: currenListTask.id,
          taskId: targetTask.id,
        })
      );
    }
  };

  const openDetailTaskLabels = () => {
    setOpenTaskLabels(true);
  };

  const onSetDueDate = () => {
    setTakeDueDate(true);
  };

  const onResetTaskTitle = () => {
    if (inputTaskTitle && currentTask) {
      // const updateTasks = currenListTask.tasks.map((task: Task) =>
      //   task.id === id ? { ...task, title: inputTaskTitle.trim() } : task
      // );
      // const updatesLists = currentBoard?.lists.map((list: ListOfBoard) =>
      //   list.id === currenListTask?.id ? { ...list, tasks: updateTasks } : list
      // );
      // const updatedBoards: Board[] = workBoards.map((board: Board) =>
      //   board.id === currentBoard?.id
      //     ? { ...board, lists: updatesLists }
      //     : board
      // );
      setCurrentTask({ ...currentTask, title: inputTaskTitle.trim() });
      setEditTaskTitle("");
    } else {
      setError(true);
      messageApi.open({
        type: "error",
        content: "Tên công việc không được để trống",
      });
    }
  };

  useEffect(() => {
    if (targetTask) {
      setCurrentTask(targetTask);
      setContent(targetTask.description ?? "");
      setTaskStatus(targetTask.status);
      setInputTaskTitle(targetTask.title);
    }
  }, [targetTask]);
  return (
    <>
      <div className="h-[fit-content] flex flex-col gap-2.5">
        {/* head modal */}
        <div className=" flex flex-col gap-2.5">
          <div className="flex items-center gap-2">
            {editTaskTitle !== "" ? (
              <>
                <img
                  onClick={() => onResetTaskTitle()}
                  className="cursor-pointer bg-white rounded-full w-6 h-6 hover: opacity-95"
                  src={TickTask}
                  alt=""
                />
                <Input
                  autoFocus={true}
                  className="ml-3 h-[30px] p-1 border-1 rounded-md border-gray-200 focus: outline-none focus:border-gray-300"
                  type="text"
                  value={inputTaskTitle}
                  onChange={(e) => setInputTaskTitle(e.target.value)}
                />
              </>
            ) : (
              <>
                <img
                  onClick={handleTickTask}
                  src={taskStatus === "pending" ? TickTask : DoneTask}
                  className="w-4.5 h-4.5"
                  alt=""
                />
                <p
                  onClick={() => setEditTaskTitle(currentTask?.id)}
                  className="font-semibold text-xl text-[rgba(23, 43, 77, 1)]"
                >
                  {currentTask?.title}
                </p>
              </>
            )}
          </div>
          <div
            onClick={() => handleMoveTask()}
            className="flex gap-2 pl-7 cursor-pointer"
          >
            <p>in list</p>
            <div className="flex items-center gap-3 border-1 border-[#DCDFE4] bg-[#DCDFE4] px-1.5 rounded-md">
              <p className="text-[#44546F] font-bold text-[12px]">
                {currentList?.toUpperCase()}
              </p>{" "}
              <img src={ArrowDown} className="w-4 h-2" alt="" />
            </div>
          </div>
        </div>
        {/* main modal */}
        <div className="flex justify-between h-[100%]">
          <div className="flex-[3] flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <img className="w-4.5 h-3.5" src={Description} alt="" />
              <p className="font-semibold text-[16px]">Description</p>
            </div>
            <div
              className="w-[fit-content] h-[fit-content] border-1 rounded-xl"
              style={
                modelError ? { borderColor: "red" } : { borderColor: "#8590A2" }
              }
            >
              <FroalaEditorComponent
                tag="textarea"
                model={content}
                onModelChange={handleModelChange}
                config={{
                  heightMin: 120,
                  heightMax: 300,
                }}
              />
            </div>
          </div>
          <div className="flex-[1]">
            <ul className="flex flex-col justify-self-end gap-2 w-[90%] mt-2">
              <li className="">
                <Button
                  onClick={openDetailTaskLabels}
                  style={{ backgroundColor: "#091E420F", width: "100%" }}
                  color="inherit"
                >
                  <img className="w-3.5 mr-2  h-3.5" src={LabelIcon} alt="" />{" "}
                  Label
                </Button>
              </li>
              <li className="">
                <Button
                  onClick={onSetDueDate}
                  style={{ backgroundColor: "#091E420F", width: "100%" }}
                  color="inherit"
                >
                  <img className="w-3.5 mr-2  h-3.5" src={Clock} alt="" /> Dates
                </Button>
              </li>
              <li className="">
                <Button
                  onClick={handleDeleteTask}
                  style={{
                    backgroundColor: "#C9372C",
                    color: "white",
                    width: "100%",
                  }}
                >
                  <img className="w-3.5 mr-2" src={Diver} /> Delete
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-items-start gap-2 mt-3">
        <Button onClick={handleOk} color="primary" variant="contained">
          Save
        </Button>
        <Button onClick={handleCancel} color="inherit">
          Cancel
        </Button>
      </div>
      {contextHolder}
      <ModalMoveTask
        setCurrentList={setCurrentList}
        isModalOpen={isMoveCard}
        setIsModalOpen={setIsMoveCard}
        currentListTask={currenListTask}
        handleCancel={onCancelMove}
        currentTask={targetTask}
      />

      <ModalTaskLabel
        currentList={currenListTask}
        currentTask={targetTask}
        isOpenDetailLabel={openTaskLabels}
        setIsOpenDetailLabel={setOpenTaskLabels}
      />
      <ModalDatePicker
        isModalOpen={takeDueDate}
        setIsModalOpen={setTakeDueDate}
        currentList={currenListTask}
        currentTask={targetTask}
      />
    </>
  );
}
