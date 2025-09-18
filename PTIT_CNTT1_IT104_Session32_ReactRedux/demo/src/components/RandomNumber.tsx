import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export default function RandomNumber() {
  const randomNumbers = useSelector((state: RootState) => state.randomNumber);

  const dispatch = useDispatch();
  const handleGetRandom = () => {
    dispatch({ type: "RANDOM" });
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h2>{JSON.stringify(randomNumbers)}</h2>
      <button onClick={handleGetRandom}>Generate Random Number</button>
    </div>
  );
}
