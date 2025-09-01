import React, { useEffect, useRef } from "react";
import "../App.css";

type PropType = {
  showModel: boolean;
  setShowModel: React.Dispatch<React.SetStateAction<boolean>>; //
};

export default function Model({ showModel, setShowModel }: PropType) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [showModel]);
  return (
    <>
      {showModel ? (
        <>
          {" "}
          <div className="model">
            <div className="overlayModel"></div>
            <div className="main-model">
              <h1>Đăng nhập</h1>
              <input ref={inputRef} type="text" />
              <button onClick={() => setShowModel(false)}>Đóng</button>
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
