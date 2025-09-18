import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import stores from "./redux/store/index.ts";




createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={stores}>
      <App />
    </Provider>
  </StrictMode>
);
