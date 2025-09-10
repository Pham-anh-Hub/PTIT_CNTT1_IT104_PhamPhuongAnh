import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function ListProduct() {
  const navigate = useNavigate();
  // const products: Product[] = [
  //   {
  //     id: 1,
  //     name: "Điện thoại Iphone 15 Pro",
  //     price: 30000000,
  //     image:
  //       "https://product.hstatic.net/200000845283/product/_iphone_15_pro_blue_titanium_pdp_image_position-1a_blue_titanium_color_27e88c8404de4df3b4a77bb5fcafb9c9.jpg",
  //   },
  //   {
  //     id: 2,
  //     name: "Điện thoại Oppo Reno11 5G",
  //     price: 10600000,
  //     image:
  //       "https://cdn2.cellphones.com.vn/x/media/catalog/product/o/p/opporeno11_1.png",
  //   },
  //   {
  //     id: 3,
  //     name: "Điện thoại vivo Y71s",
  //     price: 3300000,
  //     image:
  //       "https://cdn2.fptshop.com.vn/unsafe/tecno_spark_30_xanh_4_4754b17e03.jpg",
  //   },
  //   {
  //     id: 4,
  //     name: "Điện thoại Nokia 8210 4G",
  //     price: 3300000,
  //     image:
  //       "https://cdn2.cellphones.com.vn/x/media/catalog/product/n/o/nokia-8210-4g-red-1_1.jpg",
  //   },
  // ];
  // localStorage.setItem("phoneList", JSON.stringify(products))
  const [products, _setProducts] = useState<Product[]>(() => {
    const cloneList = localStorage.getItem("phoneList");
    return cloneList ? JSON.parse(cloneList) : [];
  });
  const [searchPhone, setSearchPhone] = useState<Product | undefined>(
    undefined
  );
  const [inputSearch, setInputSearch] = useState<string>("");
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputSearch(e.target.value);
  };
  const handleSearch = () => {
    const targetProduct = products.find((product) =>
      product.name.includes(inputSearch)
    );
    if (targetProduct) {
      setSearchPhone(targetProduct);
    }
  };

  useEffect(() => {
    if (!inputSearch) {
      setSearchPhone(undefined);
    }
  }, [inputSearch]);

  return (
    <div style={{ width: "100%" }}>
      <h1>List Product</h1>
      <div
        style={{
          width: "40%",
          display: "flex",
          justifyContent: "center",
          alignItems: "end",
          gap: "12px",
        }}
      >
        <Input onChange={handleInput} placeholder="Tìm kiếm theo tên" />
        <Button onClick={handleSearch} type="primary">
          Tìm kiếm
        </Button>
      </div>
      <div className="cards">
        {searchPhone ? (
          <>
            <div
              style={{
                width: "fit-content",
                display: "flex",
                alignItems: "center",
              }}
              className="card-product"
            >
              <img style={{ width: "45%" }} src={searchPhone.image} alt="" />
              <div style={{ width: "45%" }}>
                <p style={{ fontSize: "20px", color: "#000" }}>
                  {searchPhone.name}
                </p>
                <p>{searchPhone.price.toLocaleString()} VND</p>
                <Button
                  onClick={() => {
                    navigate(`/product-detail/${searchPhone.id}`);
                  }}
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignSelf: "center",
                    width: "45%",
                  }}
                  type="primary"
                >
                  Xem chi tiết
                </Button>
              </div>
            </div>
          </>
        ) : (
          <>
            {products.map((product: Product, index: number) => (
              <>
                <div key={index} className="card-product">
                  <img src={product.image} alt="" />
                  <div>
                    <p style={{ fontSize: "20px", color: "#000" }}>
                      {product.name}
                    </p>
                    <p>{product.price.toLocaleString()} VND</p>
                    <Button
                      onClick={() => {
                        navigate(`/product-detail/${product.id}`);
                      }}
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignSelf: "center",
                        width: "80%",
                      }}
                      type="primary"
                    >
                      Xem chi tiết
                    </Button>
                  </div>
                </div>
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
}
