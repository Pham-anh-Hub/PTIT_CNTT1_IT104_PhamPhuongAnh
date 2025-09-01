import React, { useReducer, useState } from "react";

interface User {
  name: string;
  email: string;
}
const reducer = (state: User, action: { type: string; payload: User }) => {
  switch (action.type) {
    case "SUBMIT":
      return { ...action.payload };
    default:
      return state;
  }
};

export default function UserInform() {
  const [state, dispatch] = useReducer(reducer, { name: "", email: "" });

  const [inputName, setInputName] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "name") {
      setInputName(value);
    } else if (name === "email") {
      setInputEmail(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputEmail || !inputName) {
      return;
    }
    const newUser: User = {
      name: inputName,
      email: inputEmail,
    };
    console.log(newUser);

    dispatch({ type: "SUBMIT", payload: newUser });
    setInputEmail("");
    setInputName("");
  };

  return (
    <div className="exercise08">
      <h2>User Information Form</h2>
      <form onSubmit={handleSubmit} className="input-form">
        <div>
          <label htmlFor=""></label>
          <input
            value={inputName}
            name="name"
            onChange={handleChange}
            type="text"
          />
        </div>
        <div>
          <label htmlFor=""></label>
          <input
            value={inputEmail}
            name="email"
            onChange={handleChange}
            type="text"
          />
        </div>
        <button type="submit">Gửi</button>
      </form>

      <div className="user-info">
        <h2>Thông tin người dùng</h2>
        <p>
          <span style={{ color: "blue", fontWeight: "bold" }}>Tên:</span>{" "}
          {state.name ? state.name : "Chưa nhập"}
        </p>
        <p>
          <span style={{ color: "blue", fontWeight: "bold" }}>Email:</span>{" "}
          {state.email ? state.email : "Chưa nhập"}
        </p>
      </div>
    </div>
  );
}
