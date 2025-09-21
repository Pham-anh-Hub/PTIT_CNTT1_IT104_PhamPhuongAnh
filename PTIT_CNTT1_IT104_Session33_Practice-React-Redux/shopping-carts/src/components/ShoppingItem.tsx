import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { Item } from "../redux/reducers/items.reducer";
import type { RootState } from "../redux/reducers/index.reducer";
import { message } from "antd";
import type { Cart } from "../redux/reducers/carts.reducers";

export default function ShoppingItem() {
  const itemList = useSelector((state: RootState) => state.items);
  const cartList = useSelector((state: RootState) => state.carts);
  const [messageApi, contextHolder] = message.useMessage();
  const dispatch = useDispatch();
  const handleAddToCart = (id: number) => {
    const targetPurchase = itemList.find((item) => item.id === id);
    const exitsInCart = cartList.find((item: Cart) => item.purchase.id === id);
    if (Number(targetPurchase?.quantity) > 0) {
      console.log(exitsInCart);
      dispatch({
        type: "ADDTOCART",
        payload: targetPurchase,
      });
    } else {
      messageApi.open({
        type: "warning",
        content: "Sản phẩm đã hết ",
      });
    }
  };
  return (
    <div>
      <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-primary">
            <div className="panel-heading">
              <h1 className="panel-title">List Products</h1>
            </div>
            <div className="panel-body" id="list-product">
              {itemList.map((item: Item) => (
                <div style={{ display: "flex" }} key={item.id}>
                  <div className="media product">
                    <div className="media-left">
                      <a href="">
                        <img src={item.image} alt={item.name} />
                      </a>
                    </div>
                    <div
                      style={{ alignItems: "center" }}
                      className="media-body"
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        <div
                          style={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                          }}
                        >
                          <h4 className="media-heading">{item.name}</h4>
                          <p>{item.discription}</p>
                        </div>
                        <div style={{ justifyContent: "space-between" }}>
                          <div
                            style={{
                              border: "2px solid #dede",
                              width: "fit-content",
                              padding: "2px 10px",
                              backgroundColor: "#fff",
                              marginBottom: "1rem",
                            }}
                          >
                            {item.quantity}
                          </div>
                          <button
                            onClick={() => handleAddToCart(item.id)}
                            className="price"
                          >
                            {" "}
                            {item.price} USD
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {contextHolder}
    </div>
  );
}
