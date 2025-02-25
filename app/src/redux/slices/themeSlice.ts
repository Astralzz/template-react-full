import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Definimos tipo
export type ThemeAppType = "dark" | "light";

// Definimos el estado
export type ThemeSliceType = {
  theme: ThemeAppType;
  isThemeDark: boolean;
};

// Definimos datos iniciales
const initialState: ThemeSliceType = {
  theme: "light",
  isThemeDark: false,
};

// Creamos un slice
export const themeSlice = createSlice({
  name: "theme", // Nombre del slice
  initialState, // Datos iniciales
  reducers: {
    // Actualizar tema
    updateTheme: (state, action: PayloadAction<ThemeAppType>) => {
      state.theme = action.payload;
      state.isThemeDark = action.payload === "dark";
    },
  },
});

// Exportamos
export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;
