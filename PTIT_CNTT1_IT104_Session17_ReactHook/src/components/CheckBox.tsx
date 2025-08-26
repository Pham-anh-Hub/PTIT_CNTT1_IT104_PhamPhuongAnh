import React, { useState } from "react";

export default function CheckBox() {
  const [hobbyList, setHobbyList] = useState<string[]>([]);

  const handleChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target; // Destructuring để lấy ra 2 thuộc tính của input là value và checked
    if (checked) {
      const existed = hobbyList.includes(value);
      if (!existed) {
        const updateList = [...hobbyList, String(e.target.value)];
        console.log(updateList);
        setHobbyList(updateList);
      }
    } else {
      const updateList = hobbyList.filter((hobby: string) => hobby !== value);
      setHobbyList(updateList);
    }
  };
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div>
        Sở thích:{" "}
        {hobbyList.map((hobby: string, index: number) => {
          return <span key={index}>{hobby}, </span>;
        })}
      </div>
      <div>
        <input onChange={handleChecked} type="checkbox" value="Nấu ăn" />
        <label> Nấu ăn</label>
      </div>
      <div>
        <input onChange={handleChecked} type="checkbox" value="Code" />
        <label> Code</label>
      </div>
      <div>
        <input onChange={handleChecked} type="checkbox" value="Chạy bộ" />
        <label> Chạy bộ</label>
      </div>
      <div>
        <input onChange={handleChecked} type="checkbox" value="Dọn nhà" />
        <label> Dọn nhà</label>
      </div>
      <div>
        <input onChange={handleChecked} type="checkbox" value="Đi chơi" />
        <label> Đi chơi</label>
      </div>
    </div>
  );
}
