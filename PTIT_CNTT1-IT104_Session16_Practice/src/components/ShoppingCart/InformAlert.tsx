import React, { Component } from "react";
import { AiFillExclamationCircle } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type PropState = {
  confirmRemove: (id: string) => void;
  targetRemove: { product: Product; quantity: number };
};

export default class InformAlert extends Component<PropState> {
  constructor(props: PropState) {
    super(props);
  }
  render() {
    return (
      <div>
        <>
          <div>
            <div>
              <h2>Xác nhận </h2>
              <AiOutlineClose />
            </div>
            <h2>
              <AiFillExclamationCircle /> Bạn có chắc chắn xóa sản phẩm{" "}
              {this.props.targetRemove.product.name}
            </h2>
            <div>
              <button
                onClick={() =>
                  this.props.confirmRemove(this.props.targetRemove.product.id)
                }
                type="button"
              >
                Xác nhận
              </button>
              <button type="button">Hủy</button>
            </div>
          </div>
        </>
      </div>
    );
  }
}
