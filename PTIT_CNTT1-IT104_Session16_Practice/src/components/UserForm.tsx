import React, { Component } from "react";
import "../App.css";

type User = {
  fullname: string;
  email: string;
  age: number;
};
type StateType = {
  user: User;
  error?: string;
  inputValue?: string | number;
  isInform: boolean;
};

export default class UserForm extends Component<object, StateType> {
  constructor(props: object) {
    super(props);

    this.state = {
      user: {
        fullname: "",
        email: "",
        age: 0,
      },
      isInform: false,
    };
  }
  render() {
    const inputInfor = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const { name, value } = e.target;
      console.log(name, value);
      this.setState({
        user: {
          ...this.state.user,
          [name]: name === "age" ? Number(value) : value,
        },
      });
    };

    const { fullname, email, age } = this.state.user;

    const handleSubmit = () => {
      const emailTrue = email.includes("@");
      const ageTrue = age > 0;

      if (!fullname || !email || !age) {
        this.setState({ error: "Dữ liệu không được trống" });
      } else {
        if (!emailTrue) {
          this.setState({ error: "Email không hợp lệ" });
        } else if (!ageTrue) {
          this.setState({ error: "Tuổi không được âm" });
        } else {
          this.setState({
            user: {
              fullname: fullname,
              email: email,
              age: age,
            },
            isInform: true,
          });
        }
      }

      console.log(this.state.user);
    };

    const handleDeleteAll = () => {
      this.setState({ inputValue: "", isInform: false });
    };

    return (
      <div className="user-infor">
        <h2>🗒️ Nhập thông tin người dùng</h2>
        <form action="">
          <input
            value={this.state.inputValue}
            onChange={inputInfor}
            name="fullname"
            type="text"
            placeholder="Họ tên"
          />
          <br />
          <input
            value={this.state.inputValue}
            onChange={inputInfor}
            name="email"
            type="text"
            placeholder="Email"
          />
          <br />
          <input
            value={this.state.inputValue}
            onChange={inputInfor}
            name="age"
            type="text"
            placeholder="Tuổi"
          />
        </form>
        <div style={{ color: "red" }}>{this.state.error}</div>
        {this.state.isInform ? (
          <>
            <div className="information">
              <h2>Họ tên: {this.state.user.fullname}</h2>
              <h2>Email: {this.state.user.email}</h2>
              <h2>Age: {this.state.user.age}</h2>
            </div>
            <div className="btn-block">
              <button onClick={handleDeleteAll}>Xóa tất cả</button>
            </div>
          </>
        ) : (
          <>
            <div className="btn-block">
              <button onClick={handleSubmit}>Gửi</button>
              <button onClick={handleDeleteAll}>Xóa tất cả</button>
            </div>
          </>
        )}
      </div>
    );
  }
}
