import React from "react";
import { NavLink, useParams } from "react-router-dom";

import boardIcon from "../assets/boards_icon.png";
import closeIcon from "../assets/closed_icon.png";
import staredBoard from "../assets/starred_icon.png";

interface SidebarProp {
  open?: boolean;
  childrent: React.ReactNode;
}
export default function Sidebar({ open, childrent }: SidebarProp) {
  const data = useParams();
  console.log(data);

  const navItems = [
    { icon: boardIcon, label: "Boards", to: "/boards" },
    { icon: staredBoard, label: "Starred Boards", to: "#" },
    { icon: closeIcon, label: "Closed Boards", to: "#" },
  ];
  return (
    <>
      <nav
        id="side-bar"
        style={open ? { display: "flex", height: "calc(100vh - 56px)" } : {}}
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
                    className="flex items-center gap-[8px] transition-all transform-border hover:opacity-60 hover:bg-gray-300"
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
