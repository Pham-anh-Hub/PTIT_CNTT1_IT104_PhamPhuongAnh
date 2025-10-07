import React, { useState } from "react";
import dots from "/images/dots.png";
import iconX from "/images/X_icon.png";
import addBoard from "/images/addBoardIcon.png";
import CardIcon from "/images/cardIcon.png";
import TextArea from "antd/es/input/TextArea";
import DoneTask from "/images/doneTickIcon.png";
// import TickTask from "/images/tickIcon.png";
import Swal from "sweetalert2";
import ModalDetailTask from "./ModalDetailTask";
import { Input } from "antd";
import type { Task } from "../interfaces/board.interface";

const Lists = [
  {
    id: "list-1",
    title: "Việc cần làm hôm nay",
    create_at: "2025-10-06T09:00:00Z",
    tasks: [
      {
        id: "task-1",
        title: "Hoàn thiện thiết kế giao diện",
        description: "Thiết kế phần header và navigation cho trang chủ.",
        status: "completed",
        due_date: "2025-10-07T12:00:00Z",
        create_at: "2025-10-06T09:15:00Z",
        tags: [],
      },
      {
        id: "task-2",
        title: "Cập nhật API sản phẩm",
        description: "Thêm endpoint mới cho chức năng lọc sản phẩm theo trạng thái.",
        status: "pending",
        due_date: "2025-10-08T17:00:00Z",
        create_at: "2025-10-06T09:20:00Z",
        tags: [],
      },
    ],
  },
  {
    id: "list-2",
    title: "Đang thực hiện",
    create_at: "2025-10-06T09:10:00Z",
    tasks: [],
  },
];


export default function ListOfBoard() {
  const [detailTask, setDetailTask] = useState<Task | undefined>(undefined);
  const [openDetailTask, setOpenDetailTask] = useState<boolean>(false);
  const [addNewList, setAddNewList] = useState<boolean>(false);
  const [editListTitle, setEditListTitle] = useState<string>("");
  const [value, setValue] = useState("");
  const [addNewTask, setAddNewTask] = useState<string>("");
  const handleDetailEdit = (id : string) => {
    // let target : Task | undefined
    Lists.map((list)=>{
      if(list.tasks.find((task) => task.id === id)){
        setOpenDetailTask(true);
        setDetailTask(list.tasks.find((task) => task.id === id))
      }
    }) 
    
  };
  const handleEditListTitle = (id: string) => {
    console.log(editListTitle);
    setEditListTitle(id);
  };
  const handleOpenAddTask = (id: string) => {
    setAddNewTask(id);
  };
  const handleDeleteList = (
    e: React.MouseEvent<HTMLImageElement>,
    id: string
  ) => {
    e.stopPropagation();
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  const handleAddNewList = () => {
    setAddNewList(true);
  };
  return (
    <>
      <div
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            console.log("Click background");
            setEditListTitle("");
          }
        }}
        className="px-6 py-[50px]"
      >
        <ul className="flex gap-4">
          {Lists.map((list) => (
            <li
              key={list.id}
              style={{
                boxShadow: `rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px`,
                height: "fit-content",
              }}
              className="flex flex-col gap-2 w-[25%] p-3 bg-[#F1F2F4] rounded-xl"
            >
              {/* header card */}
              <div className="flex items-center justify-between mb-3">
                {editListTitle === list.id ? (
                  <input
                    className="outline-none focus: border-1 border-gray-200 p-0.5 rounded-md bg-white"
                    type="text"
                    value={list.title}
                    autoFocus
                  />
                ) : (
                  <h2 style={{ fontWeight: "700" }}>{list.title}</h2>
                )}
                <img
                  onClick={() => handleEditListTitle(list.id)}
                  width={12}
                  height={2.6}
                  className="cursor-pointer"
                  src={dots}
                  alt=""
                />
              </div>

              {/* task list */}
              {list.tasks ? (
                <>
                  <ul className="flex flex-col gap-2">
                    {list.tasks.map((task) => (
                      <li
                        key={task.id}
                        onClick={() => handleDetailEdit(task.id)}
                        style={{
                          boxShadow: `rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px`,
                        }}
                        className="bg-white px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200"
                      >
                        <p className="flex gap-2 items-center">
                          {task.status === "completed" && (
                            <img src={DoneTask} alt="" className="w-4 h-4" />
                          )}
                          <span>{task.title}</span>
                        </p>
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
                  <div
                    // style={{ display: "none" }}
                    className="flex flex-col gap-2"
                  >
                    <TextArea
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                      autoSize={{ minRows: 3, maxRows: 5 }}
                    />
                    <div className="flex items-center gap-4">
                      <button className="border-1 p-1.5 border-[#0C66E4] bg-[#0C66E4] rounded-xs ">
                        <p className="text-[14px] text-amber-50">Add card</p>
                      </button>
                      <img
                        onClick={() => setAddNewTask("")}
                        className="w-3 h-3 cursor-pointer"
                        src={iconX}
                        alt=""
                      />
                    </div>
                  </div>
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
          <li className="bg-gray-100 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-200 w-[25%] h-[fit-content]">
            {/* form thêm task hoặc nút add new List */}

            {addNewList ? (
              <>
                {/* Khối add */}
                <div className="flex flex-col gap-2">
                  <Input
                    className="inputListName"
                    value={value}
                    placeholder="Enter list name..."
                    onChange={(e) => setValue(e.target.value)}
                  />
                  <div className="flex items-center gap-4">
                    <button className="border-1 p-1.5 border-[#0C66E4] bg-[#0C66E4] rounded-xs ">
                      <p className="text-[14px] text-amber-50">Add card</p>
                    </button>
                    <img
                      onClick={() => setAddNewList(false)}
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
                  onClick={handleAddNewList}
                  className="flex items-center justify-between py-2 px-0.5 cursor-pointer rounded-md hover:bg-gray-200"
                >
                  <div className="flex gap-2 items-center">
                    <img src={addBoard} className="w-4 h-4" alt="" />
                    <p>Add another list</p>
                  </div>
                  <img src={CardIcon} className="w-4 h-4" alt="" />
                </div>
              </>
            )}
          </li>
        </ul>
      </div>
      {openDetailTask ? (
        <>
          <ModalDetailTask
            lists={Lists}
            isModalOpen={true}
            setIsModalOpen={setOpenDetailTask}
            targetDetailTask={detailTask}
          />
        </>
      ) : (
        <></>
      )}
    </>
  );
}
