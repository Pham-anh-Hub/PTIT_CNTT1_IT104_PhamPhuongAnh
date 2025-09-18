import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Button } from "antd";
import { Priority } from "../redux/reducers/todo.reducers";

export default function ListTodo() {
  const listTodo = useSelector((state: RootState) => state);
  return (
    <div className="flex flex-col gap-2">
      {listTodo?.map((item) => (
        <div
          style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px", padding: 8 }}
          className="flex justify-between items-center border-1 border-gray-200 rounded-md"
        >
          <div className="flex gap-2.5 items-center">
            <input className="w-4 h-4" type="checkbox" name="" />
            <p>{item.title}</p>
            <span className={item.levelPriority}>{Priority[(item.levelPriority)]}</span>
          </div>
          <div className="flex gap-2">
            <Button
              style={{
                color: "#E08B36",
                borderColor: "#E08B36",
                backgroundColor: "#FFF7E6",
              }}
            >
              {" "}
              Sửa
            </Button>
            <Button
              style={{
                color: "#E1685A",
                borderColor: "#E1685A",
                backgroundColor: "#FFF1F0",
              }}
            >
              Xóa
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
