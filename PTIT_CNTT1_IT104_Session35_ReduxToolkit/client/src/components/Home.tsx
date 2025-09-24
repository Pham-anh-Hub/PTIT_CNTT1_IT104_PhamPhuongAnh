import React from "react";
import { useAppSelector } from "../hooks/useRedux";

export default function Home() {
  const user = useAppSelector((state) => state.userInfor);
  console.log(user);
  
  return (
    <div style={{width:"100%"}}>
      <div
        style={{
          width: "60%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "12px",
          border: "1px solid #dedede",
          padding: 12,
        }}
      >
        <h1>Trang chủ</h1>
        <h2>
          UserName: <p>{user.userName}</p>
        </h2>
        <h2>
          Email: <p>{user.email}</p>
        </h2>
      </div>
    </div>
  );
}
