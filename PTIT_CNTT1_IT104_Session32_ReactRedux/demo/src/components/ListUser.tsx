import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import type { UserType } from "../redux/reducers/listUser.reducers";

export default function ListUser() {
  const resultList = useSelector((state: RootState) => state.listUser);
  return (
    <div>
      <table border={1} style={{borderCollapse:"collapse"}}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Địa chỉ</th>
            <th colSpan={2}>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {resultList.map((item: UserType) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.userName}</td>
              <td>{item.gender}</td>
              <td>{item.dateBirth}</td>
              <td>{item.address}</td>
              <td><button>Sửa</button></td>
              <td><button>Xóa</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
