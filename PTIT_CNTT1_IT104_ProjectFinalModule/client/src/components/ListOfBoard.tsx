import React, { useEffect, useState } from "react";
import dots from "/images/dots.png";
import iconX from "/images/X_icon.png";
import addBoard from "/images/addBoardIcon.png";
import CardIcon from "/images/cardIcon.png";
// import TextArea from "antd/es/input/TextArea";
import DoneTask from "/images/doneTickIcon.png";
// import TickTask from "/images/tickIcon.png";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import ModalDetailTask from "./ModalDetailTask";
import { Input, message } from "antd";
import type {
  Board,
  Label,
  ListOfBoard,
  Task,
  User,
} from "../interfaces/board.interface";
import { useAppDispatch, useAppSelector } from "../redux/reducHook/useHooks";
import { useParams } from "react-router-dom";
import {
  addListToBoard,
  deleteListInBoard,
  getAllUser,
  onEditListTitle,
} from "../apis/user.data";
import ModalAddTask from "./ModalAddTask";

export default function ListsOfTask() {
  const [detailTask, setDetailTask] = useState<Task | undefined>(undefined);
  const [openDetailTask, setOpenDetailTask] = useState<boolean>(false);
  const [addNewList, setAddNewList] = useState<boolean>(false);
  const [editListTitle, setEditListTitle] = useState<string>("");
  const [listTitle, setListTitle] = useState("");
  const [currentList, setCurrentList] = useState<ListOfBoard>();
  const [addNewTask, setAddNewTask] = useState<string>("");
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useAppDispatch();
  const { userId, boardId } = useParams();
  // Lấy danh sách user từ Redux
  const users: User[] = useAppSelector((state) => state.users.filterUser);
  // Tìm user hiện tại theo userId từ URL
  const currentUser = users.find((user) => user.id === userId);
  const [error, setError] = useState("");
  // Lấy danh sách boards của user hiện tại
  const workBoards: Board[] = currentUser?.boards ?? [];
  const [currentBoard, setCurrentBoard] = useState<Board | undefined>(
    undefined
  );
  // const [listTitleOnEdit, setListTitleOnEdit] = useState<ListOfBoard | undefined>(undefined)
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  useEffect(() => {
    const current = workBoards.find((board) => board.id === String(boardId));
    if (current) {
      setCurrentBoard(current);
    }
  }, [boardId, workBoards]);

  const handleDetailEditTask = (id: string) => {
    // let target : Task | undefined
    currentBoard?.lists.map((list) => {
      if (list.tasks.find((task) => task.id === id)) {
        setOpenDetailTask(true);
        setDetailTask(list.tasks.find((task) => task.id === id));
        setCurrentList(list);
      }
    });
  };

  const handleEditListTitle = (id: string) => {
    const list = currentBoard?.lists.find((list) => list.id === id);
    if (list) {
      setListTitle(list.title);
    }
    setEditListTitle(id);
  };
  const onResetListTitle = (id: string) => {
    if (listTitle && userId && boardId) {
      dispatch(
        onEditListTitle({ userId, boardId, listId: id, newTitle: listTitle })
      );
      setEditListTitle("");
    } else {
      setError("error");
      messageApi.open({
        type: "error",
        content: "Tên danh sách không được để trống",
      });
    }
  };

  // jdhfdhfjdhfd
  const handleOpenAddTask = (id: string) => {
    setAddNewTask(id);
  };
  // Hàm xóa
  const handleDeleteList = (
    e: React.MouseEvent<HTMLImageElement>,
    id: string
  ) => {
    e.stopPropagation();
    Swal.fire({
      title: "Remove this list?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // Tiến hành xóa
        if (userId && boardId && id)
          dispatch(deleteListInBoard({ userId, boardId, listId: id }));
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  // Hàm thêm  another list
  const handleAddNewList = () => {
    if (!listTitle) {
      setError("error");
      messageApi.open({
        type: "error",
        content: "Tên danh sách không được để trống",
      });
      return;
    }
    const newlist: ListOfBoard = {
      id: uuidv4(),
      create_at: String(new Date()),
      title: listTitle,
      tasks: [],
    };
    if (currentBoard) {
      const updatedBoard: Board = {
        ...currentBoard,
        lists: [...currentBoard.lists, newlist],
      }; // Board được update sau khi thêm list (Board)

      const boardsUpdate = currentUser?.boards.map((board) =>
        board.id === boardId ? { ...updatedBoard } : board
      );
      // danh sách board sau khi cập nhật thêm List
      if (userId && boardId) {
        // truyền update userId, boardId và board vào hàm edit và gửi dispatch
        dispatch(
          addListToBoard({
            userId: userId,
            boardId: boardId,
            addedBoard: updatedBoard,
          })
        );
        localStorage.setItem(
          "userLoggined",
          JSON.stringify({ ...currentUser, boards: boardsUpdate })
        );
        setListTitle("");
        setAddNewList(false);
      }
    }
  };

  return (
    <>
      <div
        id="listBoard"
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            onResetListTitle(editListTitle)
            setEditListTitle("");
            setListTitle("");
          }
        }}
        className="px-6 py-[50px] w-[80vw] overflow-x-scroll h-[calc(100vh-(56px*2))]"
      >
        <ul className="flex gap-4 h-[calc(100vh-(57px*4))]">
          {currentBoard?.lists.map((list) => (
            <li
              key={list.id}
              style={{
                boxShadow: `rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px`,
                height: "fit-content",
              }}
              className="flex flex-col gap-2 w-[280px] min-w-[280px] p-3 bg-[#F1F2F4] rounded-xl"
            >
              {/* header của danh sách công việc */}
              <div className="flex items-center justify-between mb-3">
                {editListTitle === list.id ? (
                  <>
                    <input
                      className="outline-none focus: border-1 border-gray-200 p-1 rounded-md bg-white"
                      type="text"
                      style={
                        error !== ""
                          ? { borderColor: "red" }
                          : { borderColor: "#8590A2" }
                      }
                      value={editListTitle ? listTitle : list.title}
                      onChange={(e) => {
                        setListTitle(e.target.value);
                        setError("");
                      }}
                      autoFocus
                    />
                    
                  </>
                ) : (
                  <>
                    <h2 style={{ fontWeight: "700" }}>{list.title}</h2>
                    <img
                      onClick={() => handleEditListTitle(list.id)}
                      width={12}
                      height={2.6}
                      className="cursor-pointer"
                      src={dots}
                      alt=""
                    />
                  </>
                )}
              </div>

              {/* render task list */}
              {list.tasks ? (
                <>
                  <ul className="flex flex-col gap-2">
                    {list.tasks.map((task) => (
                      <li
                        key={task.id}
                        onClick={() => handleDetailEditTask(task.id)}
                        style={{
                          boxShadow: `rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px`,
                        }}
                        className="bg-white px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200"
                      >
                        <div>
                          <div className="flex gap-1">{task.tags.filter((tag) => tag.status === "choose").map((tag : Label) => (<div key={tag.id} className={`px-3 py-1 rounded-md`} style={{backgroundColor:`${tag.color}`}}></div>))}</div>
                          <p className="flex gap-2 items-center">
                            {task.status === "completed" && (
                              <img src={DoneTask} alt="" className="w-4 h-4" />
                            )}
                            <span>{task.title}</span>
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <></>
              )}

              {/* form thêm task hoặc nút add */}
              {addNewTask === list.id ? (
                <>
                  {/* Khối add */}
                  <ModalAddTask
                    currentList={list}
                    setAddNewTask={setAddNewTask}
                  />
                </>
              ) : (
                <>
                  {/* Khối open add */}
                  <div
                    onClick={() => handleOpenAddTask(list.id)}
                    className="flex items-center justify-between py-2 px-0.5 cursor-pointer rounded-md hover:bg-gray-200"
                  >
                    <div className="flex gap-2 items-center">
                      <img src={addBoard} className="w-4 h-4" alt="" />
                      <p>Add a card</p>
                    </div>
                    <img
                      onClick={(e) => handleDeleteList(e, list.id)}
                      src={CardIcon}
                      className="w-4 h-4"
                      alt=""
                    />
                  </div>
                </>
              )}
            </li>
          ))}
          {/* form thêm task hoặc nút add new List */}
          <li className="bg-gray-100 mr-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200  w-[280px] min-w-[280px] h-fit">
            {addNewList ? (
              <>
                {/* Khối add */}
                <div className="flex flex-col gap-2">
                  <Input
                    status={error ? "error" : ""}
                    className="inputListName"
                    value={listTitle}
                    placeholder="Enter list name..."
                    onChange={(e) => {
                      setListTitle(e.target.value);
                      setError("");
                    }}
                  />
                  <div className="flex items-center gap-4">
                    <button
                      onClick={handleAddNewList}
                      className="border-1 p-1.5 border-[#0C66E4] bg-[#0C66E4] rounded-xs "
                    >
                      <p className="text-[14px] text-amber-50">Add card</p>
                    </button>
                    <img
                      onClick={() => {
                        setAddNewList(false);
                        setListTitle("");
                      }}
                      className="w-3 h-3 cursor-pointer"
                      src={iconX}
                      alt=""
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                {" "}
                {/* Khối open add */}
                <div
                  onClick={() => setAddNewList(true)}
                  className="flex items-center justify-between py-2 px-0.5 cursor-pointer rounded-md hover:bg-gray-200"
                >
                  <div className="flex gap-2 items-center">
                    <img src={addBoard} className="w-4 h-4" alt="" />
                    <p>Add another list</p>
                  </div>
                </div>
              </>
            )}
          </li>
        </ul>
      </div>
      {openDetailTask ? (
        <>
          <ModalDetailTask
            currenListTask={currentList}
            lists={currentBoard?.lists}
            isModalOpen={true}
            setIsModalOpen={setOpenDetailTask}
            targetDetailTask={detailTask}
          />
        </>
      ) : (
        <></>
      )}
      {contextHolder}
    </>
  );
}
