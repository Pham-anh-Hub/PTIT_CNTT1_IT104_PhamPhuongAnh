import React, { useEffect, useRef, useState } from "react";
import "../App.css";

export default function RenderCounter() {
  const [inputValue, setInputValue] = useState<string>("");
  const renderCount = useRef<number>(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  /**
   * Cơ chế StrictMode khiến React render 2 lần ngay từ lần đầu
   * các component được mount vào DOM
   *  --> giúp phát hiện bug tiềm ẩn
   */
  useEffect(() => {
    // mỗi lần render thì tăng counter
    renderCount.current = renderCount.current + 1;
  });

  useEffect(() => {
    // chỉ chạy 1 lần khi mount để focus input
    inputRef.current?.focus();
  }, []);

  return (
    <div className="Exercise03">
      <h2>🔢 Component Render Counter</h2>
      <div>
        Input:{" \t"}
        <input
          ref={inputRef}
          value={inputValue}
          onChange={handleChange}
          type="text"
        />
      </div>
      <p>Component đã render: {renderCount.current} lần </p>
    </div>
  );
}
