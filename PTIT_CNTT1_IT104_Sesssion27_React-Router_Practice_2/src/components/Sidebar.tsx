import React from "react";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {
    const navigate = useNavigate()
  return (
    <div
      style={{
        width: "20%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#4536DC",color:"#fff",padding:8
      }}
    >
      <div style={{display: "flex",
        flexDirection: "column",
        alignItems: "center",gap:15}}>
        <h1>📝 My Blog</h1>
        <Button onClick={() => {navigate("/blog/post")}} style={{ backgroundColor: "#6D61ED", color: "#fff" }}>
          Posts
        </Button>
      </div>
      <p>&#169; 2025 My Blog</p>
    </div>
  );
}
