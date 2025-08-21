import React, { Component } from "react";

type Account = {
  name: string;
  email: string;
  password: string;
  phone: string;
};

type SignIn = {
  email: string;
  password: string;
};

type StateTypes = {
  account: SignIn;
  error: string;
};

export default class Exercise08 extends Component<object, StateTypes> {
  constructor(props: object) {
    super(props);

    this.state = {
      account: {
        email: "",
        password: "",
      },
      error: "",
    };
  }
  render() {
    const accountList: Account[] = JSON.parse(
      localStorage.getItem("accountList") || "[]"
    );
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const { name, value } = e.target;

      this.setState({
        account: {
          ...this.state.account,
          [name]: value,
        },
      });
    };

    const { email, password } = this.state.account;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const handleSubmit = () => {
      if (password === "" || !regex.test(email)) {
        this.setState({
          error: "Dữ liệu không để trống!!",
        });
      } else {
        const targetAcc = accountList.find(
          (account: Account) => account.email === email
        );
        if (targetAcc) {
          // Đã tìm được tài khảon theo email
          // xét đến mật khẩu trùng hay k
          if (password !== targetAcc.password) {
            this.setState({
              error: "Mật khẩu không chính xác",
            });
          } else {
            this.setState({
              error: "",
            });
          }
        } else {
          this.setState({
            error: "Tài khoản không tồn tại",
          });
        }
      }
    };

    return (
      <div>
        {/* Form */}
        <div
          style={{
            marginTop: "10px",
            border: "1px solid #dadada",
            width: "fit-content",
            padding: "10px",
          }}
        >
          <h3>Đăng nhập tài khoản</h3>
          <form>
            {/* Gán value cho các input -> tiện change cũng như reset */}
            <div>
              <label
                style={{
                  fontWeight: "400",
                  color: "gray",
                  paddingBottom: "10px",
                }}
              >
                Email:{" "}
              </label>
              <br />
              <input
                value={email}
                onChange={handleChange}
                type="email"
                name="email"
              />
            </div>
            <div>
              <label
                style={{
                  fontWeight: "400",
                  color: "gray",
                  paddingBottom: "10px",
                }}
              >
                Mật khẩu:{" "}
              </label>
              <br />
              <input
                value={password}
                onChange={handleChange}
                type="text"
                name="password"
              />
            </div>
          </form>

          <div className="error" style={{ color: "red", fontSize: "12px" }}>
            {this.state.error}
          </div>
          <button
            onClick={handleSubmit}
            style={{ width: "100%", backgroundColor: "blue", color: "#fff" }}
          >
            Đăng nhập
          </button>
        </div>
      </div>
    );
  }
}
