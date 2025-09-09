import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface User {
  id: string;
  email: string;
  password: string;
}

export default function User() {
  const [accountList, _setAccountList] = useState<User[]>(() => {
    const listClone = localStorage.getItem("listAccount");
    return listClone ? JSON.parse(listClone) : [];
  });
  const { id } = useParams();
  const targetAccount = accountList.find((user) => user.id === id);
  console.log(targetAccount);

  return (
    <div className="flex flex-col items-center my-[6rem] gap-8  ">
      <h1 className="text-gray-700 text-4xl">Đây là trang chủ</h1>
      {targetAccount ? (
        <>
          <div>User: {targetAccount.email}</div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
