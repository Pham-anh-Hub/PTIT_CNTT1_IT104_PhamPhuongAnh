import React, { useState } from "react";

export default function Exercise01() {
  const [name] = useState<string>("Nguyễn Văn A");

  return (
    <div>
      <h2>Họ và tên: {name}</h2>
    </div>
  );
}
