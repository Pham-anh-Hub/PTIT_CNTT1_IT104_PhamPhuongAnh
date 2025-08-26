import React, { useState } from "react";

export default function Toggle() {
  const [btnStatus, setBtnStatus] = useState<boolean>(false);

  const changeBtnStatus = () => {
    setBtnStatus(!btnStatus);
  };

  return (
    <div>
      <button onClick={changeBtnStatus} type="button">
        {btnStatus ? "Ẩn" : "Hiện"}
      </button>
      {btnStatus ? <h1>Tiêu đề văn bản</h1> : <></>}
    </div>
  );
}
