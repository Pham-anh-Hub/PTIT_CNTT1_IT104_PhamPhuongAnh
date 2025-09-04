import React from "react";
import { Toast } from "react-bootstrap";

export default function Exercise07() {
  return (
    <div>
      <Toast style={{ margin: "15px" }}>
        <Toast.Header>
          <strong className="me-auto">Cảnh báo</strong>
        </Toast.Header>
        <Toast.Body>Lỗi kết nối máy chủ</Toast.Body>
      </Toast>
    </div>
  );
}
