import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface User {
  id: string;
  email: string;
  password: string;
}

export default function Home() {
  const [accountList, _setAccountList] = useState<User[]>(() => {
    const listClone = localStorage.getItem("listAccount");
    return listClone ? JSON.parse(listClone) : [];
  });
  const navigate = useNavigate();
  const { id } = useParams();
  const targetAccount = accountList.find((user) => user.id === id);
  console.log(targetAccount);

  return (
    <div className="flex flex-col justify-center items-center gap-6 mt-6">
      <h1 className="text-3xl">Đây là trang chủ</h1>

      {targetAccount ? (
        <>
          <div>User: {targetAccount.email}</div>
        </>
      ) : (
        <></>
      )}

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
