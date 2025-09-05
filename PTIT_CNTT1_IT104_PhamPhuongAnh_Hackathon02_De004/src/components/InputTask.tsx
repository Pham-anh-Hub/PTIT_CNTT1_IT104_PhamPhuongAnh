import { Button, Input } from "antd";
import React, { useState } from "react";
import { v6 as uuid } from "uuid";

interface BookType {
  id: string;
  name: string;
}

type PropType = {
  addNewBook: (book: BookType) => void;
};

export default function InputTask({ addNewBook }: PropType) {
  const [inputValue, setInputValue] = useState<string>("");
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue) {
      const newBook: BookType = {
        id: uuid(),
        name: inputValue,
      };
      console.log(newBook);
      addNewBook(newBook);
      setInputValue("");
    }
  };

  return (
    <form
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      onSubmit={handleSubmit}
      action=""
    >
      <div
        style={{
          gap: "8px",
          width: "70%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Input
          value={inputValue}
          onChange={handleChangeInput}
          placeholder="Nhập tiêu đề sách"
        />
        <Button onClick={handleSubmit} variant="solid" color="primary">
          + Thêm sách
        </Button>
      </div>
    </form>
  );
}
