import React from "react";
import { Alert } from "react-bootstrap";
import { IoMdClose } from "react-icons/io";

export default function Exercise05() {
  return (
    <div>
      {["success", "danger", "warning"].map((variant) => (
        <Alert
          style={{
            width: "50%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          key={variant}
          variant={variant}
        >
          {variant === "success" ? (
            <p>Thêm mới tài khoản thành công </p>
          ) : variant === "danger" ? (
            <p>Thêm mới tài khoản thất bại</p>
          ) : (
            <p>Tên không được để trống</p>
          )}
          <IoMdClose style={{ width: "25px", height: "25px" }} />
        </Alert>
      ))}
    </div>
  );
}
