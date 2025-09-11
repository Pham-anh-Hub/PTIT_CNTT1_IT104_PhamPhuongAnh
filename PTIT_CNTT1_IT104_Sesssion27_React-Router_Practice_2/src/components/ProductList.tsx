import React, { useEffect, useState } from "react";
import { products, type IProducts } from "../data";
import { Link, useSearchParams } from "react-router-dom";
import { Button, Input } from "antd";

export default function ProductList() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [dataFilter, setDataFilter] = useState<IProducts[]>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  const handleInputSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setDataFilter([]);
    } else {
      setSearchValue(e.target.value);
    }
  };

  const handleSearchProduct = () => {
    if (searchValue) {
      setSearchParam({ search: searchValue }); // cập nhật searchParam
      setDataFilter(
        products.filter((product) => product.name.toLowerCase().includes(searchValue.toLowerCase().trim()))
      );
    } else {
      // nếu không nhập gì => reset lại list
      setSearchParam({});
      setDataFilter(products);
    }
    setSearchValue("")
  };

//   Đồng bộ khi url thay đổi & dữ liệu 
  useEffect(() => {
    const queryValue = searchParam.get("search");
    if (queryValue) {
      setDataFilter(
        products.filter((product) =>
          product.name.toLowerCase().includes(queryValue.toLowerCase().trim())
        )
      );
    } else {
      setDataFilter(products);
    }
  }, [searchParam]);

  return (
    <div>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#007BFF",
          color: "#fff",
          padding: "2rem",
        }}
      >
        <h2>Danh sách sản phẩm</h2>
      </div>
      <div
        style={{
          width: "40%",
          margin: "2rem auto",
          gap: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Input
          onChange={handleInputSearch}
          value={searchValue}
          placeholder="Nhập để tìm kiếm"
        />
        <Button onClick={handleSearchProduct} type="primary">
          Search
        </Button>
      </div>
      <div
        style={{
          margin: "2rem auto",
          width: "95%",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
        }}
      >
        <h1>Danh sách sản phẩm</h1>
        <div className="cards">
          {dataFilter ? (
            <>
              {dataFilter.map((product: IProducts, index: number) => (
                <div key={index} className="card">
                  <h3>{product.name}</h3>
                  <p>Giá: {product.price.toLocaleString()} VND</p>
                  <Link to={`/products/${product.id}`}>Xem chi tiết</Link>
                </div>
              ))}
            </>
          ) : (
            <>
              {products.map((product: IProducts, index: number) => (
                <div key={index} className="card">
                  <h3>{product.name}</h3>
                  <p>Giá: {product.price.toLocaleString()} VND</p>
                  <Link to={`/products/${product.id}`}>Xem chi tiết</Link>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
