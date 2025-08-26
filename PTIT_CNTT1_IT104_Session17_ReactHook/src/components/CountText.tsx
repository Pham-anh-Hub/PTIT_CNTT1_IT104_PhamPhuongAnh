import React, { useState } from "react";

export default function CountText() {
  const [textValue, setTextvalue] = useState<string>("");
  const [countText, setCountText] = useState<number>(0);

  const handleInputText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setTextvalue(value);
    const resultCount = value.split(" ").reduce((curr, value) => {
      return curr + value.length;
    }, 0);
    console.log(resultCount);

    setCountText(resultCount);
  };

  return (
    <div>
      <form action="">
        <textarea value={textValue} onChange={handleInputText}></textarea>
      </form>

      <p>Số ký tự: {countText}</p>
    </div>
  );
}
