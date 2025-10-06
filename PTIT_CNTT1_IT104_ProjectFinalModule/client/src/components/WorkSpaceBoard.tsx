import React, { useState } from "react";
import mockImage1 from "../assets/mockImg1.jpg";
import mockImage2 from "../assets/mockImage2.jpg";
import mockImage3 from "../assets/mockImage3.jpg";
// import mockImage4 from "../assets/mockImg4.jpg";
// Import Button của Material UI với tên khác (ví dụ: MUIButton)
import editBoard from "../assets/edit-board.png";
import { Button as MUIButton } from "@mui/material";
import ModalAddBoard from "./ModalAddBoard";
import type { Board } from "../interfaces/board.interface";
import { useNavigate } from "react-router-dom";
 const workBoards = [
  {
    id: 1,
    title: "Dự án Website",
    description: "Quản lý tiến độ dự án website",
    backdrop: mockImage1,
    is_starred: true,
    is_create: "2025-02-28T12:30:00Z",
    lists: [],
  },
  {
    id: 2,
    title: "Ứng dụng Mobile",
    description: "Thiết kế và phát triển ứng dụng mobile",
    backdrop: mockImage2,
    is_starred: false,
    is_create: "2025-03-01T09:15:00Z",
    lists: [],
  },
  {
    id: 3,
    title: "Hệ thống Quản lý",
    description: "Xây dựng hệ thống quản lý nội bộ",
    backdrop: mockImage3,
    is_starred: true,
    is_create: "2025-03-02T14:45:00Z",
    lists: [],
  },
];
export default function WorkSpaceBoard() {
  const navigate = useNavigate();
  const [openAddBoard, setOpenAddBoard] = useState<boolean>(false);
  const [targetEdit, setTargetEdit] = useState<Board | undefined>(undefined);

  const handleEditBoard = (id: number) => {
    const target = workBoards.find((board) => board.id === id);
    if (target) {
      setTargetEdit(target);
      setOpenAddBoard(true);
    }
  };

  const handleDetailBoard = (id: number) => {
    const detail = workBoards.find((item) => item.id === id);
    if (detail) {
      console.log(detail);
      navigate(`/boards/${id}`);
    }
  };
  return (
    <div>
      {/* Board List */}
      <div className="py-4 px-6">
        <ul className="flex flex-wrap gap-4">
          {workBoards.map((board) => (
            <li
              key={board.id}
              onClick={() => handleDetailBoard(board.id)}
              className="card-board"
              style={{
                position: "relative",
                backgroundImage: `url(${board.backdrop})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="overlay-card">
                <MUIButton
                  color="info"
                  variant="contained"
                  className="edit-board"
                  onClick={(e) => {
                    e.stopPropagation(); 
                    handleEditBoard(board.id);
                  }}
                >
                  <img className="w-3.5 h-3.5" src={editBoard} alt="" />
                  <p>Edit this board</p>
                </MUIButton>
              </div>
              <p
                style={{
                  position: "absolute",
                  top: "10%",
                  left: "8%",
                  fontSize: "18px",
                  fontWeight: "500",
                  color: "white",
                }}
              >
                {board.title}
              </p>
            </li>
          ))}
          <li className="edit-button-card">
            <MUIButton
              onClick={() => setOpenAddBoard(true)}
              className="MUI-button"
              variant="outlined"
            >
              Create new board
            </MUIButton>
          </li>
        </ul>
      </div>
      {/* Các thành phần bên ngoài */}
      <ModalAddBoard
        editing={targetEdit}
        isModalOpen={openAddBoard}
        setIsOpenModal={setOpenAddBoard}
      />
    </div>
  );
}
