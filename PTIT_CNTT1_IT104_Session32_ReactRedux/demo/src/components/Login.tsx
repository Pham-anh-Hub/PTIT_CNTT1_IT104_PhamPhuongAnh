import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { message } from "antd";
import type { AccountType } from "../redux/reducers/register.reducer";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const account = useSelector((state: RootState) => state.register);
  const [loginAccount, setLoginAccount] = useState<AccountType>(account);
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleInputLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginAccount({ ...loginAccount, [name]: value });
  };

  const handleLogin = () => {
    if (!loginAccount.email || !loginAccount.password) {
      messageApi.open({
        type: "error",
        content: "Vui lòng nhập thông tin đăng nhập",
      });
      return;
    }
    console.log("Tài khoản đã đăng nhập: ", loginAccount);
    messageApi.open({
      type: "success",
      content: "Đăng nhập thành công",
    });
    setTimeout(() => {
      dispatch({ type: "LOGIN", payload: loginAccount });
      navigate("/");
    }, 2000);
  };

  return (
    <div
      style={{
        paddingTop: "5rem",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        gap: 12,
        margin: "0 auto",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Đăng nhập</h2>
      <input
        name="email"
        value={loginAccount.email}
        onChange={handleInputLogin}
        placeholder="Nhập email..."
        type="text"
      />
      <input
        name="password"
        value={loginAccount.password}
        onChange={handleInputLogin}
        placeholder="Nhập mật khẩu"
        type="password"
      />
      <button
        onClick={handleLogin}
        style={{ backgroundColor: "#2563EB", color: "white" }}
      >
        Đăng nhập
      </button>

      {contextHolder}
    </div>
  );
}
