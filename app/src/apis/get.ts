import axios from "axios";
import {
  ApiResponseListType,
  catchAxiosError,
  checkDataRequest,
} from "./config";

/**
 * Obtener datos desde la API
 *
 * @return {Promise<unknown>}
 */
export const getDataRequest = async (): Promise<unknown> => {
  try {
    // Verificar si hay conexión a internet
    if (!navigator.onLine) throw new Error("No hay conexión a internet");

    // Numero aleatorio de 1 a 350
    const nRandom = Math.floor(Math.random() * 350) + 1;

    // Realizar la petición GET
    const response = await axios.get<ApiResponseListType>(
      `https://rickandmortyapi.com/api/character/${nRandom}`
    );

    // Verificar si los datos son válidos
    checkDataRequest(response);

    // Retornar los datos obtenidos
    return response.data;
  } catch (error) {
    return await catchAxiosError(error);
  }
};
