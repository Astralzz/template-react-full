import React, { useState, useTransition } from "react";
import { getDataRequest } from "../apis/get";

/**
 * Página para probar endpoints de API
 *
 * @returns {JSX.Element}
 */
const ApiPage: React.FC = () => {
  // Estados para manejar la data y el estado de error
  const [data, setData] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  // Función para manejar la petición
  const handleSubmit = () => {
    // Reseteamos los estados
    setError(null);

    // Inicio
    startTransition(async () => {
      try {
        // Petición a la API
        const response = await getDataRequest();

        // * Success
        setData(JSON.stringify(response, null, 2));

        // ! Error
      } catch (err: unknown) {
        setError(
          err instanceof Error ? err?.message : "Ocurrió un error desconocido"
        );
      }
    });
  };


  return (
    <div className="mt-8 mb-12 bg-primary-100 dark:bg-primary-500 text-gray-900 dark:text-gray-100">
      {/* Contenido */}
      <h1 className="text-xl font-bold">Modal View</h1>

      {/* Botón para llamar a la api */}
      <button
        onClick={() => !isPending && handleSubmit()}
        disabled={isPending}
        className="btn hover:cursor-pointer bg-gray-600 text-sm text-white p-2 rounded-3xl mt-4 hover:bg-gray-700 disabled:opacity-30 disabled:cursor-not-allowed hover:shadow-md hover:scale-105 transition-transform duration-200"
      >
        {isPending ? "Cargando..." : "Probar API"}
      </button>

        {/* Data */}
      {data && (
        <div className="mt-6 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
          <pre className="whitespace-pre-wrap text-start font-mono text-sm text-gray-800 dark:text-gray-200">
            {data}
          </pre>
        </div>
      )}

      {/* ! Error */}
      {error && (
        <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
          <p className="text-red-600 dark:text-red-400 font-medium">
            Error: {error}
          </p>
        </div>
      )}
    </div>
  );
};

export default ApiPage;
