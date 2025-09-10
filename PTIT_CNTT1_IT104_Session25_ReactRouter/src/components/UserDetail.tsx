import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserDetail() {
  const { id } = useParams();
  const [targetUser, setTargetUser] = useState<
    | {
        id: string;
        name: string;
        email: string;
        address: string;
      }
    | undefined
  >(undefined);
  const [userList, _setUserList] = useState<
    { id: string; name: string; email: string; address: string }[]
  >(() => {
    const cloneList = localStorage.getItem("listUser");
    return cloneList ? JSON.parse(cloneList) : [];
  });
  console.log(userList);
  console.log(id);

  useEffect(() => {
    const cloneUser = userList.find((user) => user.id == id);
    console.log(cloneUser);
    setTargetUser(cloneUser);
  }, [id, userList]);
  return (
    <div>
      <h1 className="text-2xl text-gray-800">Thông tin chi tiết</h1>
      <div>
        <p>Id: {targetUser?.id}</p>
        <p>UserName: {targetUser?.name}</p>
        <p>Email: {targetUser?.email}</p>
        <p>Address: {targetUser?.address}</p>
      </div>
    </div>
  );
}
