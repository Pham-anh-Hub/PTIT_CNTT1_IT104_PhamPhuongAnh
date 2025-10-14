import { TextField } from "@mui/material";
import { Modal } from "antd";
import clockIcon from "/images/clockIcon.png";
import calender from "/images/calenderIcon.png";
import labelIcon from "/images/LabelGray.png";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/reducHook/useHooks";
import { useParams } from "react-router-dom";
import type { Board, Label, User } from "../interfaces/board.interface";
import { getAllUser } from "../apis/user.data";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
};

export default function ModalSearchFilter({
  isModalOpen,
  setIsModalOpen,
}: Props) {
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

  // const [openModalSearch, setOpenModalSearch] = useState(false);

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
  }, [boardId, workBoards]);

  return (
    <div>
      <Modal
        width={"25vw"}
        style={{ position: "fixed", right: "50px", top: "20px", width: "20vw" }}
        title={<p className="text-[14px] text-[#44546F] text-center">Filter</p>}
        closable={{ "aria-label": "Custom Close Button" }}
        open={isModalOpen}
        footer={false}
        onCancel={handleCancel}
      >
        <div className="flex flex-col gap-1">
          {/* Khối search */}
          <div className="flex flex-col gap-1">
            <p className="text-[12px] text-[#44546F] font-semibold">Keyword</p>
            <TextField className="w-[100%]" placeholder="Enter a keyword..." />
            <p className="text-[11px] text-[#44546F]">Search cards</p>
          </div>
          {/* Khối lọc */}
          <div className="flex flex-col gap-3">
            <p className="text-[#44546F] text-[12px] font-semibold">
              Card status
            </p>
            <div className="flex items-center gap-2 my-1">
              <input className="w-4 h-4" type="checkbox" name="" />{" "}
              <p className="text-[14px] text-[#172B4D]">Marked as complete</p>
            </div>
            <div className="flex items-center gap-2">
              <input className="w-4 h-4" type="checkbox" name="" />{" "}
              <p className="text-[14px] text-[#172B4D]">
                Not marked as complete
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-[#44546F] text-[12px] font-semibold">Due date</p>
            <div className="flex items-center gap-3">
              <input className="w-4 h-4" type="checkbox" name="" />{" "}
              <div className="flex gap-2">
                <img
                  className="w-6 h-6 p-1 rounded-md bg-gray-200"
                  src={calender}
                  alt=""
                />
                <p className="text-[14px] text-[#172B4D]">Marked as complete</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <input className="w-4 h-4" type="checkbox" name="" />{" "}
              <div className="flex gap-2">
                <img
                  className="w-6 h-6 bg-red-600 p-1 rounded-full"
                  src={clockIcon}
                  alt=""
                />
                <p className="text-[14px] text-[#172B4D]">Marked as complete</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <input className="w-4 h-4" type="checkbox" name="" />{" "}
              <div className="flex gap-2">
                <img
                  className="w-6 h-6 bg-yellow-300 p-1 rounded-full"
                  src={clockIcon}
                  alt=""
                />
                <p className="text-[14px] text-[#172B4D]">Marked as complete</p>
              </div>
            </div>
          </div>
          {/* Labels */}
          <div className="flex flex-col gap-2">
            <p className="text-[14px] text-[#44546F] font-semibold">Labels</p>
            <div className="flex items-center gap-4">
              <input className="w-4 h-4" type="checkbox" name="" id="" />
              <div className="flex gap-2">
                <img
                  className="w-6 h-6 p-1 bg-gray-200 rounded-full"
                  src={labelIcon}
                  alt=""
                />
                <p className="text-[#44546F] text-[14px]">No labels</p>
              </div>
            </div>
            <div className="flex flex-col gap-1 h-[140px] overflow-y-scroll">
              {workBoards.map((board: Board) => {
                if (board.id === currentBoard?.id) {
                  return (
                    <>
                      {board.lists.map((list) => (
                        <>
                          {list.tasks.map((task) => (
                            <>
                              {task.tags
                                .filter((tag: Label) => tag.status == "choose")
                                .map((tag) => (
                                  <div className="flex items-center gap-4">
                                    <input
                                      className="w-4 h-4"
                                      type="checkbox"
                                      name=""
                                      id=""
                                    />
                                    <div
                                      style={{
                                        borderRadius: "3px",
                                        padding: 16,
                                        width: "90%",
                                        backgroundColor: tag.color,
                                      }}
                                    ></div>
                                  </div>
                                ))}
                            </>
                          ))}
                        </>
                      ))}
                    </>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
