import React, { useEffect, useState } from "react";
import tableIcon from "/images/tableIcon.png";
import blackCloseIcon from "/images/closed_black_icon.png";
import filterIcon from "/images/filter.png";
import Sidebar from "../components/Sidebar";
import displayFrame from "/images/FrameIcon.png";
import ListBoards from "../components/ListBoards";
import StarredIcon from "/images/star_icon.png";
import { useParams } from "react-router-dom";
import type { Board, User } from "../interfaces/board.interface";
import { Button as AntButton } from "antd";
import ListOfBoard from "../components/ListOfBoard";

// Lấy dữ liệu người dùng đăng nhập từ local
const userLoggined = (): User | null => {
  const cloneAccount = localStorage.getItem("userLoggined");
  return cloneAccount ? JSON.parse(cloneAccount) : null;
};
const workBoards: Board[] = userLoggined()?.boards ?? [];
export default function BoardDetail() {
  const { boardId } = useParams();
  const [currentBoard, setCurrentBoard] = useState<Board | undefined>(
    undefined
  );
  useEffect(() => {
    console.log(boardId);

    const current = workBoards.find((board) => board.id === String(boardId));
    if (current) {
      setCurrentBoard(current);
    }
  }, [boardId]);
  return (
    <>
      <Sidebar childrent={<ListBoards />} />
      <main
        style={{ fontFamily: `"Roboto", sans-serif` }}
        className="flex-[4.06]"
      >
        {/* header info */}
        <div
          style={{ fontWeight: "700" }}
          className="flex justify-between py-3 px-2 bg-[#F1F2F4]"
        >
          <div className="flex gap-6 items-center ">
            <h2 className="text-xl">{currentBoard?.title}</h2>
            <img className="w-5 h-5" src={StarredIcon} alt="" />
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
          <AntButton className="flex items-center gap-2 p-3"  variant="outlined">
            <img src={filterIcon} className="w-4 h-3.5" alt="" />
            <p className="text-[14px] text-[#172B4D]">Filter</p>
          </AntButton>
        </div>

        {/* List & detail */}
        <ListOfBoard />
      </main>
    </>
  );
}
