import React, { useEffect } from "react";

import addBoard from "/images/addBoardIcon.png";
import { NavLink, useParams } from "react-router-dom";
import type { Board, User } from "../interfaces/board.interface";
import { useAppDispatch, useAppSelector } from "../redux/reducHook/useHooks";
import { getAllUser } from "../apis/user.data";

export default function ListBoards() {
  const dispatch = useAppDispatch();
  const { userId } = useParams();
  // Lấy danh sách user từ Redux
  const users: User[] = useAppSelector((state) => state.users.filterUser);
  // Tìm user hiện tại theo userId từ URL
  const currentUser = users.find((user) => user.id === userId);
  // Lấy danh sách boards của user hiện tại
  const workBoards: Board[] = currentUser?.boards ?? [];
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  return (
    <>
      <div className="h-[420px] overflow-y-scroll" style={{ fontFamily: `"Roboto", sans-serif` }}>
        <div className="p-3 flex items-center justify-between">
          <h2 className="font-semibold">Yourboard</h2>
          <img className="w-4 h-4 text-4 " src={addBoard} alt="" />
        </div>
        <ul>
          {workBoards
            .filter((board) => !board.is_closed)
            .map((item) => (
              <li key={item.id}>
                <NavLink
                  style={{ padding: "12px 16px" }}
                  className={({ isActive }) =>
                    `flex items-center gap-[8px] transition-all transform-border ${
                      isActive ? "opacity-60 bg-gray-300" : ""
                    }`
                  }
                  to={`/${userId}/boards/${item.id}`}
                >
                  {item.backdrop.type === "image" ? (
                    <>
                      <img
                        className="w-[34px] h-[24px] rounded-sm text-xl"
                        src={item.backdrop.bgImage}
                      />
                    </>
                  ) : (
                    <div
                      className="w-[34px] h-[24px] rounded-sm text-xl"
                      style={{ backgroundImage: item.backdrop.bgImage }}
                    ></div>
                  )}{" "}
                  <p className="text-[15px] font-medium text-gray-900">
                    {item.title}
                  </p>
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
