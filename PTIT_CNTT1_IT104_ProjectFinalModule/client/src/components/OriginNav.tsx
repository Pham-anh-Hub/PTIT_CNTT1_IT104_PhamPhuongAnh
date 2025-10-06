import React from "react";
import settingIcon from "../assets/setting_icon.png";
import signOutIcon from "../assets/signOutIcon.png";
import { NavLink } from "react-router-dom";
export default function OriginNav() {
  return (
    <>
      <ul>
        <li>
          <NavLink
            style={{ padding: "12px 16px" }}
            className="flex items-center gap-[8px] transition-all transform-border hover:opacity-60 hover:bg-gray-300"
            to={"#"}
          >
            <img className="w-[16px] h-[16px]" src={settingIcon} />{" "}
            <p className="text-[15px] font-medium text-[#0D6EFD]">Setting</p>
          </NavLink>
        </li>
        <li>
          <NavLink
            style={{ padding: "12px 16px" }}
            className="flex items-center gap-[8px] transition-all transform-border hover:opacity-60 hover:bg-gray-300"
            to={"#"}
          >
            <img className="w-[16px] h-[16px]" src={signOutIcon} />{" "}
            <p className="text-[15px] font-medium text-[#0D6EFD]">Sign Out</p>
          </NavLink>
        </li>
      </ul>
    </>
  );
}
