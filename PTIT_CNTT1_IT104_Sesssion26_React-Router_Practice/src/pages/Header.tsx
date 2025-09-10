import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        backgroundColor: "#3B82F6"
      }}
    >
      <NavLink
        style={{ color: "#fff", padding: "10px" }}
        to={"/contact"}
      >
        Contact
      </NavLink>
      <NavLink
        style={{ color: "#fff", padding: "10px" }}
        to={"/about"}
      >
        About
      </NavLink>
      <NavLink
        style={{ color: "#fff", padding: "10px" }}
        to={"/post"}
      >
        Post
      </NavLink>
    </div>
  );
}
