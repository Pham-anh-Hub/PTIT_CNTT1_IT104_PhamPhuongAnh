import React, { Component } from "react";

export default class Filter extends Component {
  render() {
    return (
      <div className="filter">
        <div>
          <select name="" id="">
            <option selected value="">
              Sắp xếp theo
            </option>
            <option value="">Tuổi</option>
            <option value="">Trạng thái hoạt động</option>
          </select>
        </div>
        <input type="text" placeholder="Tìm kiếm từ khóa theo tên hoặc email" />
      </div>
    );
  }
}
