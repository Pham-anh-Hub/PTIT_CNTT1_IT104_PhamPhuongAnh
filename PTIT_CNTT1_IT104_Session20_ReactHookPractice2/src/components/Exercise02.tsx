import React, { useState } from "react";

export default function Exercise02() {
  const [inputName, setInputName] = useState<string>("");
  const [inputEmail, setInputEmail] = useState<string>("");
  const [submited, setSubmited] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "username") {
      setInputName(value);
    } else if (name === "email") {
      setInputEmail(value);
    }
  };

  const handleSubmit = () => {
    if (!inputName || !inputEmail) {
      return;
    }
    setSubmited(true);
  };

  return (
    <div className="exercise02">
      <h2>Thông tin người dùng</h2>
      <input
        value={inputName}
        onChange={handleChange}
        name="username"
        type="text"
      />
      <br />
      <input
        value={inputEmail}
        onChange={handleChange}
        name="email"
        type="text"
      />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Gửi
      </button>

      {submited ? (
        <div>
          <p>Name: {inputName}</p>
          <p>Email: {inputEmail}</p>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
