import React from "react";
import { Button, Table } from "react-bootstrap";

export default function Exercise09() {
  const data = [
    {
      STT: 1,
      fullname: "Nguyễn Văn A",
      gender: "Nam",
      dOb: "01/01/1990",
      email: "nguyenvana@example.com",
      address: "Hà Nội",
    },
    {
      STT: 2,
      fullname: "Trần Thị B",
      gender: "Nữ",
      dOb: "02/02/1995",
      email: "tranthib@example.com",
      address: "TP. Hồ Chí Minh",
    },
    {
      STT: 3,
      fullname: "Phạm Văn C",
      gender: "Nam",
      dOb: "03/03/1992",
      email: "phamvanc@example.com",
      address: "Đà Nẵng",
    },
    {
      STT: 4,
      fullname: "Lê Thị D",
      gender: "Nữ",
      dOb: "04/04/1993",
      email: "lethid@example.com",
      address: "Hải Phòng",
    },
    {
      STT: 5,
      fullname: "Nguyễn Văn E",
      gender: "Nam",
      dOb: "05/05/1991",
      email: "nguyenvane@example.com",
      address: "Cần Thơ",
    },
  ];

  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Giới tính</th>
            <th>Ngày sinh</th>
            <th>Email</th>
            <th>Địa chỉ</th>
            <th colSpan={2}>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.STT}</td>
              <td>{item.fullname}</td>
              <td>{item.gender}</td>
              <td>{item.dOb}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>
                <Button variant="warning">Sửa</Button>
              </td>
              <td>
                <Button variant="danger">Xóa</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
