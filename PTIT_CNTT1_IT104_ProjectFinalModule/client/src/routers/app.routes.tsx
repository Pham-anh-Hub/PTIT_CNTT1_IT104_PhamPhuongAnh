import React, { Suspense } from "react";
import "../App.css";
import { createBrowserRouter, Navigate } from "react-router-dom";
const ClosedBoards = React.lazy(() => import("../components/ClosedBoard"));
const Register = React.lazy(() => import("../pages/Register"));
const Login = React.lazy(() => import("../pages/Login"));
const Dashboard = React.lazy(() => import("../pages/Dashboard"));
const BoardDetail = React.lazy(() => import("../pages/BoardDetail"));
const WorksBoard = React.lazy(() => import("../pages/WorksBoard"));
const ProtectRouter = React.lazy(() => import("./ProtectRouter"));
const StarredBoards = React.lazy(() => import("../components/StarredBoards"));
const WorkSpaceBoard = React.lazy(() => import("../components/WorkSpaceBoard"));
const NotFoundPage = React.lazy(() => import("../pages/NotFoundPage"));

const userLoggined = localStorage.getItem("userLoggined");

export const routes = createBrowserRouter([
  {
    path: "/*",
    element: <NotFoundPage />,
  },
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
        <ProtectRouter>
          <Suspense fallback={<div className="spinner-quadruple-arc"></div>}>
            <Dashboard />
          </Suspense>
        </ProtectRouter>
      </>
    ),
    children: [
      {
        path: "/",
        element: (() => {
          if (userLoggined) {
            // Tức là đã login
            const { id } = JSON.parse(userLoggined);
            // chuyển hướng đến trang của ng dùng
            return <Navigate to={`/${id}`} replace />;
          }
          return <Navigate to="/*" replace />;
        })(), // Định nghĩa và chạy 1 hàm vô danh
      },
      {
        path: `/:userId`, // hoặc bỏ, chỉ cần index: true
        element: (
          <ProtectRouter>
            <Suspense fallback={<div className="spinner-quadruple-arc"></div>}>
              <WorksBoard />
            </Suspense>
          </ProtectRouter>
        ),
        children: [
          {
            index: true, // => /  (hiển thị WorksBoard mặc định)
            element: (
              <ProtectRouter>
                <Suspense
                  fallback={<div className="spinner-quadruple-arc"></div>}
                >
                  <WorkSpaceBoard />
                </Suspense>
              </ProtectRouter>
            ),
          },
          {
            path: "boards", // => /boards
            element: (
              <ProtectRouter>
                <Suspense
                  fallback={<div className="spinner-quadruple-arc"></div>}
                >
                  <WorkSpaceBoard />
                </Suspense>
              </ProtectRouter>
            ),
          },
          {
            path: "starreds", // => /starreds
            element: (
              <ProtectRouter>
                <Suspense
                  fallback={<div className="spinner-quadruple-arc"></div>}
                >
                  <StarredBoards />
                </Suspense>
              </ProtectRouter>
            ),
          },
          {
            path: "closeds", // => /closeds
            element: (
              <ProtectRouter>
                <Suspense
                  fallback={<div className="spinner-quadruple-arc"></div>}
                >
                  <ClosedBoards />
                </Suspense>
              </ProtectRouter>
            ),
          },
        ],
      },
      {
        path: ":userId/boards/:boardId",
        element: (
          <ProtectRouter>
            <Suspense fallback={<div className="spinner-quadruple-arc"></div>}>
              <BoardDetail />
            </Suspense>
          </ProtectRouter>
        ),
      },
    ],
  },
]);
