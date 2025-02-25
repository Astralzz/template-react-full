# 📌 COMANDOS VITE & REACT  

## 🚀 Crear un Proyecto de React con Vite y TypeScript

Ejecuta el siguiente comando en la terminal:  

```sh
npx create-vite@latest app --template react-ts
```

📌 **Explicación:**  

- `npx create-vite@latest`: Crea un nuevo proyecto con Vite.
- `app`: Nombre del proyecto (puedes cambiarlo).  
- `--template react-ts`: Indica que se usará **React con TypeScript**.  

---

## 📂 📌 Estructura del Proyecto  

```sh
app/
├── index.html         # Archivo HTML principal
├── package.json       # Dependencias y scripts
├── tsconfig.json      # Configuración de TypeScript
├── vite.config.ts     # Configuración de Vite
└── src/
    ├── App.tsx        # Componente principal
    ├── main.tsx       # Punto de entrada de la app
    ├── assets/        # Archivos estáticos (imágenes, CSS, etc.)
    ├── components/    # Componentes reutilizables
    ├── pages/         # Páginas de la aplicación
    └── styles/        # Archivos de estilos
```

---

## 📦 Instalar Dependencias  

Entra al directorio del proyecto y ejecuta:

```sh
cd app
npm install
```

---

## 🏃 Iniciar el Servidor en Desarrollo  

```sh
npm run dev
```

🔹 Esto iniciará el servidor en `http://localhost:5173`.

---

## 🔨 Comandos Básicos de Vite  

| Comando           | Descripción                                                          |
| ----------------- | -------------------------------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo                                     |
| `npm run build`   | Genera los archivos optimizados para producción                      |
| `npm run preview` | Sirve la versión de producción localmente                            |
| `npm run lint`    | Analiza el código en busca de errores (si tienes ESLint configurado) |

---

## 🛠️ Configurar Alias en `vite.config.ts`  

Para evitar rutas largas como `import Button from "../../../components/Button"`, puedes configurar alias.  

Edita `vite.config.ts`:  

```ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
```

Ahora puedes importar archivos más fácilmente:  

```ts
import Button from "@/components/Button";
```

---

## 🛠️ Agregar React Router  

Si necesitas navegación en tu app, instala **React Router**:  

```sh
npm install react-router-dom
```

📌 Luego, crea rutas en `main.tsx`:  

```tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

📌 Y configura las rutas en `App.tsx`:  

```tsx
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
```

---

## 🎨 Agregar Tailwind CSS  

Si quieres usar **Tailwind CSS**, instálalo con:  

```sh
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

📌 Luego, configura `tailwind.config.js`:

```js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

📌 Agrega Tailwind a tu CSS global (`src/index.css`):  

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## ⚡ Agregar ESLint y Prettier  

Para mantener un código limpio, instala ESLint y Prettier:  

```sh
npm install -D eslint prettier eslint-config-prettier eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

📌 Luego, crea `.eslintrc.cjs`:  

```js
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {},
};
```

📌 Y crea `.prettierrc`:

```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "es5"
}
```

Ejecuta ESLint con:  

```sh
npm run lint
```

---

## 📌 Conclusión  

✅ **Vite + React + TypeScript** es una configuración rápida y moderna.  
✅ **React Router** te permite manejar rutas fácilmente.  
✅ **Tailwind CSS** mejora la productividad en estilos.  
✅ **ESLint y Prettier** mantienen el código limpio y ordenado.  
