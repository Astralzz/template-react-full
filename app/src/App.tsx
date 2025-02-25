import React from "react";
import { Outlet } from "react-router-dom";
import { useReduxDispatch, useReduxSelector } from "./redux/hook";
import { updateTheme } from "./redux/slices/themeSlice";
import { FaMoon, FaSun } from "react-icons/fa";

// Style
import "./styles/app.scss";

/**
 *
 * App component - Main
 *
 * @returns {JSX.Element}
 */
const App: React.FC = () => {
  // Variables redux
  const theme = useReduxSelector((state) => state.stateTheme.theme);
  const isThemeDark = useReduxSelector((state) => state.stateTheme.isThemeDark);
  const reduxDispatch = useReduxDispatch();

  // Icono del tema
  const IconTheme = React.useMemo(
    () => (isThemeDark ? FaMoon : FaSun),
    [isThemeDark]
  );

  return (
    <main className={theme}>
      <div className="bg-primary-100 dark:bg-primary-500 text-gray-900 dark:text-gray-100 w-full flex flex-col items-center text-center justify-center min-h-screen">
        {/* Encabezado */}
        <div className="flex items-center mb-4">
          <h1 className="text-3xl font-bold">Plantilla React - Astralz</h1>
        </div>

        {/* Botón de cambio de tema */}
        <button
          className="p-3 bg-primary-200 dark:bg-primary-600 rounded-full mb-4 shadow-md hover:shadow-lg hover:cursor-pointer"
          aria-label="update theme color"
          onClick={() =>
            reduxDispatch(updateTheme(isThemeDark ? "light" : "dark"))
          }
        >
          <IconTheme
            className={`text-3xl ${
              isThemeDark ? "text-purple-950" : "text-yellow-200"
            }`}
          />
        </button>

        {/* Contenido principal */}
        <div className="w-full text-2xl font-bold flex items-center justify-center">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default App;
