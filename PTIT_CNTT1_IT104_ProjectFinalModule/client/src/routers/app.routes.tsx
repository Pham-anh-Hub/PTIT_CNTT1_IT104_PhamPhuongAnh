import React, { Suspense } from "react";
import "../App.css";
import { createBrowserRouter } from "react-router-dom";
import WorksBoard from "../pages/WorksBoard";

const Register = React.lazy(() => import("../pages/Register"));
const Login = React.lazy(() => import("../pages/Login"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const BoardDetail = React.lazy(() => import("../pages/BoardDetail"))

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: (
      <>
        <Suspense fallback={<div className="spinner-quadruple-arc"></div>}>
          <Login />
        </Suspense>
      </>
    ),
  },
  {
    path: "/register",
    element: (
      <>
        <Suspense fallback={<div className="spinner-quadruple-arc"></div>}>
          <Register />
        </Suspense>
      </>
    ),
  },
  {
    path: "/",
    element: (
      <>
        <Suspense fallback={<div className="spinner-quadruple-arc"></div>}>
          <Dashboard />
        </Suspense>
      </>
    ),
    children: [
      {
        index:true,
        element:<WorksBoard/>
      },
      {
        path: "boards",
        element: <WorksBoard />,
      },
      {
        path: "boards/:boardId",
        element: <BoardDetail />,
      },
    ],
  },
]);
