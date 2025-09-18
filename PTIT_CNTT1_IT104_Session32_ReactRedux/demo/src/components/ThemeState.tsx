import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";

export default function ThemeState() {
  const stateTheme = useSelector((state: RootState) => state.changeTheme);
  const dispatch = useDispatch();
  const handleToggleTheme = () => {
    dispatch({ type: "CHANGETHEME" });
  };
  return (
    <div>
      <div
        style={
          stateTheme === "light"
            ? {
                backgroundColor: "white",
                width: "100%",
                height: "20vh",
                padding: 10,
                border: "1px solid transparent",
              }
            : {
                backgroundColor: "black",
                width: "100%",
                height: "20vh",
                padding: 10,
                border: "1px solid transparent",
              }
        }
      >
        <input
          onChange={handleToggleTheme}
          checked={stateTheme === "dark" ? true : false}
          type="checkbox"
        />
        {stateTheme === "dark" ? (
          <p style={{ color: "#fff" }}>Tối</p>
        ) : (
          <p>Sáng</p>
        )}
      </div>
    </div>
  );
}
