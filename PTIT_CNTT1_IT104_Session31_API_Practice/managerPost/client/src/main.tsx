import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import postRouters from "./routes/postRoutes.tsx";

// Gộp & ghép các route đc cấu hình bên ngoài
const routers = createBrowserRouter([...postRouters])

createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={routers}>{/* <App /> */}</RouterProvider>
  </>
);
