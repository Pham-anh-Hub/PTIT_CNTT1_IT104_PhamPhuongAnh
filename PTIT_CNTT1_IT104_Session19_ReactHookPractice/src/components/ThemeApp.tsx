import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import "../App.css";

export default function ThemeApp() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return;
  }
  const { theme, toggleTheme } = themeContext;

  return (
    <div className="Exercise02">
      <div className={theme ? "light-theme" : "dark-theme"}>
        <h1>My theme App</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <p>Đây là phần nội dung chính của ứng dụng</p>
        <h4>Theme hiện tại: {theme ? "Light" : "Dark"}</h4>
      </div>
    </div>
  );
}
