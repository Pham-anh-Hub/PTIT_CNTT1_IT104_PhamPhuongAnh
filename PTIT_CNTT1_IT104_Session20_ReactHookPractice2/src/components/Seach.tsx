import React, { useReducer, useState } from "react";

interface PhoneData {
  id: number;
  name: string;
  description: string;
}

export default function Seach() {
  const initialData: PhoneData[] = [
    {
      id: 1,
      name: "Apple iPhone 13",
      description: "Smartphone mới nhất của Apple",
    },
    {
      id: 2,
      name: "Samsung Galaxy S21",
      description: "Smartphone flagship của Samsung",
    },
    {
      id: 3,
      name: "OnePlus 9 Pro",
      description: "Smartphone hiệu suất cao từ OnePlus",
    },
    {
      id: 4,
      name: "Google Pixel 6",
      description: "Điện thoại thông minh của Google",
    },
    {
      id: 5,
      name: "Xiaomi Mi 11",
      description: "Điện thoại thông minh giá rẻ",
    },
  ];
  const reducer = (
    state: PhoneData[],
    action: { type: string; payload: string }
  ) => {
    switch (action.type) {
      case "INPUT":
        console.log(action.payload);

        if (action.payload.toLowerCase().trim() !== "") {
          // Lọc trên dữ liệu gốc thay vì lọc qua chính state --> dẫn đến state bị thay đổi
          return initialData.filter(
            (phone: PhoneData) =>
              phone.name
                .toLowerCase()
                .includes(action.payload.toLowerCase().trim()) ||
              phone.description
                .toLowerCase()
                .trim()
                .includes(action.payload.toLowerCase().trim())
          );
        } else {
          return initialData;
        }
      default:
        return initialData;
    }
  };
  const [inputValue, setInputValue] = useState<string>("");

  const [state, dispatch] = useReducer(reducer, initialData);
  console.log(state);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({ type: "INPUT", payload: inputValue });
  };

  return (
    <div className="exercise09">
      <div className="header">
        <h2>Thông tin sản phẩm</h2>
        <form onSubmit={handleSubmit} action="">
          <input
            onChange={handleChange}
            type="text"
            placeholder="Nhập từ khóa tìm kiếm"
          />
        </form>
      </div>
      <div className="display-result">
        {state.length !== 0 ? (
          <>
            {state.map((product: PhoneData) => (
              <div key={product.id} className="detail">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            ))}
          </>
        ) : (
          <>
            <div className="empty">Không có kết quả tìm</div>
          </>
        )}
      </div>
    </div>
  );
}
