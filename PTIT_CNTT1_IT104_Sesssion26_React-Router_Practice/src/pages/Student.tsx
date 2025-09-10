import React, { useState } from "react";
import { Button, Input } from "antd";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Student() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [inputValue, setInputValue] = useState<string>("");

  // Nội dung bài 3
  const navigate = useNavigate();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSearch = () => {
    console.log(searchParam);

    setSearchParam({
      studentName: inputValue,
    });
    navigate(`/student/${inputValue}`);
    setInputValue("");
  };
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <Input
        value={inputValue}
        onChange={handleInput}
        placeholder="Nhập từ khóa tìm kiếm"
      />
      <Button onClick={handleSearch} type="primary">
        Search
      </Button>
    </div>
  );
}
