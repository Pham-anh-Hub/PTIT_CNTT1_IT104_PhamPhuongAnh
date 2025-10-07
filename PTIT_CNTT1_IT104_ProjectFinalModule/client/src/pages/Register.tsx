import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import trelloLogo from "../images/trello_logo.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { notification } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";
import type { User } from "../interfaces/board.interface";
import { useAppDispatch, useAppSelector } from "../redux/reducHook/useHooks";
import { addNewUser, getAllUser } from "../apis/user.data";

export default function Register() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.filterUser);
  type NotificationType = "success" | "info" | "warning" | "error";
  const [api, contextHolder] = notification.useNotification();
  const navigate = useNavigate();
  const [inputUserName, setInputUserName] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [inputPassword, setInputPassword] = useState<string>("");

  // Gọi dispatch lấy dữ liệu API
  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  const showAlert = (
    placement: NotificationPlacement,
    inType: NotificationType,
    inform: string[]
  ) => {
    api[inType]({
      message: `${inType.toUpperCase()}`,
      description: (
        <>
          {inform.map((p) => (
            <p>{p}</p>
          ))}
        </>
      ),
      placement,
      style:
        inType === "error"
          ? {
              backgroundColor: "#FFF2F0",
              border: "1px solid #FF0000",
              borderRadius: "8px",
            }
          : {
              backgroundColor: "#F6FFED",
              border: "1px solid #B7EB8F",
              borderRadius: "8px",
            },
    });
  };
  const handleInputSignUp = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "username") {
      setInputUserName(value);
    } else if (name === "email") {
      setInputEmail(value);
    } else if (name == "password") {
      setInputPassword(value);
    }
  };

  const handleRegister = () => {
    const inform: string[] = [];
    const emailExist = users.find((user) => user.email === inputEmail);
    const hasSpecialChar = (text: string) => /[^a-zA-Z0-9\s]/.test(text);
    if (!inputUserName) {
      inform.push("Tên người dùng không để trống");
    }
    if (!inputEmail) {
      inform.push("Email người dùng không để trống");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputEmail)) {
      inform.push("Email không đúng định dạng");
    } else if (emailExist) {
      inform.push("Email đã tồn tại");
    }

    if (!inputPassword) {
      inform.push("Mật khẩu không để trống");
    } else if (inputPassword.length < 8 || !hasSpecialChar(inputPassword)) {
      inform.push("Mật khẩu tối thiểu 8 ký tự, chứa ít nhất 1 ký tự đặc biệt");
    }

    if (inform.length === 0) {
      const newUser: User = {
        id: uuidv4(),
        username: inputUserName,
        email: inputEmail,
        password: inputPassword,
        create_at: String(new Date()),
        boards: [],
      };
      showAlert("topLeft", "success", ["Đăng ký thành công"]);
      setTimeout(() => {
        console.log([...users, newUser]);
        localStorage.setItem("userList", JSON.stringify([...users, newUser]));
        dispatch(addNewUser(newUser));
        navigate("/login");
      }, 1200);
    } else {
      showAlert("topLeft", "error", inform);
    }
  };

  return (
    <>
      {contextHolder}
      <div className="w-[100%] p-2">
        <div
          style={{ fontFamily: "Roboto, sans-serif", margin: "5% auto" }}
          className=" flex flex-col justify-center gap-3 w-[360px]"
        >
          <img
            className="w-[150px] h-[42.55px] self-center"
            src={trelloLogo}
            alt=""
          />
          <h1 className="text-[26px] text-[#212529] self-start">
            Please sign up
          </h1>
          <div className="w-[100%] flex flex-col gap-3">
            <TextField
              onChange={handleInputSignUp}
              name="email"
              id="outlined-basic"
              label="Email address"
              variant="outlined"
            />
            <TextField
              onChange={handleInputSignUp}
              name="username"
              id="outlined-basic"
              label="Username"
              variant="outlined"
            />
            <TextField
              onChange={handleInputSignUp}
              name="password"
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </div>

          <div>
            Already have an account,{" "}
            <u>
              <Link className="text-blue-500" to={"/login"}>
                Click here !
              </Link>
            </u>
          </div>
          <Button
            onClick={handleRegister}
            className="w-[100%]"
            type="button"
            variant="contained"
            color="primary"
          >
            Sign up
          </Button>
          <div className="text-[16px] text-[#212529BF] mt-[20%]">
            &#169; 2025 - By Rikkei Education
          </div>
        </div>
      </div>

      {/* Alert login thanh cong */}
    </>
  );
}
