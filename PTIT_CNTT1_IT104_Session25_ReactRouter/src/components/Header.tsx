import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    // isActive là 1 object không phải boolean
    <div className="flex items-center justify-center gap-3.5">
      <NavLink
        to={"/"}
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to={"/contact"}
      >
        Contact
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "active" : "")}
        to={"/about"}
      >
        About
      </NavLink>
    </div>
  );
}
