import React from "react";
import { Link } from "react-router-dom";
import { useReduxSelector } from "../redux/hook";

/**
 * 404 page
 *
 * @returns {JSX.Element}
 */
const NotFoundPage: React.FC = () => {
  // Variables redux
  const theme = useReduxSelector((state) => state.stateTheme.theme);

  return (
    <main className={theme}>
      <div className="bg-primary-100 dark:bg-primary-500 text-gray-900 dark:text-gray-100 w-full flex flex-col items-center text-center justify-center min-h-screen">
        {/* Header */}
        <h1 className="text-6xl font-bold">404</h1>
        {/* Message */}
        <p className="text-xl mt-2">Página no encontrada</p>
        {/* Button */}
        <Link
          to="/"
          className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
