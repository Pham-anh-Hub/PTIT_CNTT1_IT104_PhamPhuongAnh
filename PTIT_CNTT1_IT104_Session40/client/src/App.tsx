import { RouterProvider } from "react-router-dom";

import { Provider } from "react-redux";
import routers from "./routers/app.router.tsx";
import { store } from "./redux/store/index.store.ts";

export default function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routers} />
    </Provider>
  );
}

{/* <Routes>
  <Route element={<AdminLayout />}>
    <Route index element={<Navigate to="/products" replace />} />
    <Route path="/products" element={<Products />} />
    <Route path="/categories" element={<Categories />} />
  </Route>
</Routes>; */}
