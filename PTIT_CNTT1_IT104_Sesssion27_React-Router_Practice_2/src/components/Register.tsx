import { Email } from "@mui/icons-material";
import { Button, Input } from "antd";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate()
  const [inputEmail, setEmail] = useState<string>("");
  const [inputPassword, setPassword] = useState<string>("");
  const [inputConfirmPass, setConfirmPass] = useState<string>("");
  const [accountsUser, setAccountsUser] = useState<
    { id: number; email: string; password: string }[]
  >(() => {
    const cloneAccounts = localStorage.getItem("accountsUser");
    return cloneAccounts ? JSON.parse(cloneAccounts) : [];
  });
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPass") {
      setConfirmPass(value);
    }
  };
  const handleRegister = () => {
    if (!inputEmail || !inputPassword || !inputConfirmPass) {
      alert("Dữ liệu không được để trống !!");
      return;
    }
    if (inputConfirmPass !== inputPassword) {
      alert("Mật khẩu xác nhận không trùng khớp");
    } else if (accountsUser.find((user) => user.email === inputEmail)) {
      alert("Email đã tồn tại");
    } else {
      const newAccount = {
        id: Math.round(Math.random() * 1000000),
        email: inputEmail,
        password: inputPassword,
      };
      const newUpdateList = [...accountsUser, newAccount];
      setAccountsUser(newUpdateList);
      localStorage.setItem("accountsUser", JSON.stringify(newUpdateList));
      setEmail("")
      setConfirmPass("")
      setPassword("")
      alert("Đăng ký thành công !!")
      navigate("/login")
    }
  };
  return (
    <div
      style={{
        width: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "2rem",
        padding: "3rem",
        margin: "10px auto",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <h2>Create Account</h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <label htmlFor="">Your email</label>
        <Input
          value={inputEmail}
          type="text"
          onChange={handleChangeInput}
          name="email"
          placeholder="namecompany@gmail.com"
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <label htmlFor="">Your password</label>
        <Input
          value={inputPassword}
          type="password"
          onChange={handleChangeInput}
          name="password"
          placeholder="*********"
        />
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <label htmlFor="">Confirm Password</label>
        <Input
          value={inputConfirmPass}
          type="password"
          onChange={handleChangeInput}
          name="confirmPass"
          placeholder="*********"
        />
      </div>
      <Button
        onClick={handleRegister}
        style={{ width: "100%" }}
        variant="filled"
        type="primary"
      >
        Create an account
      </Button>
      <p>
        Already have an account? <Link to={"/login"}>Login here</Link>
      </p>
    </div>
  );
}
