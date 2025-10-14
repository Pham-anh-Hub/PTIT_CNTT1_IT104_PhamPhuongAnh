import React, { useEffect } from "react";

import starIcon from "/images/star_icon.png";

import type { Board, User } from "../interfaces/board.interface";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/reducHook/useHooks";
import { deleteBoard, getAllUser, reOpenBoard } from "../apis/user.data";
import Swal from "sweetalert2";

export default function ClosedBoards() {
  const dispatch = useAppDispatch();
  const { userId } = useParams();
  // Lấy danh sách user từ Redux
  const users: User[] = useAppSelector((state) => state.users.filterUser);
  // Tìm user hiện tại theo userId từ URL
  const currentUser = users.find((user) => user.id === userId);
  // Lấy danh sách boards của user hiện tại
  const workBoards: Board[] = currentUser?.boards ?? [];

  const handleReOpenBoard = (id: string) => {
    const detail = workBoards.find((item) => item.id === id);
    if (detail) {
      Swal.fire({
        title: "Do you want to re-open or delete this board?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Re-Open",
        denyButtonText: `Delete`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed && userId) {
          const updatedBoards: Board[] = workBoards.map((board) =>
            board.id === id ? { ...board, is_closed: !board.is_closed } : board
          );
          dispatch(reOpenBoard({ userId, reOpens: updatedBoards }));
          Swal.fire({
            title: "Re-Opened!",
            text: "Your board has been re-open.",
            icon: "success",
          });
        } else if (result.isDenied && userId) {
          // delete board
          const updatedBoards = workBoards.filter((board: Board) => board.id !== id);
          dispatch(deleteBoard({userId, deletedBoards: updatedBoards}))
          Swal.fire({
            title: "Board is deleted!",
            text: "Your board has been deleted.",
            icon: "success",
          });
        }
      });
    }
  };

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);
  return (
    <div>
      {/* Board List */}
      <div className="flex items-center gap-2 py-[18px] mx-[20px] border-b-1 border-[#DEE2E6]">
        <img className="w-8 h-7" src={starIcon} alt="" />
        <p className="text-[30px] font-medium">Closed Boards</p>
      </div>
      <div className="py-4 px-6">
        <ul className="flex flex-wrap gap-4">
          {workBoards.map((board) => (
            <>
              {board.is_closed ? (
                <>
                  <li
                    onClick={() => handleReOpenBoard(board.id)}
                    key={board.id}
                    className="card-board"
                    style={{
                      position: "relative",
                      cursor: "pointer",
                      backgroundImage:
                        board.backdrop.type === "image"
                          ? `url(${board.backdrop.bgImage})`
                          : board.backdrop.bgImage,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                    }}
                  >
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
    </div>
  );
}
