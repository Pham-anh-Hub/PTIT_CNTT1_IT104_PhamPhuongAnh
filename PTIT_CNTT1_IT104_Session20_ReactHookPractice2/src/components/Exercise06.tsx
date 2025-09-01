import React, { useState } from "react";
import Model from "./Model";

export default function Exercise06() {
  const [showBtn, setShowBtn] = useState<boolean>(false);

  return (
    <div className="exercise06">
      <h2>Ứng dụng React với Model và Focus Input</h2>
      <button onClick={() => setShowBtn(true)}>Mở Model</button>
      {showBtn ? (
        <>
          <Model showModel={true} setShowModel={setShowBtn} />
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
