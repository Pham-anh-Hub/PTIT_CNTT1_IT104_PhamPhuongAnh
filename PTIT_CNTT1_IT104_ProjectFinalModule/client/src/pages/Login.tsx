import React from "react";
import trelloLogo from "../assets/trello_logo.png";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Register() {
  const label = { inputProps: { "aria-label": "Remember me" } };

  return (
    <>
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
              id="outlined-basic"
              label="Email address"
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label="Password"
              variant="outlined"
            />
          </div>
          <div className="flex items-center">
            <Checkbox {...label} />
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
            className="w-[100%]"
            type="button"
            variant="contained"
            color="primary"
          >
            Sign in
          </Button>
          <div className="text-[16px] text-[#212529BF] mt-[30%]">&#169; 2025 - By Rikkei Education</div>
        </div>
      </div>

      {/* Alert login thanh cong */}
    </>
  );
}
