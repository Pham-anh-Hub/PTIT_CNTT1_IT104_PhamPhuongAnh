import { Button } from "antd";
import React from "react";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col gap-1 items-center justify-center h-[100vh]">
      <div>
        <p className="relative text-[250px] font-extrabold text-gray-200 self-center">
          404
        </p>
        <p className="fixed top-[48%] left-[30%] text-5xl font-semibold text-gray-600">
          Not Found Page
        </p>
      </div>
      <p className="text-xl font-semibold text-gray-600">
        Trang cần tìm không tồn tại hoặc đường dẫn có thể đã sai
      </p>
      <div className="flex gap-2.5">
        <Button color="primary" variant="filled">Quay về trang chủ</Button>
        <p> chưa đăng nhập </p>
        <Button color="cyan" variant="filled">Đăng nhập</Button>
      </div>
    </div>
  );
}
