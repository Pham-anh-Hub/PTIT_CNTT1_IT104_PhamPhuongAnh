import React, { Component } from "react";

type Student = {
  id: string;
  name: string;
  dOb: string;
  email: string;
  active: boolean;
};
type PropsType = {
  list: Student[];
};

export default class Board_Info extends Component<PropsType> {
  render() {
    const list = this.props.list;
    return (
      <div className="table-info">
        <table>
          <thead>
            <th>ID</th>
            <th>Mã sinh viên</th>
            <th>Tên sinh viên</th>
            <th>Ngày sinh </th>
            <th>Email</th>
            <th>Trạng thái</th>
            <th colSpan={3}>Chức năng</th>
          </thead>
          <tbody>
            {list.map((student: Student, index: number) => (
              <tr>
                <td>{index + 1}</td>
                <td>{student.id}</td>
                <td>{student.name}</td>
                <td>{student.dOb}</td>
                <td>{student.email}</td>
                <td>
                  <span className={student.active ? "active" : "inactive"}>
                    {student.active ? "Đang hoạt động" : "Ngừng hoạt động"}
                  </span>
                </td>
                <td className="button-action">
                  <button>Chặn</button>
                  <button>Sửa</button>
                  <button>Xóa</button>
                </td>
              </tr>
            ))}
            <tr></tr>
          </tbody>
        </table>
      </div>
    );
  }
}
