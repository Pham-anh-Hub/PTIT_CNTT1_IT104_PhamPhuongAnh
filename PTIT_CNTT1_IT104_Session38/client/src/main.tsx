import React, { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import {Provider}  from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";
import { store } from "./redux/store/index.store";


const App = React.lazy(() => import("./App"));

const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Suspense fallback={<div className="spinner-borders"></div>}>
          <App />
        </Suspense>
      </>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store} >
      <RouterProvider router={routers}></RouterProvider>
    </Provider>
  </StrictMode>
);
