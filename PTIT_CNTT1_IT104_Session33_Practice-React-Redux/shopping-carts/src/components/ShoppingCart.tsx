import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/reducers/index.reducer";
import type { Cart } from "../redux/reducers/carts.reducers";
import { Modal } from "antd";

export default function ShoppingCart() {
  const listCart: Cart[] = useSelector((state: RootState) => state.carts);
  const [addSuccess, setAddSuccess] = useState<boolean>(false);
  const [deleteSuccess, setDeleteSuccess] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [targetDelete, setTargetDelete] = useState<Cart | undefined>(undefined);
  const dispatch = useDispatch();
  const countTotal = (): number => {
    const total = listCart.reduce((total, current) => {
      return total + current.purchase.price * current.quantity;
    }, 0);
    return total;
  };

  const handleDeleteCart = (id: number) => {
    const targetDelete = listCart.find((item) => item.purchase.id === id);
    if (targetDelete) {
      setIsModalOpen(true);
      setTargetDelete(targetDelete);
      console.log(targetDelete);
    }
  };

  const handleOkDelete = () => {
    setIsModalOpen(false);
    setDeleteSuccess(true);
    setAddSuccess(false);
    dispatch({ type: "DELETE", payload: targetDelete?.purchase });
  };
  const handleCancelDelete = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (deleteSuccess) {
      setTimeout(() => setDeleteSuccess(false), 1500);
    }
  }, [deleteSuccess]);

  useEffect(() => {
    if (addSuccess) {
      setTimeout(() => setAddSuccess(false), 1500);
    }
  }, [addSuccess]);

  return (
    <div>
      <div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-danger">
            <div className="panel-heading">
              <h1 className="panel-title">Your Cart</h1>
            </div>
            <div className="panel-body">
              <table className="table">
                <thead>
                  <tr>
                    <th style={{ width: "4%" }}>STT</th>
                    <th>Name</th>
                    <th style={{ width: "15%" }}>Price</th>
                    <th style={{ width: "4%" }}>Quantity</th>
                    <th style={{ width: "25%" }}>Action</th>
                  </tr>
                </thead>
                <tbody id="my-cart-body">
                  {listCart.map((item) => (
                    <tr>
                      <th scope="row">{item.purchase.id}</th>
                      <td>{item.purchase.name}</td>
                      <td>{item.purchase.price} USD</td>
                      <td>
                        <input
                          name="cart-item-quantity-1"
                          type="number"
                          value={item.quantity}
                        />
                      </td>
                      <td>
                        <button
                          className="label label-info update-cart-item"
                          data-product=""
                        >
                          Update
                        </button>
                        <button
                          onClick={() => handleDeleteCart(item.purchase.id)}
                          className="label label-danger delete-cart-item"
                          data-product=""
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot id="my-cart-footer">
                  <tr>
                    {listCart.length > 0 ? (
                      <>
                        <td colSpan={4}>
                          There are <b>{listCart.length}</b> items in your
                          shopping cart.
                        </td>
                      </>
                    ) : (
                      <>
                        <td colSpan={4}>
                          <b>Empty product in your cart</b>
                        </td>
                      </>
                    )}

                    <td colSpan={2} className="total-price text-left">
                      {countTotal()} USD
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          {addSuccess ? (
            <>
              <div
                className="alert alert-success"
                role="alert"
                id="mnotification"
              >
                Add to cart successfully
              </div>
            </>
          ) : deleteSuccess ? (
            <>
              <div
                className="alert alert-danger"
                role="alert"
                id="mnotification"
              >
                Delete cart successfully
              </div>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>

      {/* Modal xác nhận xóa */}

      <Modal
        title="Xác nhận"
        closable={true}
        open={isModalOpen}
        onOk={handleOkDelete}
        onCancel={handleCancelDelete}
      >
        <p>
          Bạn xác nhận xóa sản phẩm <b>{`<${targetDelete?.purchase.name}>`}</b>
        </p>
      </Modal>
    </div>
  );
}
