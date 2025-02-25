import { RouteObject, createBrowserRouter } from "react-router-dom";
import { IconType } from "react-icons";
import App from "./App";
import EmailForm from "./components/forms/EmailForm";
import { JSX } from "react";
import NotFoundPage from "./pages/NotFoundPage";

// Tipo de ruta
export type RouteMenu = {
  route: RouteObject;
  label: string;
  Icon?: IconType;
};

// Función para generar rutas
const getRoute = ({
  path,
  element,
  icon,
  label,
}: {
  path: string;
  label?: string;
  element?: JSX.Element;
  icon?: IconType;
}): RouteMenu => ({
  label: label || path,
  Icon: icon,
  route: {
    path: `/${path}`,
    element: element || <p>{label || path}</p>,
  },
});

// Lista de rutas
export const routesApp: RouteMenu[] = [
  getRoute({ path: "", label: "Home", element: <></> }),
  getRoute({ path: "home" }),
  getRoute({ path: "news" }),
  getRoute({ path: "form-element", element: <EmailForm /> }),
];

// Configuración del router
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      ...routesApp.map((r) => r.route),
      // { path: "*", element: <NotFoundElement /> },
    ],
  },
]);

export default router;
