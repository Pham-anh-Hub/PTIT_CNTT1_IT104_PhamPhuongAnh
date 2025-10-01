import React, { Suspense } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
const Products = React.lazy(() => import("../pages/Products.tsx"));
const Categories = React.lazy(() => import("../pages/Categories.tsx"));
import "../index.css";
import AdminLayout from "../layouts/AdminLayout.tsx";

const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Suspense fallback={<div className="spinner-borders"></div>}>
          <AdminLayout />
        </Suspense>
      </>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/products" replace />,
      },

      {
        path: "products",

        element: (
          <>
            <Suspense fallback={<div className="spinner-borders"></div>}>
              <Products />
            </Suspense>
          </>
        ),
      },
      {
        path: "categories",
        element: (
          <>
            <Suspense fallback={<div className="spinner-borders"></div>}>
              <Categories />
            </Suspense>
          </>
        ),
      },
    ],
  },
]);

export default routers;
