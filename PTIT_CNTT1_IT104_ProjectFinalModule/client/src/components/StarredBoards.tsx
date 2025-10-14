import React, { useState } from "react";

import starIcon from "/images/star_icon.png";
// Import Button của Material UI với tên khác (ví dụ: MUIButton)
import editBoard from "/images/edit-board.png";
import { Button as MUIButton } from "@mui/material";
import ModalAddBoard from "./ModalAddBoard";
import type { Board, User } from "../interfaces/board.interface";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../redux/reducHook/useHooks";



export default function StarredBoards() {
   const { userId } = useParams();
  // Lấy danh sách user từ Redux
  const users: User[] = useAppSelector((state) => state.users.filterUser);
  // Tìm user hiện tại theo userId từ URL
  const currentUser = users.find((user) => user.id === userId);
  // Lấy danh sách boards của user hiện tại
  const workBoards: Board[] = currentUser?.boards ?? [];
  const [modalStatus, setModalStatus] = useState<"add" | "edit">("add")
  const navigate = useNavigate();
  const [openAddBoard, setOpenAddBoard] = useState<boolean>(false);
  const [targetEdit, setTargetEdit] = useState<Board | undefined>(undefined);

  const handleEditBoard = (id: string) => {
    const target = workBoards.find((board) => board.id === String(id));
    if (target) {
      setTargetEdit(target);
      setOpenAddBoard(true);
      setModalStatus("edit")
    }
  };

  const handleDetailBoard = (id: string) => {
    const detail = workBoards.find((item) => item.id === id);
    if (detail) {
      navigate(`/${currentUser?.id}/boards/${id}`);
    }
  };
  return (
    <div>
      {/* Board List */}
      <div className="flex items-center gap-2 py-[18px] mx-[20px] border-b-1 border-[#DEE2E6]">
        <img className="w-8 h-7" src={starIcon} alt="" />
        <p className="text-[30px] font-medium">Starred Boards</p>
      </div>
      <div className="py-4 px-6">
        <ul className="flex flex-wrap gap-4">
          {workBoards.map((board) => (
            <>
              {board.is_starred && !board.is_closed ? (
                <>
                  <li
                    key={board.id}
                    onClick={() => handleDetailBoard(board.id)}
                    className="card-board"
                    style={{
                      cursor:"pointer",
                      position: "relative",
                      backgroundImage: board.backdrop.type === "image" ? `url(${board.backdrop.bgImage})` : board.backdrop.bgImage,
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
                </>
              ) : (
                <></>
              )}
            </>
          ))}
        </ul>
      </div>
      {/* Các thành phần bên ngoài */}
      <ModalAddBoard
      modalStatus={modalStatus}
        editing={targetEdit}
        isModalOpen={openAddBoard}
        setIsOpenModal={setOpenAddBoard}
        userList={[]}
      />
    </div>
  );
}
