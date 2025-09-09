import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-6 mt-6">
      <h1 className="text-3xl">Đây là trang chủ</h1>

      <div>
        <button
          className="border-[1px] border-blue-600 p-2 rounded-md bg-blue-300 cursor-pointer"
          onClick={() => navigate("/login")}
        >
          Login
        </button>{" "}
        or{" "}
        <button
          className="border-[1px] border-blue-600 p-2 rounded-md bg-blue-300 cursor-pointer"
          onClick={() => navigate("/register")}
        >
          Register
        </button>
      </div>
    </div>
  );
}
