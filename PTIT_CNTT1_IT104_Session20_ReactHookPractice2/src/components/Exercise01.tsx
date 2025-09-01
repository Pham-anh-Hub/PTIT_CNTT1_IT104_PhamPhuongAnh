import React, { useState } from "react";

export default function Exercise01() {
  const [showNotice, setShowNotice] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setShowNotice(false);
      return;
    }
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue) {
      if (inputValue.length >= 5) {
        setShowNotice(true);
      } else {
        setShowNotice(false);
      }
    }
  };

  return (
    <div className="exercise01">
      <h2>Kiểm tra chuỗi input nhập vào</h2>
      <form onSubmit={handleSubmit} action="">
        <input placeholder="Nhập vào đây" onChange={handleInput} type="text" />
      </form>
      {showNotice ? (
        <>
          <div className="notice">Chuỗi nhập vào dài hơn 5 ký tự</div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
