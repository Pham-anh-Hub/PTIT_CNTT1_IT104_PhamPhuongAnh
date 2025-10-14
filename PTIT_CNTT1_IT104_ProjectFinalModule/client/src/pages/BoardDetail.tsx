import React, { useEffect, useState } from "react";
import tableIcon from "/images/tableIcon.png";
import blackCloseIcon from "/images/closed_black_icon.png";
import filterIcon from "/images/filter.png";
import Sidebar from "../components/Sidebar";
import displayFrame from "/images/FrameIcon.png";
import ListBoards from "../components/ListBoards";
import StarredIcon from "/images/star_icon.png";
import { useNavigate, useParams } from "react-router-dom";
import type { Board, User } from "../interfaces/board.interface";
import { Button as AntButton } from "antd";
import ListOfBoard from "../components/ListOfBoard";
import { useAppDispatch, useAppSelector } from "../redux/reducHook/useHooks";
import Swal from "sweetalert2";
import { closeTheBoard, getAllUser, starredTheBoard } from "../apis/user.data";
import ModalSearchFilter from "../components/ModalSearchFilter";

// Lấy dữ liệu người dùng đăng nhập từ local
export default function BoardDetail() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
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

  const [openModalSearch, setOpenModalSearch] = useState(false)
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  useEffect(() => {
    const current = workBoards.find((board) => board.id === String(boardId));
    if (current) {
      setCurrentBoard(current);
    }
  }, [boardId, workBoards]);

  const handleStarredBoard = () => {
    if (userId && boardId) {
      dispatch(starredTheBoard({ userId: userId, boardId: boardId }));
      const updatedBoards = currentUser?.boards.map((board) =>
        board.id === boardId
          ? { ...board, is_starred: !board.is_starred }
          : board
      );
      localStorage.setItem(
        "userLoggined",
        JSON.stringify({ ...currentUser, boards: updatedBoards })
      );
    }
  };

  const handleCloseBoard = () => {
    Swal.fire({
      title: "Close this board?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, close it!",
    }).then((result) => {
      if (result.isConfirmed) {
        if (userId && boardId) {
          dispatch(closeTheBoard({ userId: userId, boardId: boardId }));
          
          const updatedBoards = currentUser?.boards.map((board) =>
            board.id === boardId ? { ...board, is_closed: true } : board
          );
          localStorage.setItem(
            "userLoggined",
            JSON.stringify({ ...currentUser, boards: updatedBoards })
          );
          navigate(`/${userId}/boards`)
          Swal.fire({
            title: "Closed success!",
            text: "Your board has been closed.",
            icon: "success",
          });
        }
      }
    });
  };

  const showModalFilter = () => {
    setOpenModalSearch(true)
  }

  return (
    <>
      <Sidebar childrent={<ListBoards />} />
      <main
        style={{
          fontFamily: `"Roboto", sans-serif`,
          backgroundImage: currentBoard?.backdrop.type==="image" ? `url(${currentBoard?.backdrop.bgImage})` : currentBoard?.backdrop.bgImage,
          backgroundPosition:"center",
          backgroundRepeat:"no-repeat",
          backgroundSize:"cover"
        }}
        className="flex-[4.01]"
      >
        {/* header info */}
        <div
          style={{ fontWeight: "700" }}
          className="flex justify-between py-3 px-2 bg-[#F1F2F4]"
        >
          <div className="flex gap-6 items-center ">
            <h2 className="text-xl">{currentBoard?.title}</h2>
            <img
              onClick={handleStarredBoard}
              className="w-6 h-6 rounded-md p-1"
              style={
                currentBoard?.is_starred ? { backgroundColor: "#F8E6A0" } : {}
              }
              src={StarredIcon}
              alt=""
            />
            <AntButton
              style={{
                borderRadius: "2px",
                backgroundColor: "#78797A",
                display: "flex",
                alignItems: "center",
                padding: "12px",
                color: "#fff",
                gap: 8,
              }}
              variant="filled"
              color="cyan"
            >
              <img className="w-6 h-6" src={displayFrame} alt="" />
              Board
            </AntButton>
            <AntButton
              style={{
                backgroundColor: "transparent",
                borderColor: "transparent",
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "#172B4D",
              }}
              variant="outlined"
            >
              <img className="w-5 h-5 text-gr" src={tableIcon} alt="" />
              <p>Table</p>
            </AntButton>
            <AntButton
              onClick={handleCloseBoard}
              style={{
                borderRadius: "4px",
                backgroundColor: "transparent",
                borderColor: "transparent",
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "#172B4D",
              }}
              variant="outlined"
            >
              <img className="w-5 h-5" src={blackCloseIcon} alt="" />
              <p>Close this board</p>
            </AntButton>
          </div>
          <AntButton onClick={showModalFilter} className="flex items-center gap-2 p-3" variant="outlined">
            <img src={filterIcon} className="w-4 h-3.5" alt="" />
            <p className="text-[14px] text-[#172B4D]">Filter</p>
          </AntButton>
        </div>

        {/* List & detail */}
        <ListOfBoard />
      </main>
      <ModalSearchFilter isModalOpen={openModalSearch} setIsModalOpen={setOpenModalSearch}/>
    </>
  );
}
