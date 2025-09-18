import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import store from "./redux/store/index.ts";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./components/Register.tsx";
import Login from "./components/Login.tsx";

const routes = createBrowserRouter([
  { path: "/", element: [<App />] },
  { path: "/register", element: <Register /> },
  { path: "/login", element: <Login /> },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={routes}/>
    </Provider>
  </StrictMode>
);
