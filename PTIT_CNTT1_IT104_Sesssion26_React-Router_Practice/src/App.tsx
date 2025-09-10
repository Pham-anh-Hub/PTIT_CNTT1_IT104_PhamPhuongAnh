import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ProductDetail from "./pages/ProductDetail";
import StudentDetail from "./pages/StudentDetail";
import Student from "./pages/Student";
import Home from "./pages/Home";
import PrivateRoute from "./pages/PrivateRoute";
import Account from "./pages/Account";
import Login from "./pages/Login";
import TeamsIndex from "./pages/TeamsIndex";
import Team from "./pages/Team";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Post from "./pages/Post";
import Header from "./pages/Header";
import ListProduct from "./pages/ListProduct";
import ProductInfoDetail from "./pages/ProductInfoDetail";

// import theo lazy
const LazyLoad = React.lazy(() => import("../src/pages/LazyLoadComp"));

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/student/:name" element={<StudentDetail />} />

        {/*  */}
        <Route path="/student" element={<Student />} />

        {/* Bài 5 + 6 - bảo vệ Route và điều hướng đăng nhập */}
        <Route element={<PrivateRoute />}>
          <Route path="/account" element={<Account />} />
        </Route>
        <Route path="/login" element={<Login />} />

        {/* Bài 7 - Tìm hiểu prop index */}
        <Route
          path="/teams"
          children={[
            // Route con có index = true, được chỉ định được hiển thị trong tp cha
            <Route index={true} element={<TeamsIndex />} />,
            <Route path=":teamId" element={<Team />} />,
          ]}
        />

        {/* Bài 8 - ứng dụng lazyloading */}
        <Route
          path="lazyloadingpage"
          element={
            <Suspense
              fallback={
                <>
                  <Spin
                    indicator={
                      <LoadingOutlined style={{ fontSize: 48 }} spin />
                    }
                  />
                </>
              }
            >
              <LazyLoad />
            </Suspense>
          }
        />

        {/* Bài 9 : Chuyển hướng trang */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/post" element={<Post />} />

        {/* Bài 10 : Detail sản phẩm */}
        <Route path="/listproduct" element={<ListProduct />} />
        <Route path="/product-detail/:id" element={<ProductInfoDetail />} />
      </Routes>
    </>
  );
}

export default App;
