import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";

// Respuesta API
export type ApiResponseListType<T = any> = {
  data: T;
  links?: {
    first?: string;
    last?: string;
    next?: string | null;
    prev?: string | null;
  };
  meta?: {
    current_page?: number;
    from?: number;
    last_page?: number;
    links?: any[];
    path?: string;
    per_page?: number;
    to?: number;
    total?: number;
  };
};

/**
 * Comprobar datos indefinidos
 *
 * @throws Error
 */
export const checkDataRequest = (
  res: AxiosResponse<unknown>,
  mensaje = "Los datos son indefinidos"
): void => {
  if (!res?.data) {
    throw new Error(mensaje);
  }
};

/**
 * Manejo de errores en Axios
 *
 * @throws Error
 */
export const catchAxiosError = async (error: unknown): Promise<never> => {
  // ? Es un error de Axios
  if (axios.isAxiosError(error)) {
    // Obtener datos
    const responseData = error?.response?.data;

    //? Existe data
    if (responseData) {
      // ? Es un objeto
      if (typeof responseData === "object") {
        // Recorremos datos
        const errors: string[] = Object.values(responseData).flat().map(String);

        // Mostramos errores
        throw new Error(errors.join(", ") || "Error desconocido en la API");
      }

      // Error por var o desconocido
      throw new Error(String(responseData.error || "Error desconocido"));
    }
  }

  // ? Error desconocido
  throw new Error(error instanceof Error ? error.message : "Error desconocido");
};

// Interceptar y ver las requests de Axios
axios.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  console.log(`-------- REQUEST ${request.url} ----------`);
  console.log("Request:", JSON.stringify(request));
  console.log("-------------------- FIN ----------------------");
  return request;
});
