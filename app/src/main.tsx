import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// React redux
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./redux/store";

// Router
import { RouterProvider } from "react-router-dom";
import router from "./router";

// Styles
import "./main.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReduxProvider store={store}>
      <RouterProvider router={router} />
    </ReduxProvider>
  </StrictMode>
);
