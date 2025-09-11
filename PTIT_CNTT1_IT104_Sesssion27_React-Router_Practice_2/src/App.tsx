import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
// import Header from "./components/Header";
import Product from "./components/Product";
import ProductDetail from "./components/ProductDetail";
import TaskList from "./components/TaskList";
import TaskDetail from "./components/TaskDetail";
import ProductList from "./components/ProductList";
import BlogLayout from "./components/BlogLayout";
import BlogList from "./components/BlogList";
import PostDetail from "./components/PostDetail";
import NotFoundPage from "./components/NotFoundPage";
import Register from "./components/Register";
const Login = React.lazy(() => import("./components/Login"));
import { Spin } from "antd";
import LoadingOutlined from "@ant-design/icons";
function App() {
  return (
    <>
      {/* <Header /> */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Bài 2: Hiển thị và chuyển hướng sản phẩm */}
        <Route path="/product" element={<Product />} />
        <Route path="/products/:id" element={<ProductDetail />} />

        {/* Bài 3: Hiển thị và chuyển hướng danh sách công việc */}
        <Route path="/tasklist" element={<TaskList />} />
        <Route path="/taskdetail/:id" element={<TaskDetail />} />

        {/* Bài 4: Tìm kiếm sản phẩm */}
        <Route path="/products" element={<ProductList />}>
          <Route path="searchParam" />
        </Route>

        {/* Bài 5: Blog cá nhân */}
        <Route path="/blog" element={<BlogLayout />}>
          <Route path="post" element={<BlogList />}></Route>
          <Route path="post/:id" element={<PostDetail />} />
        </Route>

        {/* Bài 6: Ứng dụng thẻ NavLink*/}
        {/* có ứng dụng trong Component Header ở bài 1 rồi  */}

        {/* Bài 7: NotFound Page & catch all route */}
        <Route path="*" element={<NotFoundPage />} />

        {/* Bài 8: Đăng ký và chuyển hướng đến Login */}
        <Route path="/register" element={<Register />} />
        <Route
          path="/login"
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
              <Login />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}

export default App;
