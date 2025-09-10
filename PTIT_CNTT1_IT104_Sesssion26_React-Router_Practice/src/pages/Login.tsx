import { Button, Input, Select } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

export default function Login() {
  const navigate = useNavigate();
  const [defaultUser, _] = useState<{
    email: string;
    password: string;
    role: string;
  }>({ email: "ppanh@gmail.com", password: "123456", role: "User" });
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [inputRole, setinputRole] = useState<string>("");
  const [error, setError] = useState<string>("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError("");
    const { name, value } = e.target;
    if (name === "email") {
      setInputEmail(value);
    } else if (name === "password") {
      setInputPassword(value);
    }
  };
  const handleSelect = (value: string) => {
    setError("");
    console.log(value);
    setinputRole(value);
  };
  const handleSearch = () => {
    console.log(inputEmail, inputPassword, inputRole);
    if (!inputEmail || !inputPassword || !inputRole) {
      setError("Dữ liệu không được để trống");
      localStorage.setItem("loginStatus", JSON.stringify(false));
      return;
    }
    if (inputEmail !== defaultUser.email) {
      setError("Email không trùng khớp");
    } else if (inputPassword !== defaultUser.password) {
      setError("Mật khẩu chưa đúng");
    } else if (inputRole !== defaultUser.role.toLowerCase()) {
      setError("Vai trò của bạn không hợp lệ");
    } else {
      alert("Đăng nhập thành công");
      navigate("/account");
      localStorage.setItem("loginStatus", JSON.stringify(true));
    }
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        border: "1px solid #eeeeee",
        padding: 10,
        borderRadius: "8px",
      }}
    >
      <h1>Login</h1>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <Input
          name="email"
          value={inputEmail}
          onChange={handleInput}
          placeholder="Nhập email"
        />
        <Input
          name="password"
          value={inputPassword}
          onChange={handleInput}
          placeholder="Nhập mật khẩu"
        />
        <Select
          style={{ width: "100%" }}
          placeholder="--Chọn quyền--"
          onChange={handleSelect}
          allowClear
        >
          <Option value="admin">Admin</Option>
          <Option value="user">User</Option>
        </Select>
      </div>
      <div style={{ fontSize: "12px", color: "red" }}>{error}</div>
      <Button onClick={handleSearch} type="primary">
        Search
      </Button>
    </div>
  );
}
