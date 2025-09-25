import React, { Suspense } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
const App = React.lazy(() => import("./App.tsx"));
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store/index.store.ts";

const routers = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <>
            <div className="spinner-borders"></div>
          </>
        }
      >
        <App />
      </Suspense>
    ),
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routers}></RouterProvider>
    </Provider>
  </StrictMode>
);
