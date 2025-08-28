import React, { useState } from "react";

export default function FormValidate() {
  const [errorName, setErrorName] = useState<boolean>(false);
  const [errorEmail, setErrorEmail] = useState<boolean>(false);
  const [emailInputValue, setemailInputValue] = useState<string>("");
  const [nameInputValue, setNameInputValue] = useState<string>("");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("name", e.target.name, "value", e.target.value);
    if (e.target.name === "fullname") {
      setNameInputValue(e.target.value);
    } else if (e.target.name === "email") {
      setemailInputValue(e.target.value);
    }
  };

  const handleSubmitInfo = () => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!nameInputValue) {
      setErrorName(true);
    } else if (!regex.test(emailInputValue)) {
      setErrorEmail(true);
    } else {
      setErrorEmail(false);
      setErrorName(false);
      alert("Gửi thông tin thành công");
    }
  };

  return (
    <div className="Exercise04">
      <h2> 📝 Đăng ký thông tin</h2>
      <div>
        <label htmlFor="">Họ tên: </label>
        <br />
        <input
          value={nameInputValue}
          onChange={handleChangeInput}
          type="text"
          name="fullname"
        />
        {errorName ? (
          <>
            <p style={{ color: "red", fontSize: "12px" }}>
              ❗Trường này là bắt buộc
            </p>
          </>
        ) : (
          <></>
        )}
      </div>
      <div>
        <label htmlFor="">Email: </label>
        <br />
        <input
          value={emailInputValue}
          onChange={handleChangeInput}
          type="text"
          name="email"
        />
        {errorEmail ? (
          <>
            <p style={{ color: "red", fontSize: "12px" }}>
              ❗Email không hợp lệ
            </p>
          </>
        ) : (
          <></>
        )}
      </div>
      <button onClick={handleSubmitInfo} type="button">
        Gửi
      </button>
    </div>
  );
}
