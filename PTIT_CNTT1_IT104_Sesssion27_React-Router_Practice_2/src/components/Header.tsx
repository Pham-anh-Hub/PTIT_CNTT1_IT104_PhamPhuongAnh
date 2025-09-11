import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div
      style={{
        backgroundColor: "#007BFF",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <NavLink style={{ color: "#fff", padding: "12px" }} to={"/"}>
        Home
      </NavLink>
      <NavLink style={{ color: "#fff", padding: "12px" }} to={"/about"}>
        About
      </NavLink>
      <NavLink style={{ color: "#fff", padding: "12px" }} to={"/contact"}>
        Contact
      </NavLink>
    </div>
  );
}
