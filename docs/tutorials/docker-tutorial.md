# 🚀 Dockerizar una Aplicación React para Producción y Desarrollo  

Este proyecto proporciona una plantilla para configurar una aplicación **React** con **Docker**, permitiendo una implementación rápida y eficiente tanto en entornos de desarrollo como de producción.  

---

## 📬 Contacto  

- 📌 **Portafolio:** [astralzz.io](https://astralzz.github.io/)  
- 📩 **Email:** [edain.cortez@outlook.com](mailto:edain.cortez@outlook.com)  
- 📱 **Telegram:** [t.me/lAstralz.png](https://t.me/lAstralz)  
- 🔗 **LinkedIn:** [linkedin.com/Edain](https://linkedin.com/in/edain-jesus-cortez-ceron-23b26b155)  
- 😺 **GitHub:** [github.com/Astralzz](https://github.com/Astralzz)  

---

## 📂 Estructura del Proyecto  

```bash
react-template/
│── docker/
│   ├── app.dockerfile
│── src/
│── public/
│── .dockerignore
│── .gitignore
│── docker-compose.yml
│── package.json
│── tsconfig.json (si usas TypeScript)
│── tailwind.config.js
│── postcss.config.js
│── vite.config.ts (si usas Vite)
│── README.md
```

---

## 🔧 Requisitos Previos  

1. **Instalar Docker Desktop**  
   - Descárgalo desde [aquí](https://www.docker.com/products/docker-desktop) e instálalo.  
   - Asegúrate de que Docker esté en ejecución.  

2. **Activar WSL 2 en Windows (Opcional, pero recomendado)**  

   ```sh
   wsl --install
   ```

   Luego, en Docker Desktop, ve a **Settings > General** y activa **"Use the WSL 2 based engine"**.  

---

## 📜 Configuración de Docker  

### 📝 1️⃣ **Archivo `.dockerignore`**  

```bash
node_modules
dist
.git
.vscode
.env
.DS_Store
```

### 🏗️ 2️⃣ **Archivo `docker/app.dockerfile`**  

```dockerfile
# Etapa 1: Construcción de la aplicación
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar dependencias y realizar instalación
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copiar el resto del código fuente
COPY . .

# Construcción de la aplicación
RUN npm run build

# Etapa 2: Servidor con Nginx
FROM nginx:alpine

# Copiar archivos compilados al directorio de Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar Nginx
CMD ["nginx", "-g", "daemon off;"]
```

### ⚙️ 3️⃣ **Archivo `docker-compose.yml`**  

```yaml
version: '3.8'

services:
  react-app:
    build:
      context: .
      dockerfile: docker/app.dockerfile
    ports:
      - "3000:80"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=production
```

---

## 🚀 Comandos para Ejecutar el Proyecto  

### 🏗️ **1️⃣ Construir y ejecutar el contenedor**  

```sh
docker-compose up --build -d
```

La aplicación estará disponible en **<http://localhost:3000>**.  

### 📋 **2️⃣ Listar los contenedores activos**  

```sh
docker ps
```

### 🛑 **3️⃣ Detener y eliminar contenedores**  

```sh
docker-compose down
```

### 🖥️ **4️⃣ Acceder a la terminal del contenedor**  

```sh
docker exec -it <nombre-del-contenedor> sh
```

Para obtener el nombre del contenedor:  

```sh
docker ps
```

### 📜 **5️⃣ Ver logs en tiempo real**  

```sh
docker-compose logs -f
```

---

## 📤 Subir el Proyecto a GitHub  

```sh
git init
git add .
git commit -m "Plantilla de React con Docker"
git branch -M main
git remote add origin <URL_DEL_REPO>
git push -u origin main
```

---

## ⚠️ Solución a Problemas Comunes  

### ❌ **Error de permisos con volúmenes en Windows**  

- En Docker Desktop, ve a **Settings > Resources > File Sharing**  
- Asegúrate de que la carpeta del proyecto esté en una ruta accesible, como:  

  ```cmd
  C:\Users\TuUsuario\Documents\react-template
  ```

### ❌ **Error de "No connection" en WSL 2**  

- Reinicia WSL con:  

  ```sh
  wsl --shutdown
  ```

  Luego, reinicia Docker Desktop.  

### ❌ **Error de puertos en uso**  

- Si el puerto **3000** ya está ocupado, cambia en `docker-compose.yml`:  

  ```yaml
  ports:
    - "8080:80"
  ```

  Ahora la aplicación estará en **<http://localhost:8080>**.  

---

## 🎯 ¿Desarrollo o Producción?  

✅ **Producción:** Se usa **Nginx** como servidor estático.  
✅ **Desarrollo:** Puedes modificar `docker-compose.yml` para usar `npm run dev` en lugar de `build`.  

---

### 🔥 Mejoras en esta versión  

- 📌 **Redacción más clara y profesional**  
- 📌 **Corrección de errores en `Dockerfile` (ahora build y ejecución son separadas)**  
- 📌 **Sección de problemas comunes mejor estructurada**  
- 📌 **Comandos Docker optimizados**  

---
