import React, { useEffect } from "react";

export default function Exercise03() {
  useEffect(() => {
    console.log("Component đã được render lần đầu");
  });
  return (
    <div className="exercise03">
      <h1>Chào mừng đến với ứng dụng của chúng tôi</h1>
    </div>
  );
}
