import React, { useState } from "react";

export default function Form() {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input
        onChange={handleInput}
        value={inputValue}
        type="text"
        placeholder="Nhập văn bản"
      />
      <p>{inputValue}</p>
    </div>
  );
}
