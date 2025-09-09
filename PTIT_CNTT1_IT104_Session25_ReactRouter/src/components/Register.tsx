import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

interface User {
  id: string;
  email: string;
  password: string;
}

export default function Register() {
  const navigate = useNavigate();
  const [accountList, setAccountList] = useState<User[]>(() => {
    const listClone = localStorage.getItem("listAccount");
    return listClone ? JSON.parse(listClone) : [];
  });
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");
  const [inputPassConfirm, setInputPassConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleInputInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setError("");
    console.log(name, value);
    if (name === "email") {
      setInputEmail(value);
    } else if (name === "password") {
      setInputPassword(value);
    } else if (name === "confirmPass") {
      setInputPassConfirm(value);
    }
  };

  const handleRegister = () => {
    if (!inputEmail || !inputPassword || !inputPassConfirm) {
      setError("Thông tin không được để trống");
      return;
    }
    setError("");
    const existedEmail = accountList.find((user) => user.email === inputEmail);
    const checkSame = inputPassConfirm === inputPassword;
    if (existedEmail) {
      setError("Email đã tồn tại");
    } else if (!checkSame) {
      setError("Mật khẩu không trùng khớp");
    } else {
      setError("");
      const newUser: User = {
        id: uuidv4(),
        email: inputEmail,
        password: inputPassword,
      };
      const updateList = [...accountList, newUser];
      setAccountList(updateList);
      localStorage.setItem("listAccount", JSON.stringify(updateList));
      setInputEmail("");
      setInputPassword("");
      setInputPassConfirm("");
      navigate("/login");
    }
  };

  return (
    <div className="w-[30%] my-10 mx-[auto] flex flex-col justify-center items-center py-5 px-2 rounded-md gap-3">
      <h2 className="text-2xl text-gray-800">Register account</h2>
      <div className="flex flex-col w-[100%]">
        <label className="text-gray-900" htmlFor="">
          Your email
        </label>
        <input
          onChange={handleInputInfo}
          value={inputEmail}
          name="email"
          className="border-[1px] border-gray-300 rounded-md p-2 w-[100%]"
          type="text"
          placeholder="name@company.com"
        />
      </div>
      <div className="flex flex-col w-[100%]">
        <label className="text-gray-900" htmlFor="">
          Password
        </label>
        <input
          onChange={handleInputInfo}
          value={inputPassword}
          name="password"
          className="border-[1px] border-gray-300 rounded-md p-2 w-[100%]"
          type="password"
          placeholder="********"
        />
      </div>
      <div className="flex flex-col w-[100%]">
        <label className="text-gray-900" htmlFor="">
          Confirm Password
        </label>
        <input
          onChange={handleInputInfo}
          value={inputPassConfirm}
          name="confirmPass"
          className="border-[1px] border-gray-300 rounded-md p-2 w-[100%]"
          type="password"
          placeholder="********"
        />
      </div>
      {error !== "" ? (
        <>
          <div className="text-red-500 text-[12px]">{error}</div>
        </>
      ) : (
        <></>
      )}

      <button
        onClick={handleRegister}
        className="border-[1px] bg-blue-500 text-white w-[100%] p-2 rounded-md"
      >
        Create an account
      </button>
      <p className="text-gray-600 text-[10px] w-[90%] text-center">
        Already have an account?{" "}
        <Link to={"/login"}>
          <b>Login here</b>
        </Link>
      </p>
    </div>
  );
}
