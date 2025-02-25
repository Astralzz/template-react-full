# 🚀 Plantilla de React Lista y Configurada  

## 📌 Contacto  

📌 **Portafolio:** [astralzz.io](https://astralzz.github.io/)  
📩 **Email:** [edain.cortez@outlook.com](mailto:edain.cortez@outlook.com)  
📱 **Telegram:** [t.me/lAstralz](https://t.me/lAstralz)  
🔗 **LinkedIn:** [linkedin.com/in/Edain](https://linkedin.com/in/edain-jesus-cortez-ceron-23b26b155)  
😺 **GitHub:** [github.com/Astralzz](https://github.com/Astralzz)  

---

## 📌 Introducción  

Esta plantilla está optimizada para el desarrollo de aplicaciones en **React**, con herramientas modernas preconfiguradas para agilizar el desarrollo y despliegue.  

### 📦 Librerías Incluidas  

- **React Router**: gestión de rutas.  
- **Redux Toolkit**: gestión del estado.  
- **Tailwind CSS 4.0**: estilos rápidos y eficientes.  
- **Sass**: preprocesador de estilos.  
- **Docker**: configuración para facilitar el despliegue.  
- **Vite**: bundler para un desarrollo más rápido.  
- **Formik**: gestión de formularios y validaciones.  
- **Yup**: validación de esquemas en tiempo de ejecución.  

### ⚙️ Configuraciones Realizadas  

- **TypeScript**: ya configurado en toda la app para una mejor experiencia de desarrollo.  
- **React Router**: preconfigurado en **src/router.tsx**.  
- **Redux Toolkit**: configuración lista en **src/redux/**, incluyendo store y middleware.  
- **Tailwind CSS 4.0**: configurado en **src/main.css**.  
- **Tema**: gestión de tema en **src/redux/slices/themeSlice.ts**, integrado con Redux.  
- **Formik & Yup**: formulario con validaciones listo para usar.  
- **Página 404**: ya implementada y funcional.  

### 📖 Tutoriales  

- **Despliegue con Docker**: consulta **docs/tutorials/docker-tutorial.md** para aprender a configurar y desplegar con Docker.  

---

## 📂 Estructura del Proyecto  

```bash
📁 app
 ├── 📁 docker
 │    └── app.dockerfile
 ├── 📁 public
 │    └── vite.svg
 ├── 📁 src
 │    ├── 📁 apis
 │    ├── App.tsx
 │    ├── 📁 assets
 │    │    └── react.svg
 │    ├── 📁 components
 │    │    ├── 📁 err
 │    │    ├── 📁 forms
 │    │    │    └── EmailForm.tsx
 │    │    ├── 📁 inputs
 │    │    │    └── InputDefault.tsx
 │    ├── main.css
 │    ├── main.tsx
 │    ├── 📁 pages
 │    │    └── NotFoundPage.tsx
 │    ├── 📁 redux
 │    │    ├── hook.ts
 │    │    ├── 📁 slices
 │    │    │    └── themeSlice.ts
 │    │    ├── store.ts
 │    ├── router.tsx
 │    ├── 📁 styles
 │    │    └── app.scss
 │    ├── 📁 tests
 │    ├── vite-env.d.ts
 ├── .dockerignore
 ├── .gitignore
 ├── docker-compose.yml
 ├── eslint.config.js
 ├── index.html
 ├── package-lock.json
 ├── package.json
 ├── README.md
 ├── tsconfig.app.json
 ├── tsconfig.json
 ├── tsconfig.node.json
 ├── vite.config.ts
```

---

## 🚀 Uso  

### 🔧 Instalación  

1. Clona este repositorio:  

   ```sh
   git clone https://github.com/Astralzz/template-react-full
   cd template-react-full/app
   ```

2. Instala las dependencias:  

   ```sh
   npm install
   ```

3. Inicia el entorno de desarrollo:  

   ```sh
   npm run dev
   ```

### 📜 Scripts Útiles  

- **`npm run dev`**: Inicia el servidor en modo desarrollo.  
- **`npm run build`**: Compila la aplicación para producción.  
- **`npm run preview`**: Ejecuta la versión compilada de la app.  
- **`npm run lint`**: Verifica errores en el código.  
- **`npm run format`**: Aplica formato automático con Prettier.  
- **`npm run test`**: Ejecuta las pruebas automatizadas.  

---

## 🛠️ Configuraciones Destacadas  

### **Router Configurado**  

React Router está listo en **src/router.tsx**, permitiendo agregar rutas fácilmente:  

```tsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFoundPage />,
    children: routesApp.map((r) => r.route),
  },
]);
```

### **Redux Configurado**  

Redux Toolkit está preconfigurado con TypeScript en **src/redux/**, incluyendo el store y los slices:  

```tsx
import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";

export const store = configureStore({
  reducer: {
    stateTheme: themeSlice,
  },
});

// Tipos de TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### **Tailwind CSS 4.0**  

La configuración de Tailwind está en **src/main.css**. Se puede personalizar fácilmente:  

```css
@import "tailwindcss";

@theme {
  --color-primary-50: rgba(245, 245, 245, 1);
  --color-primary-500: rgba(50, 50, 50, 1);
  --color-primary-900: rgba(0, 0, 0, 1);
}
```

### **Gestión de Tema con Redux**  

El estado del tema se gestiona en **src/redux/slices/themeSlice.ts**.  

```tsx
import { useReduxSelector } from './redux/hook';

const App: React.FC = () => {
  const theme = useReduxSelector((state) => state.stateTheme.theme);
  return <main className={`${theme}`}></main>;
};
```

### **Formularios con Formik & Yup**  

La validación de formularios está lista en **src/components/forms/EmailForm.tsx**.  

```tsx
const EmailForm: React.FC = () => {
  // Action form
  const handleSubmit = React.useCallback(
    (
      values: { asunto: string; },
      {
        setSubmitting,
        resetForm,
      }: {
        setSubmitting: (isSubmitting: boolean) => void;
        resetForm: () => void;
      }
    ): void => {
      console.log("Email enviado:", values);
    },
    []
  );

  return (
    <Formik
      initialValues={{ asunto: "", message: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {/* Está enviando, Es válido, Sucio */}
      {({ isSubmitting, isValid, dirty }) => (
        <Form className="m-9 text-sm max-w-sm mx-auto p-6 bg-white dark:bg-gray-700 rounded-lg shadow-md">
          {/* Asunto */}
          <InputDefault name="asunto" label="Asunto" maxLength={45} required />
          {/* Button action */}
          <button
            type="submit"
            disabled={isSubmitting || !(isValid && dirty)}
            className="w-full mt-4 hover:cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-md transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Enviando..." : "Enviar"}
          </button>
        </Form>
      )}
    </Formik>
  );
};
```

### **404 Page**

Pagina 404 funcionando correctamente en **src/redux/slices/themeSlice.ts**. se puede cambiar y configurar sin problema.

```tsx
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
```

---

## 📜 Conclusión  

Esta plantilla te permite comenzar rápidamente con **React, Redux, Tailwind, TypeScript y Docker**, sin preocuparte por la configuración inicial. 🚀  

---
