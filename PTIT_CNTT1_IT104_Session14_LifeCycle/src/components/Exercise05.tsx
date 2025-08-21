import React, { Component } from "react";

import "../App.css";

type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

type StateType = {
  products: Product;
  isEmpty: boolean;
};

export default class Exercise05 extends Component<object, StateType> {
  constructor(props: object) {
    super(props);
    this.state = {
      products: {
        id: "",
        name: "",
        price: 0,
        quantity: 0,
      },
      isEmpty: true,
    };
  }
  render() {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      const { name, value } = e.target;

      this.setState({
        products: {
          ...this.state.products,
          [name]:
            name === "price" || name === "quantity" ? Number(value) : value,
        },
      });
    };

    const { id, name, price, quantity } = this.state.products;
    const handleSubmit = () => {
      if (!id || !name || !price || !quantity) {
        this.setState({
          isEmpty: true,
        });
      } else {
        this.setState({
          isEmpty: false,
        });
      }

      const newProduct = this.state.products;
      console.log(newProduct);
      this.setState({
        products: {
          id: "",
          name: "",
          price: 0,
          quantity: 0,
        },
      });
    };
    return (
      <>
        {/* Form */}
        <div
          style={{
            marginTop: "10px",
            border: "1px solid #dadada",
            width: "fit-content",
            padding: "10px",
          }}
        >
          <h3>Thêm mới sản phẩm</h3>
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
                Mã sản phẩm:{" "}
              </label>
              <br />
              <input value={id} onChange={handleChange} type="text" name="id" />
            </div>
            <div>
              <label
                style={{
                  fontWeight: "400",
                  color: "gray",
                  paddingBottom: "10px",
                }}
              >
                Tên sản phẩm:{" "}
              </label>
              <br />
              <input
                value={name}
                onChange={handleChange}
                type="text"
                name="name"
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
                Giá sản phẩm:{" "}
              </label>
              <br />
              <input
                value={price}
                onChange={handleChange}
                type="text"
                name="price"
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
                Số lượng sản phẩm:{" "}
              </label>
              <br />
              <input
                value={quantity}
                onChange={handleChange}
                type="number"
                name="quantity"
              />
            </div>
          </form>

          <div style={{ color: "red", display: "none" }}>
            {this.state.isEmpty ? "Dữ liệu không được để trống" : ""}
          </div>
          <button
            onClick={handleSubmit}
            style={{ width: "100%", backgroundColor: "blue", color: "#fff" }}
          >
            Thêm mới
          </button>
        </div>
      </>
    );
  }
}
