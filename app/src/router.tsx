import { createBrowserRouter } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import routesListApp from "./utils/routes";
import App from "./App";

// Configuración del router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      ...routesListApp.map((r) => r.route),
      // { path: "*", element: <NotFoundElement /> },
    ],
  },
]);

export default router;
