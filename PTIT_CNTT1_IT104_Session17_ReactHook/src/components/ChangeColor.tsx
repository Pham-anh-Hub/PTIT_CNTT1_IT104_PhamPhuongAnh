import React, { useState } from "react";

export default function ChangeColor() {
  const [theme, setTheme] = useState<boolean>(false);
  const changeColorTitle = () => {
    setTheme(!theme);
  };
  return (
    <div>
      <h2 style={{ color: theme ? "red" : "black" }}>Tiêu đề văn bản</h2>
      <button
        onClick={changeColorTitle}
        type="button"
        style={{
          padding: "10px",
          borderRadius: "6px",
          border: "1px solid gray",
          cursor: "pointer",
        }}
      >
        Thay đổi màu
      </button>
    </div>
  );
}
