import React, { useState } from "react";

export default function SelectInput() {
  const [option, setOption] = useState<string>("");
  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setOption(e.target.value);
  };
  return (
    <div>
      <p>
        Thành phố: <b>{option}</b>
      </p>
      <select onChange={handleSelect} name="" id="">
        <option selected value="">
          --Chọn Tỉnh/Thành phố--
        </option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Thái Bình">Thái Bình</option>
        <option value="Quảng Ninh">Quảng Ninh</option>
        <option value="Hải Phòng">Hải Phòng</option>
        <option value="Ninh Bình">Ninh Bình</option>
        <option value="TP Hồ Chí Minh">TP Hồ Chí Minh</option>
      </select>
    </div>
  );
}
