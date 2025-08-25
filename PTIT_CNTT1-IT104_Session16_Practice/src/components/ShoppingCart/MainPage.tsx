import React, { Component } from "react";
import Header from "./Header";
import DisplayProduct from "./DisplayProduct";
import InformAlert from "./InformAlert";

type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
};

type StateType = {
  productList: Product[];
  cartList: { product: Product; quantity: number }[];
  error: string;
  isShowConfirm: boolean;
};

export default class MainPage extends Component<object, StateType> {
  targetRemove: { product: Product; quantity: number } = {
    product: {
      id: "",
      name: "",
      image: "",
      price: 0,
      quantity: 0,
    },
    quantity: 0,
  };
  constructor(props: object) {
    super(props);

    this.state = {
      productList: [
        {
          id: "MSP01",
          name: "Điện thoại Samsung Galaxy",
          image:
            "https://cdn.xtmobile.vn/vnt_upload/product/07_2024/thumbs/600_Samsung_galaxy_z_flip_6_256gb_mau_xanh_xtmobile.jpg",
          price: 20000000,
          quantity: 25,
        },
        {
          id: "MSP02",
          name: "Điện thoại Iphone14 Promax",
          image:
            "https://minhtuanmobile.com/uploads/products/220908114431-iphone-14-pro-max-128gb.jpg",
          price: 20500000,
          quantity: 25,
        },
        {
          id: "MSP03",
          name: "Điện thoại Samsung Galaxy",
          image:
            "https://www.duchuymobile.com/images/detailed/68/samsung-galaxy-a55-5g-xanh.jpg",
          price: 21000000,
          quantity: 25,
        },
        {
          id: "MSP04",
          name: "Điện thoại iPhone11 Promax",
          image:
            "https://cdn2.fptshop.com.vn/unsafe/828x0/filters:format(webp):quality(75)/2020_6_24_637285878676736680_iphone%2011%20pro%20max%20-1.jpg",
          price: 21500000,
          quantity: 25,
        },
        {
          id: "MSP05",
          name: "Điện thoại Samsung Galaxy",
          image:
            "https://didongmoi.com.vn/upload/images/product/samsung/samsung-galaxy-a06(2).jpg",
          price: 22000000,
          quantity: 25,
        },
        {
          id: "MSP06",
          name: "Điện thoại Samsung Galaxy",
          image:
            "https://clickbuy.com.vn/uploads/product-variant/samsung-galaxy-z-fold5-12gb-256gb-chinh-hang-blue-192549-1997.png",
          price: 22500000,
          quantity: 25,
        },
        {
          id: "MSP07",
          name: "Điện thoại Oppo A9",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/202028/oppo-a9-600x600-trang-600x600.jpg",
          price: 23000000,
          quantity: 30,
        },
        {
          id: "MSP08",
          name: "Điện thoại Oppo V5",
          image:
            "https://tivichinhhang.com/wp-content/uploads/2018/03/Dien-thoai-oppo-V5.jpg",
          price: 23500000,
          quantity: 30,
        },
        // ----------------- Thêm 5 bản ghi mới -----------------
        {
          id: "MSP09",
          name: "Điện thoại Xiaomi Mi 11",
          image:
            "https://cdn.tgdd.vn/Products/Images/42/233241/xiaomi-mi-11-lite-4g-blue-600x600.jpg",
          price: 18000000,
          quantity: 30,
        },
        {
          id: "MSP010",
          name: "Điện thoại Vivo V21",
          image:
            "https://www.duchuymobile.com/images/detailed/42/vivo-v21_4hkm-a4.jpg",
          price: 17500000,
          quantity: 30,
        },
        {
          id: "MSP011",
          name: "Điện thoại Realme 8 Pro",
          image:
            "https://cdn11.dienmaycholon.vn/filewebdmclnew/DMCL21/Picture/Apro/Apro_product_26475/8-pro8gb128gb-x_main_916_450.png.webp",
          price: 16500000,
          quantity: 30,
        },
        {
          id: "MSP012",
          name: "Điện thoại OnePlus 9",
          image:
            "https://cdn2.cellphones.com.vn/x/media/catalog/product/o/n/oneplus-9.jpg",
          price: 19500000,
          quantity: 30,
        },
        {
          id: "MSP013",
          name: "Điện thoại Asus ROG Phone 5",
          image:
            "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/s/asus-rog-phone-5-12_2.jpg",
          price: 25000000,
          quantity: 20,
        },
      ],
      cartList: [],
      error: "",
      isShowConfirm: false,
    };
  }
  render() {
    const addToCart = (id: string) => {
      const targetProduct = this.state.productList.find(
        (product: Product) => product.id === id
      );
      if (targetProduct) {
        console.log(targetProduct);
        // Kiểm tra món này đã có trong giỏ hàng chưa
        const existed = this.state.cartList.find(
          (item) => item.product.id === targetProduct.id
        );
        if (existed) {
          if (targetProduct.quantity > 0) {
            this.setState({
              cartList: this.state.cartList.map((item) =>
                item.product.id === targetProduct.id
                  ? // Sẽ vừa duyêth và vừa add thêm số lượng món đồ đó trong giỏ
                    { ...item, quantity: item.quantity + 1 }
                  : item
              ),
              //Mặt khác, trừ đi số lượng sản phẩm đó trong danh sách tống
              productList: this.state.productList.map((product: Product) =>
                product.id === targetProduct.id
                  ? { ...product, quantity: product.quantity - 1 }
                  : product
              ),
            });
          } else {
            const updateList = this.state.productList.filter(
              (product) => product.id !== targetProduct.id
            );
            this.setState({
              productList: updateList,
            });
          }
        } else {
          // Nếu chưa exist
          this.setState({
            cartList: [
              ...this.state.cartList,
              { product: targetProduct, quantity: 1 },
            ],
            productList: this.state.productList.map((product: Product) =>
              product.id === targetProduct.id
                ? { ...product, quantity: product.quantity - 1 }
                : product
            ),
          });
          console.log(this.state.cartList);
        }
      }
    };

    const increaseDetail = (id: string) => {
      // tìm sản phầm đó trong giỏ hàng

      // Tìm sản phẩm đó trong danh sách
      const targetPurchase = this.state.productList.find(
        (product) => product.id === id
      );

      if (targetPurchase) {
        if (targetPurchase.quantity > 0) {
          this.setState({
            cartList: this.state.cartList.map((item) =>
              item.product.id === targetPurchase.id
                ? // Sẽ vừa duyêth và vừa add thêm số lượng món đồ đó trong giỏ
                  { ...item, quantity: item.quantity + 1 }
                : item
            ),
            //Mặt khác, trừ đi số lượng sản phẩm đó trong danh sách tống
            productList: this.state.productList.map((product: Product) =>
              product.id === targetPurchase.id
                ? { ...product, quantity: product.quantity - 1 }
                : product
            ),
            error: "",
          });
        } else {
          this.setState({ error: "Số lượng sản phẩm đã đạt tối đa" });
        }
      }
    };

    const decreaseDetail = (id: string) => {
      // tìm sản phầm đó trong giỏ hàng
      const targetCart = this.state.cartList.find(
        (item) => item.product.id === id
      );
      const targetPurchase = this.state.productList.find(
        (product) => product.id === id
      );

      if (targetCart && targetPurchase) {
        // const preQuantity: number = targetPurchase?.quantity;
        if (targetCart.quantity > 1) {
          this.setState({
            cartList: this.state.cartList.map((item) =>
              item.product.id === targetCart.product.id
                ? // Sẽ vừa duyêth và vừa trừ đi 1 số lượng món đồ đó trong giỏ
                  { ...item, quantity: item.quantity - 1 }
                : item
            ),
            //Mặt khác, trừ đi số lượng sản phẩm đó trong danh sách tống
            productList: this.state.productList.map((product: Product) =>
              product.id === targetCart.product.id
                ? { ...product, quantity: product.quantity + 1 }
                : product
            ),
            error: "",
          });
        } else {
          this.setState({
            isShowConfirm: true,
          });
        }
      }
    };

    const calculateTotalCart = (): number => {
      const totalResult = this.state.cartList.reduce(
        (current: number, item) => {
          return current + item.product.price * item.quantity;
        },
        0
      );
      return totalResult;
    };

    const handleDeleteCart = (id: string) => {
      const target = this.state.cartList.find((item) => item.product.id === id);
      console.log(target);

      if (target) {
        this.targetRemove = target;
        this.setState({
          isShowConfirm: true,
        });
      }
    };

    const confirmRemove = (id: string) => {
      const updateList = this.state.cartList.filter(
        (item) => item.product.id !== id
      );
      this.setState({
        cartList: updateList,
      });
    };
    return (
      <div>
        <Header
          cartList={this.state.cartList}
          increaseDetail={increaseDetail}
          decreaseDetail={decreaseDetail}
          calculateTotalCart={calculateTotalCart}
          handleDeleteCart={handleDeleteCart}
          error={this.state.error}
        />
        <DisplayProduct
          productList={this.state.productList}
          // targetPurchase={this.targetPurchase}
          addProduct={addToCart}
        />
        {this.state.isShowConfirm ? (
          <>
            <InformAlert
              targetRemove={this.targetRemove}
              confirmRemove={confirmRemove}
            />
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }
}
