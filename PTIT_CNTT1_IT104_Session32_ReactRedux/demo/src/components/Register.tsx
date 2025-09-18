import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import type { AccountType } from "../redux/reducers/register.reducer";
import { useNavigate } from "react-router-dom";
import { message } from "antd";

export default function Register() {
  const defaultValue = useSelector((state: RootState) => state.register);
  const [account, setAccount] = useState<AccountType>(defaultValue);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const handleInputAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const handleRegister = () => {
    if (account === defaultValue) {
      messageApi.open({
        type: "error",
        content: "Thông tin không được để trống",
      });
      return;
    }
    dispatch({ type: "REGISTER", payload: account });

    messageApi.open({
      type: "success",
      content: "Đăng ký thành công",
    });
    setTimeout(() => {
      setAccount({
        id: 0,
        email: "",
        password: "",
      });
      navigate("/login");
    }, 1000);
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
      <h2 style={{ textAlign: "center" }}>Đăng ký</h2>
      <input
        name="email"
        value={account.email}
        onChange={handleInputAccount}
        placeholder="Nhập email..."
        type="text"
      />
      <input
        name="password"
        value={account.password}
        onChange={handleInputAccount}
        placeholder="Nhập mật khẩu"
        type="password"
      />
      <button
        onClick={handleRegister}
        style={{ backgroundColor: "#2563EB", color: "white" }}
      >
        Đăng ký
      </button>

      {contextHolder}
    </div>
  );
}
