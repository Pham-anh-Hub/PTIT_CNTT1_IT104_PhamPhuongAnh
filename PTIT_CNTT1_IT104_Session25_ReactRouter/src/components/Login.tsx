import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
interface User {
  id: string;
  email: string;
  password: string;
}

export default function Login() {
  const navigate = useNavigate();
  const [inputEmail, setEmail] = useState<string>("");
  const [inputPassword, setPassword] = useState<string>("");
  const [accountList, _setAccountList] = useState<User[]>(() => {
    const listClone = localStorage.getItem("listAccount");
    return listClone ? JSON.parse(listClone) : [];
  });
  const [error, setError] = useState<string>("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setError("");
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const handleLogin = () => {
    if (!inputEmail || !inputPassword) {
      setError("Dữ liệu không để trống");
      return;
    }
    const targetAccount = accountList.find((acc) => acc.email === inputEmail);
    if (!targetAccount) {
      setError("Tài khoản không tồn tại");
    } else {
      if (inputPassword === targetAccount.password) {
        navigate(`/${targetAccount.id}`);
      } else {
        setError("Mật khẩu không đúng");
      }
    }
  };

  return (
    <div className="w-[30%] my-10 mx-[auto] flex flex-col justify-center items-center py-5 px-2 rounded-md gap-3">
      <h2 className="text-2xl text-gray-800">Login account</h2>
      <div className="flex flex-col w-[100%]">
        <label htmlFor="">Your email</label>
        <input
          onChange={handleInput}
          value={inputEmail}
          name="email"
          className="border-[1px] border-gray-300 rounded-md p-2 w-[100%]"
          type="text"
          placeholder="name@company.com"
        />
      </div>
      <div className="flex flex-col w-[100%]">
        <label htmlFor="">Password</label>
        <input
          onChange={handleInput}
          value={inputPassword}
          name="password"
          className="border-[1px] border-gray-300 rounded-md p-2 w-[100%]"
          type="password"
          placeholder="********"
        />
      </div>
      {error === "" ? (
        <></>
      ) : (
        <>
          <div className="text-red-400 text-[12px]">{error}</div>
        </>
      )}
      <button
        onClick={handleLogin}
        className="border-[1px] bg-blue-500 text-white w-[100%] p-2 rounded-md"
      >
        Login an account
      </button>
      <p className="text-gray-600 text-[10px] w-[90%] text-center">
        Already have an account?{" "}
        <Link to={"/register"}>
          <b>Register here</b>
        </Link>
      </p>
    </div>
  );
}
