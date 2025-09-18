import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Button } from "antd";

export default function Footer() {
  const listTodo = useSelector((state: RootState) => state);
  return (
    <div className="flex justify-between">
      <div>
        Số công việc hoàn thành:{" "}
        <b>{listTodo?.filter((item) => item.isDone === true).length}</b>
      </div>

      <div className="flex gap-2">
        <Button type="primary">Hoàn thành tất cả</Button>
        <Button color="danger" variant="outlined">
          Xóa tất cả
        </Button>
      </div>
    </div>
  );
}
