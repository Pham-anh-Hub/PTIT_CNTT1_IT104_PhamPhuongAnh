import React from "react";
import Header from "./Header";

export default function Contact() {
  return (
    <>
    <Header/>
    <div
      style={{
        width: "95%",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
        margin: "5rem auto",
      }}
    >
      <h2>Thông tin liên hệ</h2>
      <p>
        <span style={{ fontWeight: "bold", color: "grey" }}>Email:</span>{" "}
        <span style={{ fontWeight: "bold", color: "#007BFF" }}>
          nguyenvanb@gmail.com
        </span>
      </p>
      <p>
        <span style={{ fontWeight: "bold", color: "grey" }}>
          Số điện thoại:
        </span>{" "}
        <span style={{ color: "grey" }}>0987 654 321</span>
      </p>
      <p>
        <span style={{ fontWeight: "bold", color: "grey" }}>LinkedIn:</span>{" "}
        <span style={{ fontWeight: "bold", color: "#007BFF" }}>
          linkedin.com/in/nguyenvanb
        </span>
      </p>
    </div>
    </>
  );
}
