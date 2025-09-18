// import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export default function Counter() {
  // Lấy dữ liệu từ store
  const result = useSelector((state: RootState) => state.counter);

  // Hàm truyền action từ UI lên reducer
  const dispatch = useDispatch();
  const handleIncrease = () => {
    dispatch({ type: "INCREASE" });
  };
  const handleDecrease = () => {
    dispatch({ type: "DECREASE" });
  };
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Counter: {result}</h2>
      <div style={{display:"flex", justifyContent:"center", gap:10}}>
        <button onClick={handleIncrease}>Tăng</button>
        <button onClick={handleDecrease}>Giảm</button>
      </div>
    </div>
  );
}
