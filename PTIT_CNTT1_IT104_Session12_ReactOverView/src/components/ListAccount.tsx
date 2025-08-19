import React from "react";
import "../component_css/accountList.css";

class Account {
  fullname: string;
  dOb: string;
  gender: string;
  address: string;
  constructor(fullname: string, dOb: string, gender: string, address: string) {
    this.fullname = fullname;
    this.dOb = dOb;
    this.gender = gender;
    this.address = address;
  }
}

const ListAccount = () => {
  const accountList: Account[] = [
    new Account("Nguyễn Văn A", "22/02/2020", "Nam", "Hà Đông, Hà Nội"),
    new Account("Nguyễn Văn B", "10/03/2020", "Nam", "Hà Đông, Hà Nội"),
    new Account("Nguyễn Thị C", "12/02/2020", "Nữ", "Thanh Xuân, Hà Nội"),
    new Account("Nguyễn Văn D", "20/09/2020", "Nam", "Hà Đông, Hà Nội"),
  ];
  return (
    <>
      <table>
        <thead>
          <th>STT</th>
          <th>Họ và tên</th>
          <th>Ngày sinh</th>
          <th>Giới tính</th>
          <th>Địa chỉ</th>
          <th style={{ colSpan: 2 }}>Hành động</th>
        </thead>
        <tbody>
          {accountList &&
            accountList.map((account: Account, index: number) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{account.fullname}</td>
                  <td>{account.dOb}</td>
                  <td>{account.gender}</td>
                  <td>{account.address}</td>
                  <td>
                    <button className="edit-btn">Sửa</button>
                  </td>
                  <td>
                    <button className="del-btn">Xóa</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};

export default ListAccount;
