import React, { useEffect, useState } from "react";
import "../App.css";

export default function KeyTracker() {
  const [currentKey, setCurrentKey] = useState<string>("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      console.log(e.key);
      setCurrentKey(e.key);
    };
    // window.addEventListener("keydown", handleKeyDown);

    // // cleanup: gỡ listener khi component unmount
    // return () => {
    //   window.removeEventListener("keydown", handleKeyDown);
    // };
  });

  return (
    <div className="Exercise06">
      <h2>⌨️ Phím bạn vừa nhấn</h2>
      <h1 className="keyValue">
        {"["}
        {currentKey.toLocaleUpperCase()}
        {"]"}
      </h1>
    </div>
  );
}
