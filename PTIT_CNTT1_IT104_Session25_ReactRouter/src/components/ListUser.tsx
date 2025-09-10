import { Button } from "antd";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function ListUser() {
  const navigate = useNavigate();
  const listUsers = [
    { id: 1, name: "Nguyễn Văn A", email: "nva@gmail.com", address: "Hà Nội" },
    { id: 2, name: "Nguyễn Văn B", email: "nvb@gmail.com", address: "Hà Nam" },
    {
      id: 3,
      name: "Nguyễn Văn C",
      email: "nvc@gmail.com",
      address: "Ninh Bình",
    },
  ];
  useEffect(() => {
    localStorage.setItem("listUser", JSON.stringify(listUsers));
  });
  return (
    <div className="flex gap-2.5 items-center justify-center mt-8">
      {listUsers.map((user) => (
        <div className="border-[1px] w-[fit-content] p-4 rounded-md flex flex-col gap-2">
          <p>Id: {user.id}</p>
          <p>UserName: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
          <Button
            onClick={() => {
              navigate(`/user-detail/${user.id}`);
            }}
            color="default"
            variant="outlined"
          >
            Xem chi tiết
          </Button>
        </div>
      ))}
    </div>
  );
}
