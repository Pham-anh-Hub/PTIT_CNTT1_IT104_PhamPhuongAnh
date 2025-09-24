import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";
import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import Home from "../components/Home";
const App = React.lazy(() => import("../App"));
const Login = React.lazy(() => import("../components/Login"));
// const App/\ = React.lazy(() => import("../App"));

export const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        }
      >
        <App />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense
        fallback={
          <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        }
      >
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/home",
    element: (
      <Suspense
        fallback={
          <Spin indicator={<LoadingOutlined style={{ fontSize: 48 }} spin />} />
        }
      >
        <Home />
      </Suspense>
    ),
  },
]);
