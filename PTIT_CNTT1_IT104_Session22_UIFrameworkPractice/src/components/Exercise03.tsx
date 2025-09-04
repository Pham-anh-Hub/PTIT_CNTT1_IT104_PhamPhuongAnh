import React from "react";
import { Button, Card } from "react-bootstrap";

export default function Exercise03() {
  return (
    <div style={{ display: "flex", gap: "12px" }}>
      <Card style={{ width: "18rem", textAlign: "center", margin: "10px" }}>
        <Card.Img
          variant="top"
          src="https://surfaceviet.vn/wp-content/uploads/2024/05/Surface-Laptop-7-Black-13.8-inch.jpg"
        />
        <Card.Body>
          <Card.Title>Surface Laptop</Card.Title>
          <Card.Text style={{ fontSize: "12px" }}>
            Chỉ sau đúng 2 tháng kể từ khi ra mắt Surface Laptop 6, Microsoft đã
            bất ngờ giới thiệu với giới công nghệ thế hệ laptop mới nhất của
            mình với tên gọi là Surface Laptop 7 (hay còn gọi là Copilot Plus
            Surface Laptop 7).
          </Card.Text>
          <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
            <Button variant="primary">Xem chi tiết</Button>
            <span>{(60090000).toLocaleString()} đ</span>
          </div>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem", textAlign: "center", margin: "10px" }}>
        <Card.Img
          variant="top"
          src="https://cdn2.cellphones.com.vn/x/media/catalog/product/m/b/mbp13touch-silver-gallery2-20180_2.jpg"
        />
        <Card.Body style={{ position: "relative" }}>
          <Card.Title>Macbook Pro 2019</Card.Title>
          <Card.Text style={{ fontSize: "12px" }}>
            Macbook Pro 2019 13 inch 128GB cũ đẹp - Giá tốt. Khuyến mãi khủng
            Thương hiệu: Apple
          </Card.Text>
          <div
            style={{
              display: "flex",
              gap: "5px",
              alignItems: "center",
              justifyContent: "space-between",
              position: "absolute",
              bottom: "15px",
            }}
          >
            <Button variant="primary">Xem chi tiết</Button>
            <span>{(13690000).toLocaleString()} đ</span>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
