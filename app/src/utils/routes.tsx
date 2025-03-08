import { JSX } from "react";
import { RouteObject } from "react-router-dom";
import { IconType } from "react-icons";
import EmailForm from "../components/forms/EmailForm";
import ModalPage from "../pages/ModalPage";
import ApiPage from "../pages/ApiPage";

// Tipo de ruta
export type RouteAppType = {
  route: RouteObject;
  label: string;
  Icon?: IconType;
};

// Función para generar rutas
export const generateRouterApp = ({
  path,
  element,
  icon,
  label,
}: {
  path: string;
  label?: string;
  element?: JSX.Element;
  icon?: IconType;
}): RouteAppType => ({
  label: label || path,
  Icon: icon,
  route: {
    path: `/${path}`,
    element: element || <p>{label || path}</p>,
  },
});

// Lista de rutas
const routesListApp: RouteAppType[] = [
  generateRouterApp({ path: "", label: "Home", element: <></> }),
  generateRouterApp({ path: "home" }),
  generateRouterApp({ path: "news" }),
  generateRouterApp({ path: "form-element", element: <EmailForm /> }),
  generateRouterApp({ path: "modal-element", element: <ModalPage /> }),
  generateRouterApp({ path: "api-example", element: <ApiPage /> }),
] as const; // Hace que la lista sea inmutable

export default routesListApp;
