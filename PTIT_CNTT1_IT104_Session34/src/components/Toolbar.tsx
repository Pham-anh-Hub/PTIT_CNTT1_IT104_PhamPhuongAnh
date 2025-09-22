import { Button, TextField } from "@mui/material";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store/index.store";
import { message } from "antd";

interface ToolbarProps {
  onSearch: (keyword: string) => void;
}

const Toolbar: React.FC<ToolbarProps> = () => {
  const cloneListStudent = [
    ...useSelector((state: RootState) => state.students),
  ];
  const [keyword, setKeyword] = React.useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const dispatch = useDispatch();

  const onSearch = (keyword: string) => {
    const targetSeach = cloneListStudent.filter((student) =>
      student.name.toLowerCase().includes(keyword.toLowerCase().trim())
    );
    console.log(targetSeach.length);

    if (targetSeach.length > 0) {
      dispatch({ type: "SEARCH", payload: keyword });
    } else {
      messageApi.open({
        type: "warning",
        content: "Không có sinh viên nào được tìm thấy",
      });
      setKeyword("");
    }
  };
  const handleAdd = () => {
    console.log("resetform");
    dispatch({ type: "RESETFORM" });
  };

  const handleArrange = () => {
    dispatch({ type: "ARRANGE" });
    messageApi.open({
      type: "success",
      content: "Sắp xếp thành công",
    });
  };

  return (
    <>
      <div className="flex justify-between mb-4">
        <Button onClick={handleAdd} variant="contained" color="primary">
          Thêm mới sinh viên
        </Button>
        <div className="flex gap-2">
          <TextField
            size="small"
            placeholder="Search Here"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <Button variant="contained" onClick={() => onSearch(keyword)}>
            Tìm kiếm
          </Button>
          <Button onClick={handleArrange} variant="outlined">
            Sắp xếp
          </Button>
        </div>
      </div>
      {contextHolder}
    </>
  );
};

export default Toolbar;
