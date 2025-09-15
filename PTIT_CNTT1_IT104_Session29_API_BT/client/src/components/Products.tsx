import axios from "axios";
import { useEffect } from "react";

export default function Products() {
  //  Bài 1 + Bài 2
  // Gọi API lấy dữ liệu
  const getAllProduct = () => {
    axios
      .get("http://localhost:8080/products")
      .then((response) => {
        console.log("Danh sách sản phẩm: ", response.data);
      })
      .catch((error) => console.error(error));
  };
  useEffect(() => {
    getAllProduct();
  }, [])

  return (
    <div>
      <h2>Products</h2>
    </div>
  );
}
