import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useRedux";
import { changeLanguage } from "../redux/slices/language.slices";

export default function Language() {
  const { mode, text } = useAppSelector((state) => state.languageMode);
  const [langValue, setLangValue] = useState<string>(mode);
  const dispatch = useAppDispatch()
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setLangValue(e.target.value)
    dispatch(changeLanguage(langValue === "vi" ? "vi" : "en"))
  };

  return (
    <div>
      <h3>{text}</h3>
      {mode === "vi" ? (
        <>
          <select onChange={handleChange}>
            <option value="vi">Tiếng Việt</option>
            <option value="en">Tiếng Anh</option>
          </select>
        </>
      ) : (
        <>
          <select onChange={handleChange}>
            <option value="vi">Vietnamese</option>
            <option value="en">English</option>
          </select>
        </>
      )}
    </div>
  );
}
