import { Button, Input } from "antd";
import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div
      style={{
        width: "fit-content",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
        gap: "2rem",
        padding:"3rem",
        margin:"10px auto",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
      }}
    >
      <h2>Login Account</h2>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <label htmlFor="">Your email</label>
        <Input placeholder="namecompany@gmail.com" />
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
        <Input placeholder="*********" />
      </div>
      <Button style={{ width: "100%" }} variant="filled" type="primary">
        Login an account
      </Button>
      <p>
        Already have an account? <Link to={"/register"}>Register here</Link>
      </p>
    </div>
  );
}
