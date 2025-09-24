import { Button, Input, message } from "antd";
import React, { useEffect, useState } from "react";
import type { UserAccount } from "../utils/types";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { loginAccount } from "../redux/slices/home.slices";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();
  const users = useAppSelector((state) => state.login);
  const [user, setUser] = useState<UserAccount>({
    id: 0,
    userName: "",
    email: "",
    password: "",
  });
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleLogin = () => {
    console.log(users);
    console.log(user);
    if (!user.email || !user.password) {
      messageApi.open({
        type: "error",
        content: "Thông tin đăng nhập không được để trống",
      });
    } else {
      const targetLogin = users.find((acc) => acc.email === user.email);
      if (targetLogin) {
        setUser(targetLogin);
        console.log(targetLogin);

        dispatch(loginAccount({ targetAccount: targetLogin }));
        navigate("/home");
      }
    }
  };

  useEffect(() => {
    // setUserAccounts(getUserAccounts());
  }, []);

  return (
    <>
      <div style={{ width: "100%" }}>
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
          <h1 style={{ textAlign: "center" }}>Login Form</h1>
          <div>
            <label htmlFor="">Email</label>
            <Input onChange={handleChangeInput} name="email" type="text" />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <Input
              onChange={handleChangeInput}
              name="password"
              type="password"
            />
          </div>
          <Button onClick={handleLogin} type="primary">
            Login
          </Button>
        </div>
      </div>
      {contextHolder}
    </>
  );
}
