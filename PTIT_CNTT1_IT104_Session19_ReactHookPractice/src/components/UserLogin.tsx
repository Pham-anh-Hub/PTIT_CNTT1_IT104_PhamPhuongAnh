import React, { useState } from "react";

export default function UserLogin() {
  const [status, setStatus] = useState<string>("");
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
    if (!nameInputValue || !regex.test(emailInputValue)) {
      setStatus("error");
    } else {
      setStatus("loading");
      setTimeout(() => {
        setStatus("success");
      }, 5000);
    }
  };
  return (
    <div className="Exercise08">
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
        {status === "error" ? (
          <>
            <p style={{ color: "red", fontSize: "12px" }}>
              ❗Đăng nhập thất bại
            </p>
          </>
        ) : (
          <>
            {status === "loading" ? (
              <>
                <p style={{ color: "red", fontSize: "12px" }}>
                  🔃 Đang xác định
                </p>
              </>
            ) : (
              <>
                {status === "success" ? (
                  <>
                    <p style={{ color: "red", fontSize: "12px" }}>
                      ✅ Đăng nhập thành công
                    </p>
                  </>
                ) : (
                  <></>
                )}
              </>
            )}
          </>
        )}
      </div>
      <button onClick={handleSubmitInfo} type="button">
        Gửi
      </button>
    </div>
  );
}
