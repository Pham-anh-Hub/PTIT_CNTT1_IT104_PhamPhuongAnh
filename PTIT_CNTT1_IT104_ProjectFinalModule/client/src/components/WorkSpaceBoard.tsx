import React, { useEffect, useState } from "react";

// Import Button của Material UI với tên khác (ví dụ: MUIButton)
import listWorks from "/images/list_works.png";
import editBoard from "/images/edit-board.png";
import { DownOutlined, CalendarOutlined } from "@ant-design/icons";
import { Button as AntButton, Dropdown } from "antd";
import { ButtonGroup, Button as MUIButton } from "@mui/material";
import ModalAddBoard from "./ModalAddBoard";
import type { Board, User } from "../interfaces/board.interface";
import { useNavigate, useParams } from "react-router-dom";
import StarredBoards from "./StarredBoards";
import { useAppDispatch, useAppSelector } from "../redux/reducHook/useHooks";
import { getAllUser } from "../apis/user.data";

// Lấy dữ liệu người dùng đăng nhập từ local
export default function WorkSpaceBoard() {
  const { userId } = useParams();

  // Lấy danh sách user từ Redux
  const users: User[] = useAppSelector((state) => state.users.filterUser);

  // Tìm user hiện tại theo userId từ URL
  const currentUser = users.find((user) => user.id === userId);

  // Lấy danh sách boards của user hiện tại
  const workBoards: Board[] = currentUser?.boards ?? [];
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [modalStatus, setModalStatus] = useState<"add" | "edit">("add");
  const [openAddBoard, setOpenAddBoard] = useState<boolean>(false);
  const [targetEdit, setTargetEdit] = useState<Board | undefined>(undefined);
  const items = [
    { key: "1", label: "This week" },
    { key: "2", label: "This month" },
    { key: "3", label: "This year" },
  ];

  useEffect(() => {
    if (currentUser) {
      console.log(currentUser);
    }
    dispatch(getAllUser());
  }, [dispatch]);

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
    <>
      <div className="py-[20px] mx-[20px] flex justify-between border-b-1 border-[#DEE2E6]">
        <div className="flex items-center gap-2.5">
          <img className="w-[26px] h-[19px]" src={listWorks} alt="" />
          <p className="text-[30px] font-medium">Your Workspaces</p>
        </div>

        <div className="flex items-center gap-2">
          <ButtonGroup disableElevation variant="outlined">
            <MUIButton style={{ borderColor: "#6C757D", color: "#6C757D" }}>
              Share
            </MUIButton>
            <MUIButton style={{ borderColor: "#6C757D", color: "#6C757D" }}>
              Export
            </MUIButton>
          </ButtonGroup>

          <Dropdown menu={{ items }} className="border-[#6C757D]">
            <AntButton
              icon={<CalendarOutlined />}
              className="flex items-center gap-2"
              style={{
                borderColor: "#6C757D",
                color: "#6C757D",
                height: "35px",
              }}
            >
              This week <DownOutlined />
            </AntButton>
          </Dropdown>
        </div>
      </div>
      {/* Board List */}
      <div className="py-4 px-6">
        <ul className="flex flex-wrap gap-4">
          {workBoards
            .filter((board) => !board.is_starred && !board.is_closed)
            .map((board) => (
              <li
                key={board.id}
                onClick={() => handleDetailBoard(board.id)}
                className="card-board"
                style={{
                  position: "relative",
                  backgroundImage:
                    board.backdrop.type === "image"
                      ? `url(${board.backdrop.bgImage})`
                      : board.backdrop.bgImage,
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
              onClick={() => {setOpenAddBoard(true); setModalStatus("add")}}
              className="MUI-button"
              variant="outlined"
            >
              Create new board
            </MUIButton>
          </li>
        </ul>
      </div>
      {/* Starred Boards */}
      <StarredBoards />
      {/* Các thành phần bên ngoài */}
      <ModalAddBoard
      modalStatus={modalStatus}
        userList={users}
        editing={targetEdit}
        isModalOpen={openAddBoard}
        setIsOpenModal={setOpenAddBoard}
      />
    </>
  );
}
