import React from "react";
import { NavLink } from "react-router-dom";

import boardIcon from "/images/boards_icon.png";
import closeIcon from "/images/closed_icon.png";
import staredBoard from "/images/starred_icon.png";
import type { User } from "../interfaces/board.interface";

interface SidebarProp {
  open?: boolean;
  childrent: React.ReactNode;
}
export default function Sidebar({ open, childrent }: SidebarProp) {
  const userLoggined = (): User | null => {
    const cloneAccount = localStorage.getItem("userLoggined");
    return cloneAccount ? JSON.parse(cloneAccount) : null;
  };

  const navItems = [
    { icon: boardIcon, label: "Boards", to: `/${userLoggined()?.id}/boards` },
    { icon: staredBoard, label: "Starred Boards", to: `/${userLoggined()?.id}/starreds` },
    { icon: closeIcon, label: "Closed Boards", to: `/${userLoggined()?.id}/closeds` },
  ];
  return (
    <>
      <nav
        id="side-bar"
        style={open ? { display: "flex", height: "100%", width:"34vw"} : {}}
        className=" flex-[1] border-r-1 border-t-1 border-gray-300 bg-[#F8F9FA]"
      >
        <div className="flex flex-col gap-[16px]">
          <p className="pt-[40px] px-[16px] font-medium text-[15px] text-[#212529BF]">
            YOUR WORKSPACES
          </p>
          <div>
            <ul>
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    style={{ padding: "12px 16px" }}
                    className={({ isActive }) =>
                      `flex items-center gap-[8px] transition-all transform-border ${
                        isActive ? "bg-gray-300 opacity-60" : ""
                      }`
                    }
                    to={item.to}
                  >
                    <img className="w-[16px] h-[16px]" src={item.icon} />{" "}
                    <p className="text-[15px] font-medium text-[#0D6EFD]">
                      {item.label}
                    </p>
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="border-b-1 border-gray-300"> </div>
            {childrent}
          </div>
        </div>
      </nav>
    </>
  );
}
