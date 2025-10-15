import React, { useEffect, useState } from "react";
import trelloLogo from "/images/trello_logo.png";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/reducHook/useHooks";
import { notification } from "antd";
import type { NotificationPlacement } from "antd/es/notification/interface";
import type { User } from "../interfaces/board.interface";
import { getAllUser } from "../apis/user.data";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";

export default function Register() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const userList = useAppSelector((state) => state.users.filterUser);
  const cloneLocal = localStorage.getItem("userLoggined");
  const [userLoggined, setUserLoggined] = useState<User | undefined>(undefined);
  const label = { inputProps: { "aria-label": "Remember me" } };
  const [rememberInfo, setRememberInfo] = useState<boolean>(false);
  type NotificationType = "success" | "info" | "warning" | "error";
  const [api, contextHolder] = notification.useNotification();
  const [inputEmail, setInputEmail] = useState<string>(
    userLoggined ? userLoggined.email : ""
  );
  const [inputPassword, setInputPassword] = useState<string>(
    userLoggined ? userLoggined.password : ""
  );

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch, cloneLocal]);

  useEffect(() => {
    if (cloneLocal) {
      const dataParsed = JSON.parse(cloneLocal);
      setUserLoggined(dataParsed);
      setInputEmail(dataParsed.email);
      setInputPassword(dataParsed.password);
    }
  }, []);

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
  const rememberLogin = () => {
    setRememberInfo(true);
  };
  const handleInputLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") {
      setInputEmail(value);
    } else if (name === "password") {
      setInputPassword(value);
    }
    setRememberInfo(rememberInfo);
  };

  const handleLogin = () => {
    const inform: string[] = [];
    const userExist = userList.find((user) => user.email === inputEmail);
    if (!inputEmail) {
      inform.push("Email không để trống");
    } else if (!userExist) {
      inform.push("Email không tồn tại");
    }
    if (!inputPassword) {
      inform.push("Mật khẩu không để trống");
    } else if (inputPassword !== userExist?.password) {
      inform.push("Mật khẩu không chính xác");
    }
    if (inform.length === 0) {
      localStorage.setItem(
        "remember",
        JSON.stringify(rememberInfo ? true : false)
      );
      localStorage.setItem("userLoggined", JSON.stringify(userExist));
      showAlert("topRight", "success", ["Đăng nhập thành công"]);
      setTimeout(() => {
        navigate(`/${userExist?.id}`, { replace: true });
      }, 1200);
    } else {
      showAlert("topRight", "error", inform);
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
            Please sign in
          </h1>
          <div className="w-[100%] flex flex-col gap-3">
            <TextField
              value={inputEmail}
              onChange={handleInputLogin}
              id="outlined-basic"
              label="Email address"
              variant="outlined"
              name="email"
            />
            <FormControl sx={{ width: "100%" }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                onChange={handleInputLogin}
                id="outlined-adornment-password"
                name="password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
          </div>
          <div className="flex items-center">
            <Checkbox onChange={rememberLogin} {...label} />
            <p className="">Remember me</p>
          </div>
          <div>
            Don't have an account,{" "}
            <u>
              <Link className="text-blue-500" to={"/register"}>
                Click here !
              </Link>
            </u>
          </div>
          <Button
            onClick={handleLogin}
            className="w-[100%]"
            type="button"
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
          <div className="text-[16px] text-[#212529BF] mt-[30%]">
            &#169; 2025 - By Rikkei Education
          </div>
        </div>
      </div>

      {/* Alert login thanh cong */}
    </>
  );
}
